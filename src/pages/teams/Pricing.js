import React, { Component } from 'react'
import ParticlesBg from 'particles-bg';
import {Bar, Line, Pie} from 'react-chartjs-2'

export class Pricing extends Component {
    state={
        data: {
            labels: ["jan", "fev", "mars", "avr", "mey", "jun", "juil", "aout", "sept", "oct", "nov", "dec"],
            datasets: [
                {
                    label: "Client",
                    backgroundColor: "rgba(255, 0, 255, 0.75)",
                    data: [4, 10, 12, 15, 13, 19, 40, 58, 29, 26, 28],
                    borderColor: 'none'
                },
                {
                    label: "Revenue",
                    backgroundColor: "rgba(0, 255, 0, 0.75)",
                    data: [14, 15, 11, 1, 2, 12, 2, 14, 15, 11, 1],
                    borderColor: '#f4f4f4'
                }
            ]
        }
    }

    setGradientColor = (canvas, color) => {
        const ctx = canvas.getContext('2d');
        const gradient = ctx.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, color);
        gradient.addColorStop(0.95, "rgba(133, 225, 144, 0.85)")
        return gradient;
    }

    getChartData = (canvas) => {
        const data = this.state.data;
        if (data.datasets) {
            let colors = ["rgba(255, 0, 255, 0.75)", "rgba(0, 255, 0, 0.75)"];
            data.datasets.forEach((set, i) => {
                set.backgroundColor = this.setGradientColor(canvas, colors[i]);
                set.borderColor = "withe";
                // set.data = this.getData()
            });
        }

        return data;
    }
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
                <section id="pricing">
                    <div className="container">
                    <div className="row">
                        <div className="heading text-center col-sm-8 col-sm-offset-2 wow fadeInUp" data-wow-duration="1200ms" data-wow-delay="300ms">
                        <h2>Chart Table</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam</p>
                        </div>
                    </div>
                    <div className="pricing-table">
                        <div className="row">
                        <div className="col-sm-6">
                                <div className="single-table wow flipInY" data-wow-duration="1000ms" data-wow-delay="1100ms">
                                <h3>Professional chart-Line</h3>
                                <div className="price">
                                    $79<span>/Month</span>  
                                </div>
                                <Line
                                    options={{
                                        responsive: true
                                    }}

                                    data={this.getChartData}
                                />
                                
                                </div>
                                <ParticlesBg type="color" config={config} bg={true} />                  
                            </div>
                            <div className="col-sm-6">
                                <div className="single-table wow flipInY" data-wow-duration="1000ms" data-wow-delay="1100ms">
                                <h3>Professional chart-bar</h3>
                                <div className="price">
                                    $49<span>/Month</span>  
                                </div>
                                <Bar
                                    options={{
                                        responsive: true
                                    }}

                                    data={this.getChartData}
                                />
                                
                                </div>
                                <ParticlesBg type="ball" config={config} bg={true} />                  
                            </div>
                        </div>
                    </div>
                    </div>
                    
                </section>

            </>
        )
    }
}

export default Pricing
