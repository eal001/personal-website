import React, {useState} from "react";
import Typist from "react-typist";
import "./Description_Component.css";
const TIMEOUT = 1000;
const CURSOR = {
    show: true,
    blink: true,
    element: "_",
    hideWhenDone: true,
    hideWhenDoneDelay: TIMEOUT*1.44
};

const About_Me_Box = ({num, required_num}) => {
    if(num - required_num === 0) {
        return (
            <div className="description_box" >
                <Typist avgTypingDelay={30} cursor={CURSOR} startDelay={TIMEOUT*.75}>
                    <p className="description">
                        I was born January 2001 in&nbsp;
                        <a  className="link" href="https://www.cityofirvine.org/" target="_blank" rel="noreferrer">
                            Orange County near Irvine, CA
                        </a> 
                        &nbsp;and I'm currently living in&nbsp;
                        <a  className="link" href="https://www.sandiego.gov/" target="_blank" rel="noreferrer">
                            San Diego, CA
                        </a>
                        .
                        Personally, I have a huge interest in martial arts, weightlifting, painting and of course video games. 
                        My favorite games are Super Smash Brothers Ultimate and&nbsp;
                        <a  className="link" href="https://hollowknight.com/" target="_blank" rel="noreferrer">
                            Hollow Knight
                        </a>
                        . 
                        I also love listening to&nbsp;
                        <a  className="link" href="https://open.spotify.com/user/zp6uicnu9gam6w207ha1dpe9q?si=ksjmXGv0RTWIp7IWTioH_A" target="_blank" rel="noreferrer">
                            rock and pop music
                        </a> 
                        &nbsp;from atrists like Kanye West and Red Hot Chili Peppers. 
                    </p>
                </ Typist>
            </div>
        )
    }
    return (
        <> </>
    )
    
}
const Education_Box = ({num, required_num}) => {

    if(num-required_num === 0) {
        return (
            <div className="description_box" >
                <Typist avgTypingDelay={30} cursor={CURSOR} startDelay={TIMEOUT*.75}>
                    <p className="description">
                        I attend the&nbsp;
                        <a  className="link" href="https://ucsd.edu/index.html" target="_blank" rel="noreferrer">
                            University of California: San Diego
                        </a> 
                        &nbsp;as a student in&nbsp; 
                        <a  className="link" href="https://revelle.ucsd.edu/" target="_blank" rel="noreferrer">
                            Revelle College
                        </a>
                        . 
                        I'm a Computer Science (B.S.) Major in my second year. 
                        Despite the COVID-19 pandemic, I've had a great time at this institution so far and I'm really grateful to all of the professors who have made my education possible.
                        Here's to the next two years!
                    </p>
                </ Typist>
            </div>
        )
    }
    return (
        <></>
    )
}

const Border_Component = () => {
    return (
        <>
            <div className="button_border top"></div>
            <div className="button_border right"></div>
            <div className="button_border bot"></div>
            <div className="button_border left"></div>
        </>
    )
}

const Description_Component = () => {

    const [selected, setSelected] = useState(0);

    const handleClick = (num) => {
        setSelected(num);
    }

    return (
        <div id="about" className="description_component">
            <h1 className="description_section_title">Who I Am</h1>
            <div className="description_content_container">
                <div className="description_button_container">
                    <button className="description_button about" onClick={() => handleClick(1)}>
                        <div className="description_button_background"></div>
                        <p className="button_text">About Me</p> 
                        <Border_Component />
                        
                    </button>
                    <div className="rounded_description_bar about_bar"></div>

                    <button className="description_button school" onClick={() => handleClick(2)}>
                        <div className="description_button_background"></div>
                        <p className="button_text">My School</p> 
                        <Border_Component />
                        
                    </button>
                    <div className="rounded_description_bar school_bar"></div> 
                </div>
                <div className="description_text_container">
                    <About_Me_Box num={selected} required_num={1}/>
                    <Education_Box num={selected} required_num={2}/>
                </ div>
            </div>
        </div>
    )
}
export default Description_Component;