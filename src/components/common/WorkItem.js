import React from "react";
import "./WorkItem.css";
import prokitibilash from "../../img/prokitibilash.png";
import expenseTracker from "../../img/expense-tracker.png";
import simplePortfolio from "../../img/simple-portfolio.png";
import startup from "../../img/startup.png";
import roboFriends from "../../img/robo-friends.png";
import countryApp from "../../img/country-app.png";
import OSMApp from "../../img/osm-app.png";
import FaceApp from "../../img/face-app.png";
import colorGenerator from "../../img/color-generator.png";
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
					<button className='wi-btn'>
						<a href='https://rajibkn345.github.io/robo-friends/'>
							View Project
						</a>
					</button>
				</div>
			</div>
			<div className='wi-item'>
				<img className='wi-img' alt='countryapp' src={countryApp} />
				<div className='wi-heading'>
					<div className='wi-content'>
						<h2 className='wi-title'>{"Robo-Friends"}</h2>
						<span className='wi-para'>
							{"A simple country app using react js and country api"}
						</span>
					</div>
					<button className='wi-btn'>
						<a href='https://rajibkn345.github.io/country-app/'>View Project</a>
					</button>
				</div>
			</div>
			<div className='wi-item'>
				<img className='wi-img' alt='face-app' src={FaceApp} />
				<div className='wi-heading'>
					<div className='wi-content'>
						<h2 className='wi-title'>{"Face Detection App"}</h2>
						<span className='wi-para'>
							{"A full stack project using clarifai api"}
						</span>
					</div>
					<button className='wi-btn'>
						<a href='https://rajibkn345.github.io/face-detection-app/'>
							View Project
						</a>
					</button>
				</div>
			</div>
			<div className='wi-item'>
				<img className='wi-img' alt='OSMapp' src={OSMApp} />
				<div className='wi-heading'>
					<div className='wi-content'>
						<h2 className='wi-title'>{"OSM App"}</h2>
						<span className='wi-para'>
							{"A simple OSM location tracking app using react js and osm api"}
						</span>
					</div>
					<button className='wi-btn'>
						<a href='https://rajibkn345.github.io/osm-location/'>
							View Project
						</a>
					</button>
				</div>
			</div>
			<div className='wi-item'>
				<img className='wi-img' alt='boy' src={prokitibilash} />
				<div className='wi-heading'>
					<div className='wi-content'>
						<h2 className='wi-title'>{"ProkitiBilash"}</h2>
						<span className='wi-para'>{"A travel & tour site"}</span>
					</div>
					<button className='wi-btn'>
						<a href='https://rajibkn345.github.io/prokitibilash/'>
							View Project
						</a>
					</button>
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
					<button className='wi-btn'>
						<a href='https://rajibkn345.github.io/expense-tracker/'>
							View Project
						</a>
					</button>
				</div>
			</div>
			<div className='wi-item'>
				<img className='wi-img' alt='simplePortfolio' src={simplePortfolio} />
				<div className='wi-heading'>
					<div className='wi-content'>
						<h2 className='wi-title'>{"Simple Portfolio"}</h2>
						<span className='wi-para'>{"A portfolio site"}</span>
					</div>
					<button className='wi-btn'>
						<a href='https://rajibkn345.github.io/simple-portfolio/'>
							View Project
						</a>
					</button>
				</div>
			</div>
			<div className='wi-item'>
				<img className='wi-img' alt='startup' src={startup} />
				<div className='wi-heading'>
					<div className='wi-content'>
						<h2 className='wi-title'>{"StartUP"}</h2>
						<span className='wi-para'>{"startup site"}</span>
					</div>
					<button className='wi-btn'>
						<a href='https://rajibkn345.github.io/startup/'>View Project</a>
					</button>
				</div>
			</div>
			<div className='wi-item'>
				<img className='wi-img' alt='color' src={colorGenerator} />
				<div className='wi-heading'>
					<div className='wi-content'>
						<h2 className='wi-title'>{"Background Color generator"}</h2>
						<span className='wi-para'>{"Color generator"}</span>
					</div>
					<button className='wi-btn'>
						<a href='https://rajibkn345.github.io/color-generator/'>
							View Project
						</a>
					</button>
				</div>
			</div>
		</>
	);
};
export default WorkItem;
