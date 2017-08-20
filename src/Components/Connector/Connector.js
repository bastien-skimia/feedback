class Connector {
  constructor() {
    var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json; charset=utf-8");
    this.get = {
      FeedBackList : () => {
        return fetch('http://localhost:4000/feedbacks')
        .then(response => response.json())
        .then(response => response)
      },
      Features : () => {
        return fetch('http://localhost:4000/features')
        .then(response => response.json())
        .then(response => response)
      },
      
    }
    this.post = {
      newFeature : () => {
        return fetch('http://localhost:4000/newFeature',{ method: 'POST',headers:myHeaders})
        .then(response => response.json())
        .then(response => response)
      },
      Supporter : (id,roi) => {
        var form = JSON.stringify({id:id,roi:roi})
        return fetch('http://localhost:4000/newSupporter',{ method: 'POST',headers:myHeaders , body:form})
        .then(response => response.json())
        .then(response => response)
      },
    }
    this.delete = {
      Feature : (id) => {
        var form = JSON.stringify({id:id})
        console.log(form)
        return fetch('http://localhost:4000/feature',{ method: 'DELETE',headers:myHeaders, body:form})
        .then(response => response)
      }
    }
  }
}
export default Connector

