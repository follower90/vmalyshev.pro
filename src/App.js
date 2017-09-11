import React, { Component } from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import WorkHistory from "./WorkHistory";
import Skills from "./Skills";
import DownloadCV from "./DownloadCV";
import SmoothScroll from "smooth-scroll";

class App extends Component {
	componentDidMount() {
		new SmoothScroll('a[href*="#"]', {
			ignore: "[data-scroll-ignore]",
			header: null,
			speed: 500,
			offset: 0,
			easing: "easeInOutCubic",
		});
	}

	render() {
		const { about, summary, jobs, skills } = this.props.data;

		return (
			<div>
				<NavBar />
				<div className="wrapper">
					<Header about={about}/>
					<About summary={summary} />
					<WorkHistory jobs={jobs} />
					<Skills skills={skills} />
					<DownloadCV />
					<Footer />
				</div>
			</div>
		);
	}
}

export default App;
