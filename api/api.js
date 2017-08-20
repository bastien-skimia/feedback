let express = require("express")
let bodyParser = require('body-parser')
let fs = require('fs')
let events = require('events')
let eventEmitter = new events.EventEmitter()

let app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(require('cors')())

let staticData = []
let feedBackmodel = ()=> {
    return {
        "id":null,
        "rank": null,
        "supporters": null,
        "roi": null
    }
}

let createFeedBackList = () =>{
    var FeedBackList = [];
    for(index in staticData.features){
        let curFeatures = staticData.features[index]
        var feedback = feedBackmodel()
        let supporters = [];
        for(i in staticData.supporters){
            if(staticData.supporters[i].featureId == curFeatures.id){
                supporters.push(staticData.supporters[i])
            } 
        }

        let sumRoi = {}
        for(i in supporters){
            if(!sumRoi[supporters[i].roi]){
                sumRoi[supporters[i].roi] = 0
            } 
            sumRoi[supporters[i].roi] = sumRoi[supporters[i].roi] + 1
        }

        let highest = 0;
        for(i in sumRoi){
            if (sumRoi[i] > highest) highest = i;
        }

        feedback.id = curFeatures.id
        feedback.supporters = supporters.length
        feedback.rank = ((supporters.length) * 100) / 100
        feedback.roi = parseFloat(highest)
        
        FeedBackList[index] = feedback;
    }
    
    return FeedBackList
}
let createFeature = (id) => {
    return {
        id: id,
        name : 'Default feature'
    }
}
let createSupporter = (fId,roi) => {
    return {
        id: staticData.supporters.length + 1,
        featureId : fId,
        roi: roi
    }
}
fs.readFile('./bdd/features.json', 'utf8', (err,features) => {
    staticData.features = JSON.parse(features)
    fs.readFile('./bdd/supporters.json', 'utf8', (err,supporters) => {
        staticData.supporters = JSON.parse(supporters)
        fs.readFile('./bdd/feedbacks.json', 'utf8', (err,feedbacks) => {
            staticData.feedbacks = JSON.parse(feedbacks)
        })
    })
})

app.get("/feedbacks",(req,res) => {
    staticData.feedbacks.data = createFeedBackList();
    res.send(staticData.feedbacks);
});
app.get("/features",(req,res) => {
    res.send(staticData.features);
});
app.post("/newSupporter",(req,res) => {
    staticData.supporters.push(createSupporter(parseFloat(req.body.id),parseFloat(req.body.roi)))
    fs.writeFile('./bdd/supporters.json', JSON.stringify(staticData.supporters));
    res.sendStatus(200);
});
app.post("/newFeature",(req,res) => {
    const newFeature = createFeature(staticData.features.length + 1);
    staticData.features.push(newFeature);
    fs.writeFile('./bdd/features.json', JSON.stringify(staticData.features));
    staticData.feedbacks.data = createFeedBackList();
    res.send(staticData.feedbacks.data);
});
app.delete("/feature",(req,res) => {
    staticData.feedbacks.data = createFeedBackList();
    staticData.feedbacks.data.find((v,i)=>{
        if(v.id == req.body.id){
            return  staticData.feedbacks.data = staticData.feedbacks.data.splice(i,1)
        }
    })
    staticData.features.find((v,i)=>{
        if(v.id == req.body.id){
            fs.writeFile('./bdd/features.json', JSON.stringify(staticData.features.splice(i,1)));
            return staticData.features.splice(i,1)
        }
    })
    res.sendStatus(200);
});

app.listen(4000)
console.log('Server started on port :4000');