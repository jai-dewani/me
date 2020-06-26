import React, { Component } from 'react';
import codechef from '../img/codechef.svg';
import codeforces from '../img/codeforces.svg';
import envelope from '../img/envelope.svg';
import github from '../img/github.svg';
import instagram from '../img/instagram.svg';
import twitter from '../img/twitter.svg';
import linkedin from '../img/linkedin-in.svg';

class Social extends Component {
    render() {
        return (
            <div class="social">
                <a href="mailto:jai.dewani.99@gmail.com" target="_blank" rel="noopener noreferrer preload">
                    <img src={envelope} alt="envelope" />
                </a>
                <a href="https://github.com/jai-dewani" target="_blank" rel="noopener noreferrer preload">
                    <img src={github} alt="github" />
                </a>
                <a href="https://Linkedin.com/in/jai-dewani" target="_blank" rel="noopener noreferrer preload">
                    <img src={linkedin} alt="linkedin" />
                </a>
                <a href="https://twitter.com/jai_dewani" target="_blank" rel="noopener noreferrer preload">
                    <img src={twitter} alt="twitter" />
                </a>
                <a href="https://Instagram.com/jai_dewani" target="_blank" rel="noopener noreferrer preload">
                    <img src={instagram} alt="instagram" />
                </a>
                <a href="https://www.codechef.com/users/jai_dewani" target="_blank" rel="noopener noreferrer preload">
                    <img src={codechef} alt="codechef" />
                </a>
                <a href="https://codeforces.com/profile/jai_dewani" target="_blank" rel="noopener noreferrer preload">
                    <img src={codeforces} alt="codechef" />
                </a>
            </div>
        )
    }
}
    
export default Social
    