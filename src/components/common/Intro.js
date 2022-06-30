import React from "react";
import "./Intro.css";
import github from "../../img/github.png";
import linkedin from "../../img/linkedin.png";
import instagram from "../../img/instagram.png";
import rajib from "../../img/rajib.png";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiMongodb } from "react-icons/si";

const Intro = () => {
	const reactColor = "#62dafc";
	const nodeColor = "#3f8b39";
	const expressColor = "#f0d81e";
	const mongoColor = "#0fa54c";
	return (
		<section className='intro'>
			<div className='container i-flex'>
				<div className='i-left'>
					<div className='i-name'>
						<span>Hy! I am</span>
						<span className='i-name--full'>Roman Khan Rajib</span>
						<span className='i-name--para'>
							frontend developer with high level of experience in web design and
							development. Producting the quality work.
						</span>
					</div>
					<button className='btn btn--1'>Hire me</button>
					<div className='i-icons'>
						<img className='i-icon' src={github} alt='github' />
						<img className='i-icon' src={linkedin} alt='linkedin' />
						<img className='i-icon' src={instagram} alt='instagram' />
					</div>
				</div>
				<div className='i-right'>
					<div className='i-img'>
						<img alt='boy' src={rajib} />
					</div>
					<div className='floating'>
						<div className='fmern'>
							<FaReact style={{ fontSize: "4rem", color: reactColor }} />
							<span className='mern-text'>ReactJS</span>
						</div>
						<div className='fmern'>
							<FaNodeJs style={{ fontSize: "4rem", color: nodeColor }} />
							<span className='mern-text'>NodeJS</span>
						</div>
						<div className='fmern'>
							<SiMongodb style={{ fontSize: "4rem", color: mongoColor }} />
							<span className='mern-text'>MongoDB</span>
						</div>
						<div className='fmern'>
							<SiJavascript style={{ fontSize: "4rem", color: expressColor }} />
							<span className='mern-text'>ExpressJS</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Intro;
