import React from "react";

import "./SelfComponent.css"

const style_left = {"top": "10.05%", "left": "1%"};

const style_mid = {"top": "5.1%", "left": "34%"};

const style_right = {"top": "0.15%", "right": "1%"};
const SelfComponent = () => {

    return(
        <div className="s_container">
            <div className="parallelogram_container" style={style_left}>
                <div className="parallelogram">
                    <div className="buffer"></div>
                    <p className="title">About Me</p>
                    <div className="animated_background"></div>
                    
                </div>
            </div>
            <div className="parallelogram_container" style={style_mid}>
                
                <div className="parallelogram">
                    
                    <div className="buffer"></div>
                    <p className="title">My School</p>
                    <div className="animated_background"></div>
                </div>
            </div>
            <div className="parallelogram_container" style={style_right}>
                <div className="parallelogram">
                    <div className="buffer"></div>
                    <p className="title">Why I Code</p>
                    <div className="animated_background"></div>
                </div>
            </div>
        </div>
    )
}

export default SelfComponent;