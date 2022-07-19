import React from "react";
import "./Works.css";
import WorkItem from "./WorkItem";

const Works = () => {
	return (
		<section id='works'>
			<div className='container'>
				<h1 className='w-title'>Works</h1>
				<div className='w-items'>
					<WorkItem />
				</div>
			</div>
		</section>
	);
};

export default Works;
