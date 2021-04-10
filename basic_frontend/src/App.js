import "./App.css";
import Parallax from "react-rellax";
import IntroComponent from "./IntroComponent";

function App() {

  return (
    <div className="App">
      <IntroComponent />
        
      <Parallax className="self_info_container" speed={ 10 }> 
      </Parallax>
    </div>
  );
}

export default App;
