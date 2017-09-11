import React, { Component } from "react";

class Header extends Component {
	render() {
		return (
			<div className="page-header page-header-small" data-filter-color="orange">
				<div className="page-header-image" data-parallax="true" />
				<div className="container">
					<div className="content-center">
						<div className="photo-container">
							<a href="/">
								<img src="img/photo.jpg" alt="" />
							</a>
						</div>
						<h3 className="title">Vitaliy Malyshev</h3>
						<p className="category">Full-Stack Web Developer</p>
						<p>{this.props.about}</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;
