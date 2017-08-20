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

