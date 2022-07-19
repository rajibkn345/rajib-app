import React from "react";
import "./Skills.css";
import { FaNodeJs, FaReact, FaSass, FaBootstrap } from "react-icons/fa";
import { SiRedux, SiMaterialui } from "react-icons/si";
import { DiMongodb, DiJavascript1 } from "react-icons/di";
const Skills = () => {
	const reactColor = "#62dafc";
	const nodeColor = "#3f8b39";
	const expressColor = "#f0d81e";
	const mongoColor = "#0fa54c";
	const reduxColor = "#7248b6";
	const sassColor = "#c66294";
	const bootsColor = "#8613f4";
	const muiColor = "#0081cc";
	return (
		<section id='skills'>
			<div className='container'>
				<h1 className='s-heading center'>Skills</h1>
				<div className='s-items'>
					<div className='s-item-box'>
						<div className='s-item'>
							<FaReact style={{ color: reactColor, fontSize: "6rem" }} />
							<span className='s-title'>ReactJS</span>
						</div>
					</div>
					<div className='s-item-box'>
						<div className='s-item'>
							<FaNodeJs style={{ color: nodeColor, fontSize: "6rem" }} />
							<span className='s-title'>NodeJS</span>
						</div>
					</div>
					<div className='s-item-box'>
						<div className='s-item'>
							<DiJavascript1
								style={{ color: expressColor, fontSize: "6rem" }}
							/>
							<span className='s-title'>ExpressJS</span>
						</div>
					</div>
					<div className='s-item-box'>
						<div className='s-item'>
							<DiMongodb style={{ color: mongoColor, fontSize: "6rem" }} />
							<span className='s-title'>MongoDB</span>
						</div>
					</div>
					<div className='s-item-box'>
						<div className='s-item'>
							<SiRedux style={{ color: reduxColor, fontSize: "6rem" }} />
							<span className='s-title'>Redux</span>
						</div>
					</div>
					<div className='s-item-box'>
						<div className='s-item'>
							<FaSass style={{ color: sassColor, fontSize: "6rem" }} />
							<span className='s-title'>SASS</span>
						</div>
					</div>
					<div className='s-item-box'>
						<div className='s-item'>
							<FaBootstrap style={{ color: bootsColor, fontSize: "6rem" }} />
							<span className='s-title'>Bootstrap</span>
						</div>
					</div>
					<div className='s-item-box'>
						<div className='s-item'>
							<SiMaterialui style={{ color: muiColor, fontSize: "6rem" }} />
							<span className='s-title'>Material UI</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
