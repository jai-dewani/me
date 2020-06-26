import React, { Component } from 'react';
// import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/Jai-min.jpg';
import Social from '../components/Social';
import Skills from './Skills';


class Home extends Component {
    render() {
        return (
            <div className="rootHome">
                <div className="condiv home">
                    <img src={profilepic} className="profilepic" alt="profilepic"></img>
                    <h2 className="center">Hi I am Jai Kumar Dewani, A Final year student aiming to become a Software Developer after graduating</h2>
                    <Skills/>
                </div>
                <div className="socialparent">
                    <Social />
                </div>
            </div>
            )
        }
    }
    
    export default Home
    