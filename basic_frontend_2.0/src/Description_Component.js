import { findByLabelText } from "@testing-library/dom";
import "./Description_Component.css";
import HEAD_SHOT from "./images/My_head_2.1.png";
import GEISEL from "./images/geisel_library.jpg";

const About_Me_Box = () => {
   
    return (
        <div className="description_box" >
                <p className="heading">About Me</p>
                <img className="head_shot_image" src={HEAD_SHOT} alt="Head Shot"></img>
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
            </div>
    )
}
const Mission_Box = () => {
    
    return (
        <div className="description_box" >
                <p className="heading">Why I Code</p>
                <p className="description">
                    I was first introduced to coding through a high school course in Java. 
                    Immediately I loved it because it let me create practical, impactful products in a deeply personal way. 
                    I've never found another practice that melds creativity and practicality in such a way. 
                    I am constantly looking to improve my skills in fullstack develoment. All criticism is appreciated.
                </p>
            </div>
    )
}

const Education_Box = () => {

    return (
        <div className="description_box" >
                <p className="heading">My School</p>
                <img className="ucsd_geisel" src={GEISEL} alt="UCSD Geisel"></img>
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
            </div>
    )
}

const Description_Component = () => {
    return (
        <div className="description_component">
            <div className="spacer"></div>
            <About_Me_Box />
            <div className="spacer"></div>
            <Mission_Box />
            <div className="spacer"></div>
            <Education_Box />
            <div className="spacer"></div>
        </div>
    )
}
export default Description_Component;