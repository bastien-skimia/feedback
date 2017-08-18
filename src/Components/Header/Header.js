import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import List from '../List/List'
import './Header.css'

class Header extends Component {
    touchTest () {
        ReactDOM.render(<List />, document.getElementById('Container'))
    }
    touchTest2 () {
        ReactDOM.render(<div>Page product</div>, document.getElementById('Container'))
    }
    render() {
        return (
            <header>
                <div className="brand">Feedback Ranking App</div>  
                <nav>
                    <ul>
                        <li onClick={this.touchTest}>Feedback Ranking</li>
                        <li onClick={this.touchTest2}>Product</li>
                    </ul>    
                </nav>
            </header>
        );
      }
}

export default Header;