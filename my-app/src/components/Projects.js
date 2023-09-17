// src/components/Projects.js
import React from 'react';

const PROJECTS = [
  {
    title: 'SureCost',
    description: [
      'Guided and led migration from legacy Struts to React framework, ensuring seamless transition.',
      'Developed applications using Flex, HTML, CSS, JavaScript, and Struts backend.',
    ],
  },
  {
    title: 'PostClick',
    description: [
      'Developed user-driven landing page components, integrated ADA compliant elements, and collaborated remotely with an international team.',
      'Utilized Bootstrap, HTML, CSS, JavaScript, and Node backend for development.',
      'Initiated migration of components to a tailwind-driven front-end framework as a step towards transitioning to React environment.',
    ],
  },
  {
    title: 'QsRSoft',
    description: [
      'Developed greenfield application for a quick service restaurant web suite add-on.',
      'Utilized Vue/Vuetify, JavaScript for frontend, and AWS, Node.js for backend support.',
      'Designed scheduling system in JavaScript, enabling recurring ticket assignments to employees.',
      'Coordinated and guided junior developers in learning Vue/Vuetify, HTML, CSS, and AWS.',
      'Successfully launched greenfield project before contract conclusion.',
    ],
  },
  {
    title: 'TMC Technologies',
    description: [
      'Led integration and design effort to consolidate five web applications into a unified one, incorporating specialized user access and live database feed. Utilized Java, SQL, Spring, jQuery, and Dojo.',
      'Implemented customized active ticketing system for each branch with strict security measures to maintain confidentiality.',
      'Developed Java and MySQL-based persistent database migration tool, automating data processing, sorting, filtering, and integration over a one-year period. Reduced integration time from 4 years to 1.5 years through recursive algorithms.',
    ],
  },
  {
    title: 'Northrop Grumman',
    description: [
      'Redesigned and implemented a front-end overhaul for large-scale data ingestion, reducing onboarding time by 50% compared to the previous implementation.',
      'Updated scheduler dashboard from Angular to Vue/Vuetify, integrating it with MongoDB backend and custom UX interface for satellite scheduling and 3D rendering tools.',
      'Developed web applications integrating Cesium WebGL Globe and Space simulations, setting standards for similar projects.',
      'Re-architected CentOS Linux OS to support Unreal installation, presenting a project proposal for new 3D rendering and simulation applications.',
    ],
  },
  {
    title: 'Azimuth',
    description: [
      'Developed web-based applications and backend components, integrating with FBI databases using HTML5, CSS, JavaScript, Java, jQuery, and Dojo.',
      'Integrated map-based interface with custom radar hardware platform for the NAVY, using C#.',
      'Enhanced GPS tracking system with live video feeds and timeline display using VLC Libraries and Java.',
      'Created Android prototype map tracking software with Java and Google Maps license.',
    ],
  },
];

function Projects() {
  return (
    <div className="contentHeader">
      <h1>Projects</h1>
      <ul className='contentBody'>
        {PROJECTS.map((project, index) => (
          <div key={index} className='contentSpacer'>
            <div className='contentHeader'>{project.title}</div>
            <ul>
              {project.description.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
