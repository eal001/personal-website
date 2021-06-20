import React, {useState} from "react";
import Typist from "react-typist";
import "./Title_Component.css";

const TIMEOUT = 1000;
const CURSOR = {
    show: true,
    blink: true,
    element: "_",
    hideWhenDone: true,
    hideWhenDoneDelay: TIMEOUT*1.44
};
const MY_NAME = "Elliot Lee";
const SELF_DESCRIPTION = "Student Developer";
const LOCATION = "Pirate Tower, Laguna Beach, CA."
const LOC_DESCRIPTION = "A landmark near my home town!"


const Location_Description = ({isOpen}) => {
    if(isOpen) {
        return (
            <div className="location_description">
                <Typist avgTypingDelay={40} cursor={CURSOR} startDelay={250}>
                    {LOCATION}
                    <br />
                    {LOC_DESCRIPTION}
                </Typist>
            </div>
        );
    }
    return(<></>);
}

const Bar = ({isOpen}) => {
    let scale = 0;
    if(isOpen){
        scale = 1;
    }

    return(
        <div className="rounded_bar" style={{ transform: "scaleX("+scale+")" }}></div>
    )
}

const Title_Component = () => {

    const [isOpen, setOpen] = useState(false);

    function handleEnter() {
        
        document.getElementsByClassName("title_image_background")[0].style.animation = "depixelate 2000ms forwards";
        setOpen(true);
    }

    function handleLeave() {
        document.getElementsByClassName("title_image_background")[0].style.animation = "pixelate 2000ms forwards";
        setOpen(false);
    }

    return(
        <div className="title_component">
            <div className="title_image_border">
                <div className="title_image_background">
                    <div className="title">
                        <Typist cursor={CURSOR}>
                            <Typist.Delay blink={true} ms={TIMEOUT*2}/>
                            {MY_NAME}
                            <br />
                            <Typist.Delay blink={true} ms={TIMEOUT*2}/>
                            <br />
                            <Typist.Delay blink={true} ms={TIMEOUT*2}/>
                            {SELF_DESCRIPTION}
                        </Typist>
                    </div>

                    <div className="info_container">
                        <button className="info_button" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
                            <i className="material-icons">info</i>
                        </button>

                        <div classname="info_text_container">
                            <Bar isOpen={isOpen}/>
                            <Location_Description isOpen={isOpen} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Title_Component;