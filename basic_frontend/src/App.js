import "./App.css";
import IntroComponent from "./IntroComponent";

function App() {

  return (
    <div className="App">
      <div className="background_view" >
        
        <div className="intro_container">
          <div className="title_img" >
            <IntroComponent />
          </div>
        </div>
        
        <div className="self_info_container"></div>

      </div>
      
    </ div>
      
  );
}

export default App;
