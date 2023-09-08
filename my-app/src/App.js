import './App.css';
import mainCharacter from './assets/PixelPortrait.png';
import Projects from './components/Projects';
import About from './components/About';
import GitHub from './components/GitHub';
import Skills from './components/Skills';
import { useState } from 'react';


function App() {
  const [contentMenu, setContentMenu] = useState('');

  const CONTENT_STATES = {
    projects: <Projects />,
    about: <About />,
    gitHub: <GitHub />,
    skills: <Skills />
  }

  function handleContentMenuChange(e) {
    setContentMenu(e);    
  }

  function ContentState({state}) {
    return (
      <div>
        {CONTENT_STATES[state]}
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
            <div className="menuSelection">
              <h1 className="arrow menuHeader material-symbols-outlined">navigate_next</h1>          
              <h1 className="menuHeader" onClick={ () => handleContentMenuChange('projects')}>Projects</h1>
            </div>
            <div className="menuSelection">
              <h1 className="arrow menuHeader material-symbols-outlined">navigate_next</h1>                      
              <h1 className="menuHeader" onClick={ () => handleContentMenuChange('about')}>About Me</h1>
            </div>          
            <div className="menuSelection">
              <h1 className="arrow menuHeader material-symbols-outlined">navigate_next</h1>                      
              <h1 className="menuHeader" onClick={ () => handleContentMenuChange('gitHub')}>GitHub</h1>
            </div>          
            <div className="menuSelection">
              <h1 className="arrow menuHeader material-symbols-outlined">navigate_next</h1>                      
              <h1 className="menuHeader" onClick={ () => handleContentMenuChange('skills')}>Skills</h1>
            </div>          
          </div>
          <div className="container menu contactMenu">
            <div className="contactLeft">
              <div className="contactHeader">Justin Green</div>
              <a className="contactHeader" href="mailto:greenisjustin@gmail.com">E-Mail</a>          
              <br></br>
              <a  href="https://www.linkedin.com/in/greenisjustin/"><i className="fa fa-linkedin-square" style={{ fontSize: '34px', color: 'white', marginTop: '20px' }}></i></a>
            </div>
            <div className="portraitRight">
              <img className="mainCharacter" src={mainCharacter} alt="Justin" />
            </div>          
          </div>
        </div>
        <div className='rightContent'>          
          <div className="menu contentMenu">
            <ContentState state={contentMenu}></ContentState>
          </div>
          
        </div>  
      </div>
    </div>
  );
}

export default App;
