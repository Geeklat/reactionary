import './App.css';
import mainCharacter from './assets/PixelPortrait.png';
import Projects from './components/Projects';
import About from './components/About';
import GitHub from './components/GitHub';
import Skills from './components/Skills';
import { useState } from 'react';


function App() {
  const [contentMenu, setContentMenu] = useState('projects');

  const CONTENT_COMPONENTS = {
    projects: <Projects />,
    about: <About />,
    github: <GitHub />,
    skills: <Skills />
  };

  function handleContentMenuChange(menuItem) {
    setContentMenu(menuItem.toLowerCase());    
  }

  const arrSideMenu = ["Projects", "About", "GitHub", "Skills"];

  function SideMenu({ name }) {
    return (
      <div className="menuSelection">
        <h1 className="arrow menuHeader material-symbols-outlined">navigate_next</h1>
        <h1 className="menuHeader" onClick={() => handleContentMenuChange(name)}>{name}</h1>
      </div>
    );
  }

  return (    
    <div className="wrapper">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div className="background-container">
        <div className="background">
        </div>
      </div>
      <div className="menu mainMenu">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />        
        <div className="leftContent">
          <div className="menu selectionMenu">
            {arrSideMenu.map((menuName) => (
              <SideMenu key={menuName} name={menuName} />
            ))}
          </div>
          <div className="container menu contactMenu">
            <div className="contactLeft">
              <div className="contactHeader">Justin Green</div>
              <a className="contactHeader" href="mailto:greenisjustin@gmail.com">E-Mail</a>          
              <br />
              <a  href="https://www.linkedin.com/in/greenisjustin/"><i className="fa fa-linkedin-square" style={{ fontSize: '34px', color: 'white', marginTop: '20px' }}></i></a>
            </div>
            <div className="portraitRight">
              <img className="mainCharacter" src={mainCharacter} alt="Justin" />
            </div>          
          </div>
        </div>
        <div className='rightContent'>          
          <div className="menu contentMenu">
            {CONTENT_COMPONENTS[contentMenu]}
          </div>
          
        </div>  
      </div>
    </div>
  );
}

export default App;
