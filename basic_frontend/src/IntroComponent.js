import React, { useState } from 'react';
import Typist from "react-typist";
import "./IntroComponent.css";

const NAME = "Elliot Lee";
const DESCRIPTION = "Student Developer";
const TIMEOUT = 1000;
const HT_MESSAGE_1 = "Pirate Tower in Laguna Beach, CA."
const HT_MESSAGE_2 = "A landmark from my hometown!"

const Hometown_Text = ({isOpen}) => {
    
    const cursor = {
        show: true,
        blink: true,
        element: "_",
        hideWhenDone: true,
        hideWhenDoneDelay: TIMEOUT*1.44
    }

    console.log(isOpen);
    if(isOpen){
        return(
            <div className="ht_text">
                <Typist avgTypingDelay={40} cursor={cursor} startDelay={250}>
                    {HT_MESSAGE_1}
                    <br />
                    {HT_MESSAGE_2}
                </Typist>
            </div>
        );
    }
    return(<></>); //in the future we wnat to delete away ther characters when this goes away
}

const IntroComponent = () => {

    const [scale, setScale] = useState(0);
    const [open, setOpen] = useState(false);

    function handleEnter() {
        //console.log("enter button");
        setOpen(true);
        setScale(1);
    }

    function handleExit() {
        //console.log("leave button");
        setOpen(false);
        setScale(0);
    }


    const cursor = {
        show: true,
        blink: true,
        element: "_",
    }
    
    const bar_style = {
        transition: "all 250ms linear"
    }


    return(
<div className="background_view">
          <div className="intro_container">
            <div className="title_img"> 
              
        <div className="intro_text">
            <Typist cursor={cursor} >
                <Typist.Delay blink={true} ms={TIMEOUT*2}/>
                {NAME}
                <br />
                <Typist.Delay blink={true} ms={TIMEOUT/2}/>
                <br />
                <Typist.Delay blink={true} ms={TIMEOUT}/>
                {DESCRIPTION}
            </Typist>
        </div>

        <div className="ht_container">
            <button className="ht_button" onMouseEnter={handleEnter} onMouseLeave={handleExit}>
                <i className="material-icons" >info</i>
            </button>
            <Hometown_Text isOpen={open}/>
            <div className="rounded_bar" style={{...bar_style, transform: "scaleX("+ scale +")"}} ></div>
        </div>
        </div>
        </div>
        </div>
        )
}


export default IntroComponent;