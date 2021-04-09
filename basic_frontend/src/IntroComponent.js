import React from 'react';
import Typist from "react-typist";
import "./IntroComponent.css";

const NAME = "Elliot Lee";
const DESCRIPTION = "Student Developer";
const TIMEOUT = 1000;
const IntroComponent = () => {
    const cursor = {
        show: true,
        blink: true,
        element: "_",
        hideWhenDone: true,
        hideWhenDoneDelay: TIMEOUT*1.44
      }

    return(
        <div className="intro_text">
            <Typist cursor={cursor}>
                <Typist.Delay blink={true} ms={TIMEOUT*2}/>
                {NAME}
                <br />
                <Typist.Delay blink={true} ms={TIMEOUT/2}/>
                <br />
                <Typist.Delay blink={true} ms={TIMEOUT}/>
                {DESCRIPTION}
            </Typist>
        </div>
    )
}

export default IntroComponent;