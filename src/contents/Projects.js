import React, { Component } from 'react';
import ProjectCard from '../components/ProjectCard';
import MemeGenerator from "../img/Projects/memeify.jpeg";
import NeuralNetwork from "../img/Projects/neural-network.jpeg";
import Funmark from "../img/Projects/funmark.jpeg";

class Projects extends Component {
	constructor(props){
		super(props);
		this.projects = [
			{
				"title": "Meme Generator",
				"techStack": "JavaScript, React",
				"url": "https://jai-dewani.github.io/memeify/",
				"image": MemeGenerator,
				"points": [
					"Used APIs to fetch images data that can be used by users to create memes",
					"Used Canvas to display the image, add texts and allowed users to drag texts around over the image",
					"Added option to download the image and upload custom images from local system of your own to create a meme"
				],
				"timeline":"September 2020"
			},
			{
				"title": "DeepNeural Net Visualiser",
				"techStack": "Tensorflow, Flask, Streamlit",
				"url": "https://visualize-neural-network.herokuapp.com/",
				"image": NeuralNetwork,
				"points": [
					"Created a Neural Net Visualiser and trained it on the MNIST database which helped in visualizing the hidden layers.",
					"Used Streamlit to create a clean frontend design to update the model layer by layer post result generation",
					"Hosted the project on free-tier Heroku service to be easily accessible by anyone"
				],
				"timeline":"June 2020"
			},
			{
				"title": "FunMark",
				"techStack": "Python",
				"url": "https://pypi.org/project/funmark/",
				"image": Funmark,
				"points": [
					"Created an easy to use python package for benchmarking functions, allows for graphical comparisons as well",
					"Released it on PyPi package manager which currently has around 1.5K downloads",
					"More about FunMark on my blog"
				],
				"timeline":"May 2020"
			},
			{
				"title": "Lab Works",
				"techStack": "HTML, CSS, Js, Bootstrap, Django, SQLite",
				"points": [
					"An application made to ease the lab assessments for technical institutes",
					"Students can sign up and solve coding questions in various supported languages.",
					"Enabled Professors to create coding questions and add test cases.",
					"Used JDoodle’s API to compile student’s programs and check them against predefined test cases."
				],
				"timeline":"April 2019"
			}
		]
	}
	render() {
		return (
			<div className="condiv">
				<div className="image">

				</div>
				<h1 className="subtopic">My Projects</h1>
				{
					this.projects.map(x => {
						return (
							<ProjectCard data={x} /> 
						)
					})
				}	
			</div>
		)
	}
}

export default Projects
