import React, { Component } from "react";
import Moment from "react-moment";

class Workplace extends Component {
	render() {
		const { position, company, website, start_date, end_date, description } = this.props.data;
		return (
			<div className="cd-timeline-block">
				<div className="cd-timeline-img cd-location"></div>
				<div className="cd-timeline-content">
					<h2>{position} at <a target="_blank" href={website}>{company}</a></h2>
					<p>{description}</p>
					<span className="cd-date">
						<Moment parse="MM-DD-YYYY" format="MM/YYYY">{start_date}</Moment> - {end_date ? <Moment parse="MM-DD-YYYY" format="MM/YYYY" >{end_date}</Moment> : "Present"}
				 </span>
				</div>
			</div>
		);
	}
}

export default Workplace;
