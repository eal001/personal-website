import "./Skill_Component.css"
import React, {useState} from "react";
import Typist from "react-typist";
import FULLSTACK from "./images/fullstack.png";
import ACCESSIBLE from "./images/accessible.png";
import COLLABORATIVE from "./images/collaborative.png";
const TIMEOUT = 1000;
const CURSOR = {
    show: true,
    blink: true,
    element: "_",
    hideWhenDone: true,
    hideWhenDoneDelay: TIMEOUT*1.44
};
const FULLSTACK_DESCRIPTION = "Utilizing client and server side functionality to create safe and impactful products";
const ACCESSIBLE_DESCRIPTION = "Web and mobile applications use a responsive design to work on any size of screen";
const COLLABORATIVE_DESCRIPTION = "Collaborating with others helps build a greater product than the sum of our skills";

const Description = ({num, required_num, message}) => {

    if(num-required_num == 0) {
        return(
            <div className={"desc"+required_num}>
            <Typist avgTypingDelay={30} cursor={CURSOR} startDelay={TIMEOUT*.75}>
                {message}
            </Typist>
            </div>
        )
    }
    return(
        <p className="empty_message"></p>
    )
}

const Main_Skill_Section = () => {
    const [selected, setSelected] = useState(0); 
    const handleClick = (num) => {
        // 0 means no select, 1 = first, 2 = second, 3 = third
        //console.log("handleClick");
        setSelected(num);
    }

    return (
        <div className="big_skill_section">
            <div className="icon_container">

                <div className="icon_wrapper">
                    <button className="circle" onClick={() => handleClick(1)} >
                        {/*  <div>Icons made by <a href="https://smashicons.com/" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
                        <div className="background_holder">
                            <div className="circle_background"></div>
                            <img className="fullstack image" src={FULLSTACK} alt="Fullstack Icon"></img>
                        </div>
                        <div className="rounded_skill_bar bar1"></div>
                    </button>
                    <h2 className="big_skill_title">Fullstack</h2>
                </div>
        
                <div className="icon_wrapper">
                    <button className="circle"  onClick={() => handleClick(2)} >
                        {/*  <div>Icons made by <a href="https://smashicons.com/" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
                        <div className="background_holder">
                            <div className="circle_background"></div>
                            <img className="accessible image" src={ACCESSIBLE} alt="Fullstack Icon"></img>
                        </div>
                        <div className="rounded_skill_bar bar2"></div>
                    </button>
                    <h2 className="big_skill_title">Responsive</h2>
                </div>
                
                <div className="icon_wrapper">
                    <button className="circle" onClick={() => handleClick(3) }>
                        {/*  <div>Icons made by <a href="https://smashicons.com/" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
                        <div className="background_holder">
                            <div className="circle_background"></div>
                            <img className="collaborative image" src={COLLABORATIVE} alt="Fullstack Icon"></img>
                        </ div>
                        <div className="rounded_skill_bar bar3"></div>
                    </button>
                    <h2 className="big_skill_title">Collaborative</h2>
                </div> 
            </div>

            <div className="big_skill_description">
                <Description num={selected} required_num={1} message={FULLSTACK_DESCRIPTION} />
                <Description num={selected} required_num={2} message={ACCESSIBLE_DESCRIPTION} />
                <Description num={selected} required_num={3} message={COLLABORATIVE_DESCRIPTION} />
            </div>
        </div>
    )
}


const Sub_Skill = ({message}) => {
    return (
        <div className="sub_skill">
            <div className="sub_skill_border top"></div>
            <div className="sub_skill_border right"></div>
            <div className="sub_skill_border bot"></div>
            <div className="sub_skill_border left"></div>
            {message}
        </div>
    )
}

const Sub_Skill_Section = () => {
    return (
        <div className="sub_skill_section">
            <div className="sub_skill_container">
                <div className="skill_divider"></div>
                <Sub_Skill message="Node.js" />
                <Sub_Skill message="React" />
                <Sub_Skill message="Algorithm Design" />
                <Sub_Skill message="Object Oriented Programming" />
                <Sub_Skill message="Unix" />
                <Sub_Skill message="Git" />
                <Sub_Skill message="Express" />
                <Sub_Skill message="React Native" />
                <Sub_Skill message="Dynamic Programming" />
                <Sub_Skill message="MacOS" />
                <Sub_Skill message="Windows" />
            </div>
            
        </div>
    )
}

const Language_Section  = () => {
    return (
        <div className="language_section">
            <div className="sub_skill_container">
                <div className="skill_divider"></div>
                <Sub_Skill message="JavaScript" />
                <Sub_Skill message="HTML" />
                <Sub_Skill message="CSS" />
                <Sub_Skill message="Swift" />
                <Sub_Skill message="Java" />
                <Sub_Skill message="Python" />
                <Sub_Skill message="C++" />
                <Sub_Skill message="C" />
                <Sub_Skill message="ARM" />
                <Sub_Skill message="TI-Basic" />
                <Sub_Skill message="English" />
            </div>
        </div>
    )
}
const  Skill_Component = () => {
    return (
        <div className="skill_component">
            <h1 className="skill_section_title">What I Do</h1>
            <Main_Skill_Section />
            <Sub_Skill_Section />
            <Language_Section />
        </div> 
    )
}
export default Skill_Component;