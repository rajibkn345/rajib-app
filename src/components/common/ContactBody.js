import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactBody.css";

const ContactBody = () => {
	const form = useRef();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const sendEmail = (e) => {
		e.preventDefault();
		const serviceId = "service_q8xxpqa";
		const templateId = "template_m928zno";
		const publicKey = "zP5tOumch3rYIZSO-";

		emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
			(result) => {
				console.log(result.text);
			},
			(error) => {
				console.log(error.text);
			}
		);
		setName("");
		setEmail("");
		setMessage("");
	};
	const nameHandler = (e) => {
		setName(e.target.value);
	};
	const emailHandler = (e) => {
		setEmail(e.target.value);
	};
	const messageHandler = (e) => {
		setMessage(e.target.value);
	};
	return (
		<form ref={form} onSubmit={sendEmail}>
			<label>Name</label>
			<input type='text' value={name} onChange={nameHandler} name='user_name' />
			<label>Email</label>
			<input
				type='email'
				value={email}
				onChange={emailHandler}
				name='user_email'
			/>
			<label>Message</label>
			<textarea name='message' onChange={messageHandler} value={message} />
			<input type='submit' value='Send' />
		</form>
	);
};

export default ContactBody;
