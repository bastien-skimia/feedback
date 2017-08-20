
import React,{Component}from 'react';
import './Row.css';



class Row extends Component {
  constructor (props) {
    super(props)
   
    this.state = {
      supporters : 0,
      rank:0
    }
    this.Compteur(this.props.supporters,'supporters',200);
    this.Compteur(this.props.rank,'rank',20)
  }
  ClassCategories (nb){
    switch (nb){
      case 0:
      return "warn"
      case 1:
      return "warn"
      case 3:
      return "good"
      default:
      return "default"
    }
  }
  toggleButton (id){
    document.getElementById(id).classList.toggle("open");
  } 
  Compteur (max,nameState,delai) {
    let i = 0;
    let state = {}
    let int = setInterval(()=>{
      state[nameState] = i;
      if(i === parseFloat(max))
      clearInterval(int)
      this.setState(state)
      i++
      return i;
    },delai);
  }
  LeftMove (left){
   left = {
     left : left +'%'
   }
    return left;
  }
  render() {
    return (
        <div  className={this.ClassCategories(this.props.roi) + " tr"}>
            <div className="td" onClick={() => this.toggleButton("row"+this.props.index)}><span className="index">{this.props.index}</span></div>
            <div className="td" onClick={() => this.toggleButton("row"+this.props.index)}><progress value={this.state.rank} max="100"></progress><span id={"prog"+this.props.index} className="progress" style={this.LeftMove(this.state.rank)}>{this.state.rank}%</span></div>
            <div className="td" onClick={() => this.toggleButton("row"+this.props.index)}>{this.state.supporters}</div>
            <div className="td" onClick={() => this.toggleButton("row"+this.props.index)}><i className="roi"/><i className="roi"/><i className="roi"/></div>
            <div className="td action" id={"row"+this.props.index}>
              <div className="tr">
                <div className="td delete" onClick={this.props.onDelete}>Delete</div>
              </div> 
            </div> 
        </div>
    )
  }
}
 
export default Row;
