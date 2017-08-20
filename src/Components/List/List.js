import React, { Component } from 'react'
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Row from '../Row/Row'
import './List.css'
import Connector from '../Connector/Connector'
let Api = new Connector()


class List extends Component {
  constructor (props){
    super(props)
    this.state = {
      feedbackData : [],
      feedbacksHeaders : []
    }
    Api.get.FeedBackList().then((response) => {
      this.setState({
        feedbackData: response.data,
        feedbacksHeaders : response.headers
      })
    })
  }
  
  render() {
    return (
      
      <div className="table">
        <div className="thead">
          <div className="tr">
            {this.state.feedbacksHeaders.map((v,i) => 
              <div key={i.toString()} className="td">{v}</div>
            )}
          </div>
        </div>
        <div className="tbody">
          {this.state.feedbackData.map((v,i) =>  
              <Row key={i.toString()} index={v.id.toString()} rank={v.rank.toString()} supporters={v.supporters.toString()} roi={v.roi} onDelete={}/>
          )}
        </div>
      </div>
    );
  }
}

export default List;
