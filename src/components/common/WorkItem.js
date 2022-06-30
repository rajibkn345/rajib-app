import React from "react";
import "./WorkItem.css";
import prokitibilash from "../../img/prokitibilash.png";
import expenseTracker from "../../img/expense-tracker.png";
import simplePortfolio from "../../img/simple-portfolio.png";
import startup from "../../img/startup.png";
import roboFriends from "../../img/robo-friends.png";
const WorkItem = () => {
	return (
		<>
			<div className='wi-item'>
				<img className='wi-img' alt='robofrineds' src={roboFriends} />
				<div className='wi-heading'>
					<div className='wi-content'>
						<h2 className='wi-title'>{"Robo-Friends"}</h2>
						<span className='wi-para'>
							{"A simple robo-fiends app using react"}
						</span>
					</div>
					<button className='wi-btn'>View Project</button>
				</div>
			</div>
			<div className='wi-item'>
				<img className='wi-img' alt='boy' src={prokitibilash} />
				<div className='wi-heading'>
					<div className='wi-content'>
						<h2 className='wi-title'>{"ProkitiBilash"}</h2>
						<span className='wi-para'>{"A travel & tour site"}</span>
					</div>
					<button className='wi-btn'>View Project</button>
				</div>
			</div>
			<div className='wi-item'>
				<img className='wi-img' alt='expense-tracker' src={expenseTracker} />
				<div className='wi-heading'>
					<div className='wi-content'>
						<h2 className='wi-title'>{"Expense Tracker"}</h2>
						<span className='wi-para'>
							{"A simple expense tracker using react"}
						</span>
					</div>
					<button className='wi-btn'>View Project</button>
				</div>
			</div>
			<div className='wi-item'>
				<img className='wi-img' alt='simplePortfolio' src={simplePortfolio} />
				<div className='wi-heading'>
					<div className='wi-content'>
						<h2 className='wi-title'>{"Simple Portfolio"}</h2>
						<span className='wi-para'>{"A portfolio site"}</span>
					</div>
					<button className='wi-btn'>View Project</button>
				</div>
			</div>
			<div className='wi-item'>
				<img className='wi-img' alt='startup' src={startup} />
				<div className='wi-heading'>
					<div className='wi-content'>
						<h2 className='wi-title'>{"StartUP"}</h2>
						<span className='wi-para'>{"startup site"}</span>
					</div>
					<button className='wi-btn'>View Project</button>
				</div>
			</div>
		</>
	);
};
export default WorkItem;
