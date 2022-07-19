import React from "react";
import "./Navbar.css";
import { NavHashLink } from "react-router-hash-link";

const Navbar = () => {
	return (
		<>
			<nav>
				<div className='container spaceB flex'>
					<div className='leftSide'>
						<NavHashLink className='navLink' to={"/"}>
							<h1 className='logoH'>{"<Rajib/>"}</h1>
						</NavHashLink>
					</div>
					<div className='rightSide'>
						<ul className='flex'>
							<NavHashLink className='navLink' to='/#intro'>
								<li>About</li>
							</NavHashLink>
							<NavHashLink className='navLink' to='/#skills'>
								<li>Skills</li>
							</NavHashLink>
							<NavHashLink to='/#works' className='navLink'>
								<li>Works</li>
							</NavHashLink>
						</ul>
						<NavHashLink className='navLink' to='/#contact'>
							<button className='btn'>Contact</button>
						</NavHashLink>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
