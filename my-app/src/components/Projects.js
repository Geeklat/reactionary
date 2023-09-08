// src/components/Projects.js

import React from 'react';

function Projects(props) {
      
  const PROJECTS = {
    sureCost: <SureCost />,
    postClick: <PostClick />,
    qsrSoft: <QsRSoft />,
    northrop: <Northrop />,
    tmc: <TMC />,
    azimuth: <Azimuth />
  }


  function Normalizer(){
    return Object.keys(PROJECTS).map(key => <li>{PROJECTS[key]}</li>)
  };

  function SureCost(){
    return <div className='contentSpacer'>
            <div className='contentHeader'>SureCost</div>
            <ul>
                <li>Guided and led migration from legacy Struts to React framework, ensuring seamless transition.</li>
                <li>Developed applications using Flex, HTML, CSS, JavaScript, and Struts backend.</li>
            </ul>
        </div>
  };

  function PostClick(){
    return <div className='contentSpacer'>
        <div className='contentHeader'>PostClick</div>
        <ul>
            <li>Developed user-driven landing page components, integrated ADA compliant elements, and collaborated remotely with an international team.</li>
            <li>Utilized Bootstrap, HTML, CSS, JavaScript, and Node backend for development.</li>
            <li>Initiated migration of components to a tailwind-driven front-end framework as a step towards transitioning to React environment.</li>
        </ul>
    </div>
  };

  function QsRSoft(){
    return <div className='contentSpacer'>
        <div className='contentHeader'>QsRSoft</div>
        <ul>
            <li>Developed greenfield application for a quick service restaurant web suite add-on.</li>
            <li>Utilized Vue/Vuetify, JavaScript for frontend, and AWS, Node.js for backend support.</li>
            <li>Designed scheduling system in JavaScript, enabling recurring ticket assignments to employees.</li>
            <li>Coordinated and guided junior developers in learning Vue/Vuetify, HTML, CSS, and AWS.</li>
            <li>Successfully launched greenfield project before contract conclusion.</li>
        </ul>
    </div>
  };

  function TMC(){
    return <div className='contentSpacer'>
        <div className='contentHeader'>TMC Technologies</div>
        <ul>
            <li>Led integration and design effort to consolidate five web applications into a unified one, incorporating specialized user access and live
database feed. Utilized Java, SQL, Spring, jQuery, and Dojo.</li>
            <li>Implemented customized active ticketing system for each branch with strict security measures to maintain confidentiality.</li>
            <li>Developed Java and MySQL-based persistent database migration tool, automating data processing, sorting, filtering, and integration over
a one-year period. Reduced integration time from 4 years to 1.5 years through recursive algorithms.</li>
        </ul>
    </div>
  };

  function Northrop(){
    return <div className='contentSpacer'>
        <div className='contentHeader'>Northrop Grumman</div>
        <ul>
            <li>Redesigned and implemented a front-end overhaul for large-scale data ingestion, reducing onboarding time by 50% compared to the
previous implementation.</li>
            <li>Updated scheduler dashboard from Angular to Vue/Vuetify, integrating it with MongoDB backend and custom UX interface for satellite
scheduling and 3D rendering tools.</li>
            <li>Developed web applications integrating Cesium WebGL Globe and Space simulations, setting standards for similar projects.</li>
            <li>Re-architected CentOS Linux OS to support Unreal installation, presenting a project proposal for new 3D rendering and simulation
applications.</li>            
        </ul>
    </div>
  };

  function Azimuth(){
    return <div className='contentSpacer'>
        <div className='contentHeader'>QsRSoft</div>
        <ul>
            <li>Developed web-based applications and backend components, integrating with FBI databases using HTML5, CSS, JavaScript, Java, jQuery,
and Dojo.</li>
            <li>Integrated map-based interface with custom radar hardware platform for the NAVY, using C#.</li>
            <li>Enhanced GPS tracking system with live video feeds and timeline display using VLC Libraries and Java</li>
            <li>Created Android prototype map tracking software with Java and Google Maps license.</li>            
        </ul>
    </div>
  };

  return (
    <div>
        <div className="contentHeader"><h1>Projects</h1>
            <ul className='contentBody'>
                { Normalizer() }            
            </ul>
        </div>
    </div>
  );
}

export default Projects;