import React, { Component } from "react";

class Skill extends Component {
	render() {
		return (
			<div>
				<h5 className="tags-title">{this.props.category}</h5>
				<div className="tags">
					{this.props.list.map((skill, key) => (
						<span key={key} className="badge badge-default">
							{skill}
						</span>
					))}
				</div>
			</div>
		);
	}
}

export default Skill;
