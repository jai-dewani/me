import React, { Component } from 'react'

class Widecard extends Component {
    constructor(props){
        super(props);
        this.percentage = this.props.percentage ? (
            <h4 class="secondtext">Percentage: {this.props.percentage}</h4>
            ) : (
                <div></div>
        )
        this.CGPA = this.props.CGPA ? (
            <h4 class="secondtext">CGPA: {this.props.CGPA}</h4>
        ) : (
            <div></div>
        )
    }
    render() {
        return (
            <div class="widecard">
            <div class="compdet">
            <h3>{this.props.title}</h3>
            <h4 class="secondtext"><i>{this.props.where}</i></h4>
            <h4 class="secondtext">From {this.props.from} - {this.props.to}</h4>
            { this.percentage }
            { this.CGPA }
            </div>
            </div>
            )
        }
    }
    
export default Widecard
    