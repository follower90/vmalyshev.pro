import React, { Component } from "react";
import Workplace from "./Workplace";

class WorkHistory extends Component {
	render() {
		const { jobs } = this.props;
		return (
			<div id="work" className="section work-history">
				<div className="container">
					<h3 className="title">Work History</h3>
					<section id="cd-timeline" className="cd-container">
						{jobs.map((data, key) => <Workplace key={key} data={data} />)}
					</section>
				</div>
			</div>
		);
	}
}

export default WorkHistory;
