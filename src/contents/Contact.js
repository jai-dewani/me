import React, { Component } from 'react';
import Social from '../components/Social';
class Contact extends Component {
    render() {
        return (
            <div className="condiv contact">
            <h1 className="subtopic">Contact Me</h1>
            <h3>Email : jai.dewani.99@gmail.com</h3>
            <h3> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; jai17100@iiitnr.edu.in </h3>
                <h3>Twitter   : <a href="https://twitter.com/jai_dewani">@jai_dewani</a></h3>
            <h3>LinkedIn : <a href="https://www.linkedin.com/in/jai-dewani/">@jai-dewani</a></h3>
            <h3>CodeChef : @Jai_dewani</h3>
            <h3>CodeForces : @Jai_dewani</h3>
            <Social />
            </div>
        )
    }
}
    
export default Contact
    