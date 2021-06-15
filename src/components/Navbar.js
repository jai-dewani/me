import React, { Component } from 'react';
import Navitem from './Navitem';

class Navbar extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            'NavItemActive':''
        }
    }
    activeitem=(x)=>
    {
        if(this.state.NavItemActive.length>0){
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        }
        this.setState({'NavItemActive':x},()=>{
            document.getElementById(this.state.NavItemActive).classList.add('active');
        });
    };
    render() {
        return (
            <nav>
            <ul>
            <Navitem item="Home" tolink=""  activec={this.activeitem}></Navitem>
            <Navitem item="About" tolink="about"  activec={this.activeitem}></Navitem>
            <Navitem item="Education" tolink="education"  activec={this.activeitem}></Navitem>
            <Navitem item="Experience" tolink="experience"  activec={this.activeitem}></Navitem>
            <Navitem item="Contact" tolink="contact"  activec={this.activeitem}></Navitem>
            <li>
                <a href="https://blogs.jaid.tech/" target="_blank" rel="noopener noreferrer">Blogs</a>   
            </li>
            </ul>
            </nav>
            )
        }
    }
    
    export default Navbar
    