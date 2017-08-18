class Connector {
  constructor() {
    this.get = {
      FeedBackList : () => {
        return fetch('./api/feedbacks.json')
        .then(response => response.json())
        .then(response => response)
      }
    }
  }
}
export default Connector

