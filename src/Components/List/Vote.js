import React, { Component } from 'react'
import './List.css'
import Connector from '../Connector/Connector'
let Api = new Connector()


class Vote extends Component {
  constructor (props){
    super(props)
    this.state = {
      features: []
    }
    this.state.curRoi = 1;
    Api.get.Features().then((response) => {
      this.setState({
        features: response
      })
    })
  }
  toggleButton (id){
    document.getElementById(id).classList.toggle("open");
  } 
  onPost (id) {
    Api.post.Supporter(id,this.state.curRoi);
  }
  onTap (e,$this){
    $this.setState({curRoi : e.target.value})
  }
  render() {
    return (
      <div className="table">
        <div className="thead">
          <div className="tr">
            <div className="td">Feature</div>
            <div className="td">Name</div>
          </div>
        </div>
        <div className="tbody">
          {this.state.features.map((v,i) =>  
            <div className="good tr">
                <div className="td" onClick={() => this.toggleButton("row"+v.id)}><span className="index">{v.id}</span></div> 
                <div className="td" onClick={() => this.toggleButton("row"+v.id)}>{v.name}</div>
                <div className="td action large" id={"row"+v.id}>
                  <div className="tr">
                  <div className="td"><input type="number" min="1" max="3" onChange={(e) => this.onTap(e,this)}/></div>
                    <div className="td update" onClick={() => this.onPost(v.id)}>Voter !</div>
                  </div> 
                </div> 
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Vote;
