import BIASML_IMAGE from "./images/BiasML_by_SSerafin.png";
import RATEMYLEASE_IMAGE from "./images/RateMyLease_JChoe_edit_6.png";
import WORKOUTAPP_ICON from "./images/WorkoutApp_Icon.png";
import "./Project_Component.css";

const BIASML = {
    name: "BiasML",
    imagename: "BiasML_SSerafin",
    image: BIASML_IMAGE,
    link: "https://github.com/eal001/bias-ml",
    description: "BiasML is a full stack web application that uses React as a frontend and Google Firebase backend as a service. " +
            "My Team and I implemented dynamic webscraping and natural language machine learning algorithms to parse web articles sentence by sentence. "+
            "Each sentence of the article is sent to a machine learning model trained on a Cambridge database of political language. " + 
            "Each sentence is then given a score, all of which are evaluated to find an average political bias score for the web article."
}

const RATEMYLEASE = {
    name: "RateMyLease",
    imagename: "RateMyLease_JChoe",
    image: RATEMYLEASE_IMAGE,
    link: "https://github.com/jiuchoe4/rate-my-lease",
    description: "RateMyLease is a fullstack web application that uses React as a frontend, Express as a backend, and MongoDB as a database. " +
        "My Team and I implemented an interactive map to search for, display, rate, and upload houses and leases in the UC Davis area. " +
        "This project was meant to assist UC Davis students with finding a lease once the Covid-19 Pandemic was over and housing near campus was necessary.  " + 
        "Through the frontend, we implemented a Google Maps API that displayed and helped manage the addressess and leases. " +
        "These leases were then requested for or posted to the backend which would store to or read from the MongoDB database."
}

const WORKOUTAPP = {
    name: "WorkoutApp",
    imagename: "WorkoutApp_Icon",
    image: WORKOUTAPP_ICON,
    link: "https://github.com/eal001/Workout-App",
    description: "WorkoutApp is a solo project mobile iOS application that was built using Swift and CocoaPods. " +
        "I created this application to have full customization when it came to logging my workouts, so all exercises and routines need to be manually entered initially. " +
        "Then, each subsequent workout cycle is generated based on the progressive overloading method. " +
        "I used an object oriented design to organize the classes in the app and a storyboard UI to manage the ViewControllers." 
}

const Project = ({classname, imagename, image, link, description}) => {

    const background_name = "project_animated_background";
    const project_name = "project " + classname.toString();
    return (
        <a href={link} className={project_name}>
            <p className="project_heading">{classname}</p>
            <div className="project_image_container">
                <img className={imagename} src={image} alt={imagename}></img>
            </ div>
        </a>
    )
}
const Project_Component = () => {
    return (
        <div className="project_component">
            <h className="project_section_title"> My Projects </h>
            <div className="project_container">
                <Project classname={BIASML.name} imagename={BIASML.imagename} image={BIASML.image} link={BIASML.link} description={BIASML.description}/>
                <Project classname={RATEMYLEASE.name} imagename={RATEMYLEASE.imagename} image={RATEMYLEASE.image} link={RATEMYLEASE.link} description={RATEMYLEASE.description}/>
                <Project classname={WORKOUTAPP.name} imagename={WORKOUTAPP.imagename} image={WORKOUTAPP.image} link={WORKOUTAPP.link} description={WORKOUTAPP.description}/>
            </div>
        </div>
    )
}

export default Project_Component;