import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <>
              <footer id="footer">
                    <div className="footer-top wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="300ms">
                    <div className="container text-center">
                        <div className="footer-logo">
                        <a href="/" style={{color: '#f4f4f4', fontSize: '20px'}}>Jean-Claude</a>
                        </div>
                        <div className="social-icons">
                        <ul>
                            <li><a className="envelope" href="https://gmail.com/jeclaude78@gmail"><i className="fa fa-envelope"></i></a></li>
                            <li><a className="twitter" href="https://twitter.com/RAKOTONARIVOje6"><i className="fa fa-twitter"></i></a></li> 
                            <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
                            <li><a className="facebook"  href="https://web.facebook.com/racle.rickhy.3"><i className="fa fa-facebook"></i></a></li>
                            <li><a className="linkedin" href="https://www.linkedin.com/in/rakotonarivo-jean-claude-002534199"><i className="fa fa-linkedin"></i></a></li>
                            <li><a className="tumblr" href="#"><i className="fa fa-tumblr-square"></i></a></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                        <div className="col-sm-6">
                            <p>&copy; 2021 Jean-Claude Theme.</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="pull-right">Designed by <a href="#">JC</a></p>
                        </div>
                        </div>
                    </div>
                    </div>
                </footer>  
            </>
        )
    }
}

export default Footer
