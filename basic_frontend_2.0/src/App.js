import './App.css';
import Title_Component from "./Title_Component";
import Description_Component from "./Description_Component";
import Project_Component from './Project_Component';

function App() {
  return (
    <div className="App">
      <div className="main_container">
        <Title_Component />
        <Description_Component />
        <Project_Component />
      </div>
    </div>
  );
}

export default App;