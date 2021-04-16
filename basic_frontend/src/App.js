import "./App.css";
import Parallax from "react-rellax";
import IntroComponent from "./IntroComponent";
import SelfComponent from "./SelfComponent";

function App() {

  return (
    <div className="App">
      
      <Parallax speed={-10}>
        <IntroComponent />
      </Parallax>
        
      <Parallax className="self_info_container" speed={ -4 }>
        <SelfComponent />
      </Parallax>
      
    </div>
  );
}

export default App;