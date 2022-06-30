import React from "react";
import "./Navbar.css";

const Navbar = () => {
	return (
		<>
			<nav>
				<div className='container spaceB flex'>
					<div className='leftSide'>
						<h1 className='logoH'>{"<Rajib/>"}</h1>
					</div>
					<div className='rightSide'>
						<ul className='flex'>
							<li>Home</li>
							<li>Services</li>
							<li>Experience</li>
							<li>Works</li>
							<li>Testimonial</li>
						</ul>
						<button className='btn'>Contact</button>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
