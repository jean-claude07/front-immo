import React, { Component } from 'react'
import Pricing from './Pricing'

export class Team extends Component {
    render() {
        
        return (
            <>
                <section id="team">
                    <div className="container">
                    <div className="row">
                        <div className="heading text-center col-sm-8 col-sm-offset-2 wow fadeInUp" data-wow-duration="1200ms" data-wow-delay="300ms">
                        <h2>MOI</h2>
                        <p>Les plus part de mes projets sont developpé par moi même apart gp location .</p>
                        </div>
                    </div>
                    <div className="team-members">
                        <div className="row">
                        <div className="col-sm-3">
                            <div className="team-member wow flipInY" data-wow-duration="1000ms" data-wow-delay="300ms">
                            
                            <div className="member-info">
                                {/* <h3>Marian Dixon</h3>
                                <h4>CEO &amp; Founder</h4>
                                <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt</p> */}
                            </div>
                            
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="team-member wow flipInY" data-wow-duration="1000ms" data-wow-delay="500ms">
                            <div className="member-image">
                                <img className="img-responsive" src="images/team/2.jpg" alt=""/>
                            </div>
                            <div className="member-info">
                                <h3>RAKOTONARIVO Jean claude</h3>
                                <h4>Designer front-end</h4>
                                <p>je suis un devellopeur front-end</p>
                            </div>
                            <div className="social-icons">
                                <ul>
                                <li><a className="facebook" href="https://web.facebook.com/racle.rickhy.3"><i className="fa fa-facebook"></i></a></li>
                                <li><a className="twitter" href="https://twitter.com/RAKOTONARIVOje6"><i className="fa fa-twitter"></i></a></li>
                                <li><a className="linkedin" href="https://www.linkedin.com/in/rakotonarivo-jean-claude-002534199"><i className="fa fa-linkedin"></i></a></li>
                                {/* <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
                                <li><a className="rss" href="#"><i className="fa fa-rss"></i></a></li> */}
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="team-member wow flipInY" data-wow-duration="1000ms" data-wow-delay="800ms">
                            <div className="member-image">
                                <img className="img-responsive" src="images/team/3.jpg" alt=""/>
                            </div>
                            <div className="member-info">
                                <h3>RAKOTONARIVO Jean claude </h3>
                                <h4>Developer back-end</h4>
                                <p>Je suis un developpeur back-end </p>
                            </div>
                            <div className="social-icons">
                                <ul>
                                    <li><a className="facebook" href="https://web.facebook.com/racle.rickhy.3"><i className="fa fa-facebook"></i></a></li>
                                    <li><a className="twitter" href="https://twitter.com/RAKOTONARIVOje6"><i className="fa fa-twitter"></i></a></li>
                                    <li><a className="linkedin" href="https://www.linkedin.com/in/rakotonarivo-jean-claude-002534199"><i className="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="team-member wow flipInY" data-wow-duration="1000ms" data-wow-delay="1100ms">
                            
                            <div className="member-info">
                                {/* <h3>Marian Dixon</h3>
                                <h4>Support Manager</h4>
                                <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt</p> */}
                            </div>
                            
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
            
                                
                <section id="features" className="parallax">
                    <div className="container">
                        <div className="row count">
                            <div className="col-sm-3 col-xs-6 wow fadeInLeft" data-wow-duration="1000ms" data-wow-delay="300ms">
                            <i className="fa fa-user"></i>
                            <h3 className="timer">4000</h3>
                            <p>Happy Clients</p>
                            </div>
                            <div className="col-sm-3 col-xs-6 wow fadeInLeft" data-wow-duration="1000ms" data-wow-delay="500ms">
                            <i className="fa fa-desktop"></i>
                            <h3 className="timer">200</h3>                    
                            <p>Modern Websites</p>
                            </div> 
                            <div className="col-sm-3 col-xs-6 wow fadeInLeft" data-wow-duration="1000ms" data-wow-delay="700ms">
                            <i className="fa fa-trophy"></i>
                            <h3 className="timer">10</h3>                    
                            <p>WINNING AWARDS</p>
                            </div> 
                            <div className="col-sm-3 col-xs-6 wow fadeInLeft" data-wow-duration="1000ms" data-wow-delay="900ms">
                            <i className="fa fa-comment-o"></i>                    
                            <h3>24/7</h3>
                            <p>Fast Support</p>
                            </div>                 
                        </div>
                    </div>
                </section>

                <Pricing/>
                <section id="twitter" className="parallax">
                    <div>
                    <a className="twitter-left-control" href="#twitter-carousel" role="button" data-slide="prev"><i className="fa fa-angle-left"></i></a>
                    <a className="twitter-right-control" href="#twitter-carousel" role="button" data-slide="next"><i className="fa fa-angle-right"></i></a>
                    <div className="container">
                        <div className="row">
                        <div className="col-sm-8 col-sm-offset-2">
                            <div className="twitter-icon text-center">
                            <i className="fa fa-twitter"></i>
                            <h4>RAKOTONARIVO jean claude </h4>
                            </div>
                            <div id="twitter-carousel" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="item active wow fadeIn" data-wow-duration="1000ms" data-wow-delay="300ms">
                                <p>Vous pouvez me contacter sur twitter <a href="https://twitter.com/RAKOTONARIVOje6"><span>RAKOTONARIVO Jean claude</span></a></p>
                                </div>
                                <div className="item">
                                <p>Vous pouvez me contacter sur facebook <a  href="https://web.facebook.com/racle.rickhy.3"><span>racle rickhy</span></a></p>
                                </div>
                                <div className="item">                                
                                <p>Vous pouvez me contacter sur linkedin <a href="https://www.linkedin.com/in/rakotonarivo-jean-claude-002534199"><span>RAKOTONARIVO jean claude</span> </a></p>
                                </div>
                            </div>                        
                            </div>                    
                        </div>
                        </div>
                    </div>
                    </div>
                </section>  
            </>
        )
    }
}

export default Team
