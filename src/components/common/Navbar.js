import React from "react";
import "./Navbar.css";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
	return (
		<>
			<nav>
				<div className='container spaceB flex'>
					<div className='leftSide'>
						<HashLink className='navLink' to={"/"}>
							<h1 className='logoH'>{"<Rajib/>"}</h1>
						</HashLink>
					</div>
					<div className='rightSide'>
						<ul className='flex'>
							<HashLink className='navLink' to='/#intro'>
								<li>About</li>
							</HashLink>
							<HashLink className='navLink' to='/#skills'>
								<li>Skills</li>
							</HashLink>
							<HashLink to='/#works' className='navLink'>
								<li>Works</li>
							</HashLink>
						</ul>
						<HashLink className='navLink' to='/#contact'>
							<button className='btn'>Contact</button>
						</HashLink>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
