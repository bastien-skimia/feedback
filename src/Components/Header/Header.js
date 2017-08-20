import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import List from '../List/List'
import Vote from '../List/Vote'
import './Header.css'

class Header extends Component {
    touchTest () {
        ReactDOM.render(<List />, document.getElementById('Container'))
    }
    touchTest2 () {
        ReactDOM.render(<Vote />, document.getElementById('Container'))
    }
    render() {
        return (
            <header>
                <div className="brand">Feedback App</div>  
                <nav>
                    <ul>
                        <li onClick={this.touchTest}>Feedback Feature</li>
                        <li onClick={this.touchTest2}>Feature</li>
                    </ul>    
                </nav>
            </header>
        );
      }
}

export default Header;