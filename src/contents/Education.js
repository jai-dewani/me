import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="B.Tech in Computer Science and Engineering" where="IIIT Naya Raipur" from="August 2017" to="Present" CGPA="7.54"/>
            <Widecard title="All India Senior School Certificate Examination (AISSCE)." where="Holy Cross Byron Bazar, Raipur" from="2015" to="2017" percentage="85%"/>
            <Widecard title="All India Secondary School Examination (AISSE)" where="Holy Cross Byron Bazar, Raipur" from="2003" to="2015" CGPA="8.8"/>
            </div>
            )
        }
    }
    
export default Education
    