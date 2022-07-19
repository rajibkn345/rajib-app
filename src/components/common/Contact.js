import React from "react";
import "./Contact.css";
import ContactBody from "./ContactBody";

const Contact = () => {
	return (
		<section id='contact'>
			<div className='container'>
				<h1 className='c-heading'>Let's talk</h1>
				<div className='c-form'>
					<ContactBody />
				</div>
				<h5 className='madeby'>Made by Rajib</h5>
			</div>
		</section>
	);
};

export default Contact;
