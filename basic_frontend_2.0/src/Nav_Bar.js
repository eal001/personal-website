import React, {useState, useEffect} from "react";
import {Link} from "react-scroll";
import "./Nav_Bar.css";


const Nav_Bar = () => {

    useEffect( () => 
        window.addEventListener("scroll", () => {
            const y = window.pageYOffset;
            const title_height = document.getElementById("title_component").offsetHeight;
            //console.log("scrolling, y-offset:" + y);
            //console.log( title_height )
            //console.log( title_height < y) //this is when we execute a style asssignment
            if(title_height < y) {
                document.getElementById("nav_bar").style.position = "fixed";
            } else {
                document.getElementById("nav_bar").style.position = "relative";
            }
        })
    )

    return (
        <div id="nav_bar" className="nav_bar">
                <div className="nav_container"> 
                    <Link 
                    className="nav_link" 
                    activeClass="active" 
                    to="skills"
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={500}>
                        Skills
                        <div className="nav_link_border top4"></div>
                        <div className="nav_link_border right4"></div>
                        <div className="nav_link_border bot4"></div>
                        <div className="nav_link_border left4"></div>
                    </Link>
                    <Link 
                    className="nav_link" 
                    activeClass="active" 
                    to="about"
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={500}>
                        About
                        <div className="nav_link_border top4"></div>
                        <div className="nav_link_border right4"></div>
                        <div className="nav_link_border bot4"></div>
                        <div className="nav_link_border left4"></div>
                    </Link>
                    <Link 
                    className="nav_link" 
                    activeClass="active" 
                    to="projects"
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={500}>
                        Projects
                        <div className="nav_link_border top4"></div>
                        <div className="nav_link_border right4"></div>
                        <div className="nav_link_border bot4"></div>
                        <div className="nav_link_border left4"></div>
                    </Link>
                    <Link 
                    className="nav_link" 
                    activeClass="active" 
                    to="contact"
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={500}>
                        Contact
                        <div className="nav_link_border top4"></div>
                        <div className="nav_link_border right4"></div>
                        <div className="nav_link_border bot4"></div>
                        <div className="nav_link_border left4"></div>
                    </Link>
                </div>
        </div>
    )
}
export default Nav_Bar;