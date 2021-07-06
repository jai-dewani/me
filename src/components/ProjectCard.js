import React, { Component } from 'react'

class Widecard extends Component {
	constructor(props) {
		super(props);
		this.points = this.props.data.points?.map(x => {
			return (
				<li class="expPoints">{x}</li>
			)
		}) 
	}
	render() {
		return (
			<div>
				
			</div>
			<div class="widecard">
				<div class="compdet">
					<div className="image">
						<img className="projectImage" alt="" 
							src={this.props.data.image} />
					</div>
					<h2>{this.props.data.title}</h2>
					<div class="exp-info">
						<h4 class="location">{this.props.where}</h4>
						<h4 class="duraction">{this.props.from} - {this.props.to}</h4>
					</div>
					<ul className="exp-detail">
						{ this.points }
					</ul>
				</div>
			</div>
		)
	}
}

export default Widecard
