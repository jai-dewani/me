import React, { Component } from 'react';
import codechef from '../img/codechef.svg';
import codeforces from '../img/codeforces.svg';
class Social extends Component {
    render() {
        return (
            <div class="social">
                <a href="mailto:jai.dewani.99@gmail.com" target="_blank" rel="noopener noreferrer"><i class="fas fa-envelope"></i></a>
                <a href="https://github.com/jai-dewani" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                <a href="https://Instagram.com/jai_dewani" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
                <a href="https://Linkedin.com/in/jai-dewani" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in"></i></a>
                <a href="https://twitter.com/jai_dewani" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
                <a href="https://www.codechef.com/users/jai_dewani" target="_blank" rel="noopener noreferrer"><img src={codechef} alt="codechef" /></a>
                <a href="https://codeforces.com/profile/jai_dewani" target="_blank" rel="noopener noreferrer"><img src={codeforces} alt="codechef" /></a>
            </div>
        )
    }
}
    
export default Social
    