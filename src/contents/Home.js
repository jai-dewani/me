import React, { Component } from 'react';
import Social from '../components/Social';
import Resume from '../components/Resume';

import Skills from './Skills';
import small from '../img/Jai-small.jpg';

class Home extends Component {
    render() {
        return (
            <div className="rootHome">
                <div className="condiv home">
                    {/* <img  src={small} srcSet={`${small} 300w, ${medium} 768w`} alt="profile pic" /> */}
                    <img src={small} className="profilepic" alt="profilepic"></img>
                    <h2 className="center">
                        Hey! I am Jai Kumar Dewani, <br></br>
                        A final year CSE Undergraduate aiming to become a Software Developer<br></br>
                        Welcome to my portfolio!
                    </h2>
                    <Skills/>
                    <Social />
                    <Resume />
                </div>
            </div>
            )
        }
    }
    
    export default Home
    