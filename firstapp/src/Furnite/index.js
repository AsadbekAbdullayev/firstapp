import React, { Component } from 'react'
import Navbar2 from './Components/Navbar2/index'
import Navbar1 from './Components/Navbar1/index'
import Navbar3 from './Components/Navbar3/index'
import Body from './Components/Body/index'
import IconNavbar from './Components/IconNavbar/index'
import ModernBody from './Components/ModernBody/index'
import Trending from './Components/Trending/index'


export default class Furnite  extends Component {
    render() {
        return (
            <div>
                <Navbar1/>
                <Navbar2/>
                <Navbar3/>
                <Body/>
                <IconNavbar/>
                <ModernBody/>
                <Trending/>
            </div>
        )
    }
}
