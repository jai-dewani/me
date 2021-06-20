import React, { Component } from 'react';
import Expcard from '../components/Expcard';

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
				<Expcard title="FullStack Intern | Carl Zeiss" 
					where="Work from home (Banglore)"
					from="Jan 2021" to="June 2021"
					points={this.zeiss} />
				<Expcard title="Workshop Trainer Intern" 
					where="Directi Camp, IIIT Naya Raipur" 
					from="May '19" to="June '19" 
					points={this.directi} />
				<Expcard title="Co-Founder at TSOC" 
					where="IIIT Naya Raipur" 
					from="Jan '18" to="" 
					points={this.tsoc} />
					
			</div>
		)
	}
}

export default Experience
