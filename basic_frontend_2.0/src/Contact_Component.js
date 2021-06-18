import "./Contact_Component.css";
import React, {useState} from "react";
import emailjs from "emailjs-com";
import Typist from "react-typist";
require("dotenv");

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const USER_ID = process.env.REACT_APP_EMAILJS_USER_ID;
const TIMEOUT = 1000;
const CURSOR = {
    show: true,
    blink: true,
    element: "_",
    hideWhenDone: true,
    hideWhenDoneDelay: TIMEOUT*1.44
};

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
        emailjs.send(SERVICE_ID, TEMPLATE_ID, details, USER_ID)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        
        console.log("submitted email");
    }

    return (
        <div className="email_box_background">
            <div className="email_box">
                <input className="text_input name_field " type="text" placeholder="Enter Name Here" value={name} onChange={handleNameChange}></input>
                <input className="text_input email_field" type="text" placeholder="Enter Email Here" value={email} onChange={handleEmailChange}></input>
                <textarea className="text_input message_field" type="text" placeholder="Enter Message Here" value={message} onChange={handleMsgChange}></textarea>
                <div></div>
                <input className="submit_button" type="submit" value="Submit" onClick={handleSubmit}></ input>
            </ div>
        </ div>
    )
}

const Link_Box = () => {

    return(
        <div className="link_box">
            <a href="https://www.linkedin.com/in/eal001/">linkedin</ a>
            <a href="https://github.com/eal001/">github</ a>
            <a href="https://devpost.com/eal001">devpost</ a>
        </div>
    )
}
const Contact_Component = () => {
    return (
        <div className="contact_component">
            <h1 className="contact_section_title">Let's Get in Touch!</h1>
            <p className="contact_description">
                <Typist  avgTypingDelay={40} cursor={CURSOR}>
                    I would love to work together and answer any quentions you might have!
                </ Typist>
            </p>
            <Email_Box />
            <Link_Box />
        </div>
    )
}
export default Contact_Component;