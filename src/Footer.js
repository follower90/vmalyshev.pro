import React, { Component } from "react";

class Footer extends Component {
	render() {
		return (
			<footer className="footer footer-default">
				<div className="container">
					<div className="copyright">
						&copy; {new Date().getFullYear()} &nbsp;
						<a href="mailto:vitfollower@gmail.com" target="_blank">
							Vitaliy Malyshev
						</a>
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;
