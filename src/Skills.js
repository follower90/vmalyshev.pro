import React, { Component } from "react";
import Skill from "./Skill";

class Skills extends Component {
	render() {
		return (
			<div id="skills" className="section">
				<div className="container">
					<h3 className="title">Skills</h3>
					{this.props.skills.map((data, key) => <Skill key={key} category={data.category} list={data.list} />)}
				</div>
			</div>
		);
	}
}

export default Skills;
