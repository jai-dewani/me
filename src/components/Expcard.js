import React, { Component } from 'react'

class Widecard extends Component {
	constructor(props) {
		super(props);
		this.points = this.props.points.map(x => {
			return (
				<div class="expPoints">{x}</div>
			)
		}) 
	}
	render() {
		return (
			<div class="widecard">
				<div class="compdet">
					<h3>{this.props.title}</h3>
					<h4 class="secondtext"><i>{this.props.where}</i></h4>
					<h4 class="secondtext">From {this.props.from} - {this.props.to}</h4>
					<div className="">
						{ this.points }
					</div>
				</div>
			</div>
		)
	}
}

export default Widecard
