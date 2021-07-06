import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Experience extends Component {
	constructor(props){
		super(props);
		this.zeiss = [
			'Implemented various new methods, which were exposed as APIs using .NET framework to be utilised by frontend',
			'Created and deployed new gRPC servers for reducing coupling and introduce inter-processes communication channel between different services',
			'Utilized NUnit unit-testing framework and Fluent Assertions library for writing new unit test cases to improve the development and reduce turn around time in testing'
		]
		this.directi = [
			'Trained 18 school students about Python programming using code visualization techniques in CodeChef sponsored summer camp of 2 weeks',
			'Learned and improved upon various pedagogy techniques while improving the course content', 
			'Trained 18 school students about Python programming using code visualization techniques in the Codechef sponsored summer camp of 2 weeks, learned and improved upon various pedagogy techniques'
		]
		this.tsoc = [
			'Co-founded the first coder’s club at IIIT-NR, organized various hackathons and events to promote competitive programming among the students, and improve the coding environment of the Institute.'
		]
	}
	render() {
		return (
			<div className="condiv">
				<h1 className="subtopic">My Experience</h1>
				<Widecard title="FullStack Intern | Carl Zeiss" 
					where="Work from home (Banglore)"
					from="January 2021" to="June 2021"
					points={this.zeiss} />
				<Widecard title="Workshop Trainer Intern" 
					where="Directi Camp, IIIT Naya Raipur" 
					from="May 2019" to="June 2019" 
					points={this.directi} />
				<Widecard title="Co-Founder at TSOC" 
					where="IIIT Naya Raipur" 
					from="January 2018" to="April 2020" 
					points={this.tsoc} />
					
			</div>
		)
	}
}

export default Experience
