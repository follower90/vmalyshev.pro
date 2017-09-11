import React, { Component } from "react";

class About extends Component {
	render() {
		return (
			<div id="summary" className="section summary">
				<div className="container">
					<h3 className="title">Summary</h3>
					<div className="description">{this.props.summary.map((text, key) => <p key={key}>- {text}</p>)}</div>
				</div>
			</div>
		);
	}
}

export default About;
