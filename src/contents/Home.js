import React, { Component } from 'react';
import Social from '../components/Social';
import Resume from '../components/Resume';

import Skills from './Skills';
import small from '../img/Jai-small.jpg';
import wave from "../img/wave.gif";
class Home extends Component {
    render() {
        return (
            // <div className="rootHome">
                <div className="condiv home">
                    <img src={small} className="profilepic" alt="profilepic"></img>
                    <h2 className="center">
                        Hey! I am Jai Kumar Dewani, <br/>
                        A Software Developer, interested in building on web<br/>
                        Welcome <img src={wave} alt="Waving hand" id="waving-hand"/> 
                    </h2>
                    {/* <Skills/> */}
                    <Social />
                    <Resume />
                </div>
            // </div>
            )
        }
    }
    
    export default Home
    