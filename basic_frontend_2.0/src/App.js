import './App.css';
import Title_Component from "./Title_Component";
import Description_Component from "./Description_Component";
import Project_Component from './Project_Component';
import Contact_Component from './Contact_Component';
import Skill_Component from './Skills_Component';
import Nav_Bar from './Nav_Bar';

function App() {
  return (
    <div className="App">
      <div className="main_container">
        <Title_Component />
        <Nav_Bar/>
        <div className="main_background">
          <Skill_Component />
          <Description_Component />
          <Project_Component />
          <Contact_Component />
        </div>      
      </div>
    </div>
  );
}

export default App;
