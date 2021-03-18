import React, { Component } from 'react'
import ParticlesBg from 'particles-bg'

export class Service extends Component {
    render() {
        let config = {
            num: [4, 7],
            rps: 0.1,
            radius: [5, 40],
            life: [1.5, 5],
            v: [2, 3],
            tha: [-40, 40],
            // body: "./img/icon.png", // Whether to render pictures
            // rotate: [0, 20],
            alpha: [0.6, 0],
            scale: [1, 0.1],
            position: "center", // all or center or {x:1,y:1,width:100,height:100}
            color: ["random", "#ff0000"],
            cross: "dead", // cross or bround
            random: 15,  // or null,
            g: 2,    // gravity
            // f: [2, -1], // force
            onParticleUpdate: (ctx, particle) => {
                ctx.beginPath();
                ctx.rect(particle.p.x, particle.p.y, particle.radius * 2, particle.radius * 2);
                ctx.fillStyle = particle.color;
                ctx.fill();
                ctx.closePath();
            }
        };
        return (
            <>
                <section id="services">
                    <div className="container">
                    <div className="heading wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="300ms">
                        <div className="row">
                        <div className="text-center col-sm-8 col-sm-offset-2">
                            <h2>Mes Services</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam</p>
                        </div>
                        </div> 
                    </div>
                    <div className="text-center our-services">
                        <div className="row">
                        <div className="col-sm-4 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
                        <ParticlesBg type="color" config={config} bg={true} />
                            <div className="service-icon">
                            <i className="fa fa-flask"></i>
                            </div>
                            <div className="service-info">
                            <h3>Creation des app web et mobile</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                            </div>
                        </div>
                        <div className="col-sm-4 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="450ms" >
                        <ParticlesBg type="lines" config={config} bg={true} />
                            <div className="service-icon">
                            <i className="fa fa-umbrella"></i>
                            </div>
                            <div className="service-info" >
                            <h3 style={{color: 'white'}}>Creativiter</h3>
                            <p style={{color: 'white'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                            </div>
                        </div>
                        <div className="col-sm-4 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="550ms">
                        <ParticlesBg type="fountain" config={config} bg={true} />
                            <div className="service-icon">
                            <i className="fa fa-cloud"></i>
                            </div>
                            <div className="service-info">
                            <h3>Deployment des applicaitons</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                            </div>
                        </div>
                        <div className="col-sm-4 wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="650ms">
                        <ParticlesBg type="thick" config={config} bg={true} />
                            <div className="service-icon">
                            <i className="fa fa-coffee"></i>
                            </div>
                            <div className="service-info">
                            <h3 style={{color: 'white'}}>Design profesionnel</h3>
                            <p style={{color: 'white'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                            </div>
                        </div>
                        <div className="col-sm-4 wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="750ms">
                        <ParticlesBg type="tadpole" config={config} bg={true} />
                            <div className="service-icon">
                            <i className="fa fa-bitbucket"></i>
                            </div>
                            <div className="service-info">
                            <h3>Development des application</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                            </div>
                        </div>
                        <div className="col-sm-4 wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="850ms">
                        <ParticlesBg type="cobweb" config={config} bg={true} />
                            <div className="service-icon">
                            <i className="fa fa-gift"></i>
                            </div>
                            <div className="service-info">
                            <h3>Organisation des codes</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
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

export default Service
