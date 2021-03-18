import React, { Component } from 'react'
import slider1 from '../images/slider/slider1.jpg'
import slider2 from '../images/slider/slider2.jpg'
import slider3 from '../images/slider/slider3.jpg'

export class Header extends Component {
    render() {
        return (
            <>
                <header id="home">
                    <div id="home-slider" className="carousel slide carousel-fade" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="item active" style={{backgroundImage: `url(${slider1})`}}>
                                <div className="caption">
                                    <h1 className="animated fadeInLeftBig">Bienvenue sur <span>Jean CLaude site</span></h1>
                                    <p className="animated fadeInRightBig">Bootstrap - Disigne responsive - React js - Ruby on Rails API</p>
                                    <a data-scroll className="btn btn-start animated fadeInUpBig" href="#services">Start now</a>
                                </div>
                            </div>
                            <div className="item" style={{backgroundImage: `url(${slider2})`}}>
                            <div className="caption">
                                <h1 className="animated fadeInLeftBig">Salutation de ma part<span>jean claude</span></h1>
                                <p className="animated fadeInRightBig">Bootstrap - Disigne responsive - React js - Ruby on Rails API</p>
                                <a data-scroll className="btn btn-start animated fadeInUpBig" href="#services">Start now</a>
                            </div>
                            </div>
                            <div className="item" style={{backgroundImage: `url(${slider3})`}}>
                            <div className="caption">
                                <h1 className="animated fadeInLeftBig">L'un de mes <span>Creation</span></h1>
                                <p className="animated fadeInRightBig">Bootstrap - Disigne responsive - React js - Ruby on Rails API</p>
                                <a data-scroll className="btn btn-start animated fadeInUpBig" href="#services">Start now</a>
                            </div>
                            </div>
                        </div>
                        <a className="left-control" href="#home-slider" data-slide="prev"><i className="fa fa-angle-left"></i></a>
                        <a className="right-control" href="#home-slider" data-slide="next"><i className="fa fa-angle-right"></i></a>

                        <a id="tohash" href="#services"><i className="fa fa-angle-down"></i></a>

                        </div>
                        <div className="main-nav">
                        <div className="container">
                            <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="/">
                                <h1 style={{color: '#f4f4f4'}}>Jean-Claude</h1>
                            </a>                    
                            </div>
                            <div className="collapse navbar-collapse">
                            <ul className="nav navbar-nav navbar-right">                 
                                <li className="scroll active"><a href="#home">Home</a></li>
                                <li className="scroll"><a href="#services">Service</a></li> 
                                <li className="scroll"><a href="#about-us">About Us</a></li>                     
                                <li className="scroll"><a href="#portfolio">Portfolio</a></li>
                                <li className="scroll"><a href="#team">Team</a></li>
                                <li className="scroll"><a href="#blog">Blog</a></li>
                                <li className="scroll"><a href="#contact">Contact</a></li>       
                            </ul>
                            </div>
                        </div>
                    </div>
                </header>  
            </>
        )
    }
}

export default Header
