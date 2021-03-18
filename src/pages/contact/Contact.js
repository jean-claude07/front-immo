import React, { Component } from 'react'

export class Contact extends Component {
    render() {
        return (
            <>
                <section id="contact">
                    {/* <div id="google-map" className="wow fadeIn" data-latitude="52.365629" data-longitude="4.871331" data-wow-duration="1000ms" data-wow-delay="400ms"></div> */}
                    <div id="contact-us" className="parallax">
                    <div className="container">
                        <div className="row">
                        <div className="heading text-center col-sm-8 col-sm-offset-2 wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="300ms">
                            <h2>Contact Us</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam</p>
                        </div>
                        </div>
                        <div className="contact-form wow fadeIn" data-wow-duration="1000ms" data-wow-delay="600ms">
                        <div className="row">
                            <div className="col-sm-6">
                            <form id="main-contact-form" name="contact-form" method="post" action="#">
                                <div className="row  wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="300ms">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                    <input type="text" name="name" className="form-control" placeholder="Name" required="required"/>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                    <input type="email" name="email" className="form-control" placeholder="Email Address" required="required"/>
                                    </div>
                                </div>
                                </div>
                                <div className="form-group">
                                <input type="text" name="subject" className="form-control" placeholder="Subject" required="required"/>
                                </div>
                                <div className="form-group">
                                <textarea name="message" id="message" className="form-control" rows="4" placeholder="Enter your message" required="required"></textarea>
                                </div>                        
                                <div className="form-group">
                                <button type="submit" className="btn-submit">Send Now</button>
                                </div>
                            </form>   
                            </div>
                            <div className="col-sm-6">
                            <div className="contact-info wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="300ms">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                                <ul className="address">
                                <li><i className="fa fa-map-marker"></i> <span> Address:</span> Lot 003MAN Manandriana avaradrano </li>
                                <li><i className="fa fa-phone"></i> <span> Phone:</span> 0346081351 / 0328762851  </li>
                                <li><i className="fa fa-envelope"></i> <span> Email:</span><a href="mailto:jeclaude78@gmail.com"> jeclaude78@gmail.com</a></li>
                                <li><i className="fa fa-globe"></i> <span> Website:</span> <a href="/"> % </a></li>
                                </ul>
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

export default Contact
