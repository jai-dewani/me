import React, { Component } from 'react';
import Expcard from '../components/Expcard';

class Experience extends Component {
	constructor(props){
		super(props);
		this.directi = [
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
				<Expcard title="Workshop Trainer Intern" where="Directi, Naya Raipur" from="May '19" to="June '19" points={this.directi} />
				<Expcard title="Co-Founder at TSOC" where="" from="Jan '18" to="Current" points={this.tsoc} />
			</div>
		)
	}
}

export default Experience
