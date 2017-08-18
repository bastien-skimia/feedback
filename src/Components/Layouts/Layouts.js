import React, { Component } from 'react';
import './Layouts.css'
import Header from '../Header/Header'
import List from '../List/List'
import Footer from '../Footer/Footer'

class Layouts extends Component {
    render() {
        return (
            <div>
                <Header />
                <div id="Container" className="container"><List/></div>
                <Footer />
            </div>
        )
    }
}

export default Layouts;