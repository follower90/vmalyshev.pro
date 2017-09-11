import React, { Component } from "react";

class NavBar extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg bg-primary fixed-top navbar-transparent" data-color-on-scroll="400">
				<div className="container">
					<div className="dropdown button-dropdown">
						<a href="#" className="dropdown-toggle" id="navbarDropdown" data-toggle="dropdown">
							<span className="button-bar" />
							<span className="button-bar" />
							<span className="button-bar" />
						</a>
						<div className="dropdown-menu" aria-labelledby="navbarDropdown">
							<a className="dropdown-item" href="#summary">
								About
							</a>
							<a className="dropdown-item" href="#work">
								Work History
							</a>
							<a className="dropdown-item" href="#skills">
								Skills
							</a>
							<div className="dropdown-divider" />
							<a className="dropdown-item" href="#contact">
								Contact me
							</a>
						</div>
					</div>
					<div className="navbar-translate">
						<a className="navbar-brand" href="/">
							Vitaliy Malyshev
						</a>
						<button
							className="navbar-toggler navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#navigation"
							aria-controls="navigation-index"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-bar bar1" />
							<span className="navbar-toggler-bar bar1" />
							<span className="navbar-toggler-bar bar1" />
						</button>
					</div>
					<div
						className="collapse navbar-collapse justify-content-end"
						id="navigation"
						data-nav-image="img/blurred-image-1.jpg"
					>
						<ul className="navbar-nav">
							<li className="nav-item">
								<a className="nav-link" href="#summary">
									About
								</a>
							</li>

							<li className="nav-item">
								<a className="nav-link" href="#work">
									Work History
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#skills">
									Skills
								</a>
							</li>

							<li className="nav-item">
								<a
									className="nav-link"
									title="Github"
									data-placement="bottom"
									href="https://github.com/follower90"
									target="_blank"
								>
									<i className="fa fa-github" />
									<p className="d-lg-none d-xl-none">Github</p>
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link"
									title="LinkedIn"
									data-placement="bottom"
									href="https://www.linkedin.com/in/vitaliymalyshev/"
									target="_blank"
								>
									<i className="fa fa-linkedin" />
									<p className="d-lg-none d-xl-none">LinkedIn</p>
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link"
									title="Facebook"
									data-placement="bottom"
									href="https://www.facebook.com/vitaliy.malyshev.50"
									target="_blank"
								>
									<i className="fa fa-facebook-square" />
									<p className="d-lg-none d-xl-none">Facebook</p>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

export default NavBar;
