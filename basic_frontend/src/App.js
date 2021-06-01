import "./App.css";
import Parallax from "react-rellax";
import IntroComponent from "./IntroComponent";
import SelfComponent from "./SelfComponent";

function App() {
  let intro_speed = -10;
  let self_speed = -6;
  //console.log(window.innerWidth);
  if(window.innerWidth < 950){
    console.log("mobile view")
    return (
      <div>
        
        <Parallax speed={intro_speed}>
          <IntroComponent />
        </Parallax>
        <div className="self_info_container">
          <SelfComponent />
        </div>
        
      </div>
    );
  }
  console.log("computer view")
  return (
    <div>
      
      <Parallax speed={intro_speed}>
        <IntroComponent />
      </Parallax>
        
      <Parallax className="self_info_container" speed={self_speed}>
        <SelfComponent />
      </Parallax>
      
    </div>
  );
}

export default App;