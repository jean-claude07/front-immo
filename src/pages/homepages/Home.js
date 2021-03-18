import React, { Component } from 'react'

import About from '../about/About'
import Blog from '../blog/Blog'
import Contact from '../contact/Contact'
import Portfolio from '../portfolio/Portfolio'
import Service from '../service/Service'
import Team from '../teams/Team'

export class Home extends Component {
    
    
    render() {
        console.log(this.state)
        return (
            <>
                <Service/>
                <About/>

                <Portfolio/>
                <Team/>

                

                <Blog/>

                <Contact/>  
            </>
        )
    }
}

export default Home
