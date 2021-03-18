import React, { Component } from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Home from './Home'


export class Homepage extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="preloader"> <i className="fa fa-circle-o-notch fa-spin"></i></div>

                <Header/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                    </Switch>
                <Footer/>
            </BrowserRouter>
        )
    }
}

export default Homepage
