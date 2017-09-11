import React, { Component } from "react";

class DownloadCV extends Component {
	download() {
		window.location.href = "Vitaliy Malyshev.doc";
	}
	render() {
		return (
			<div id="contact" className="section">
				<div className="description">
					<button className="btn" onClick={this.download}>
						<i className="fa fa-download" /> &nbsp; Download CV
					</button>
				</div>
			</div>
		);
	}
}

export default DownloadCV;
