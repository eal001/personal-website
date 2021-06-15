import "./Contact_Component.css";
import React, {useState} from "react";
import emailjs from "emailjs-com";
require("dotenv");

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const USER_ID = process.env.REACT_APP_EMAILJS_USER_ID;
const Email_Box = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handleMsgChange = (e) => {
        setMessage(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log("name: " + name);
        console.log("email: " + email);
        console.log("message: " + message);
        
        const details = {
            from_name: name,
            from_email: email,
            message: message
        }
        
        //commented out for the time being
        // emailjs.send(SERVICE_ID, TEMPLATE_ID, details, USER_ID)
        //     .then((result) => {
        //         console.log(result.text);
        //     }, (error) => {
        //         console.log(error.text);
        //     });
        
        console.log("submitted email");
    }

    return (
        <form className="Email_Box" onSubmit={handleSubmit} >
            <label className="input_label" id="name_input">Name</label>
            <input className="name_input" type="text" id="name_input" placeholder="John Doe" value={name} onChange={handleNameChange}></input>
            <label className="input_label" id="email_input">Email</label>
            <input className="email_input" type="text" id="email_input" placeholder="JohnDoe@gmail.com" value={email} onChange={handleEmailChange}></input>
            <label className="input_label" id="message_input">Message</label>
            <input className="message_input" type="text" id="message_input" placeholder="Message Here" value={message} onChange={handleMsgChange}></input>
            <input className="submit_button" type="submit" value="Submit"></ input>
        </form>
    )
}
const Contact_Component = () => {
    return (
        <div className="contact_component">
            <h1>Let's Get in Touch!</h1>
            <Email_Box />
        </div>
    )
}
export default Contact_Component;