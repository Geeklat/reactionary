// src/components/Skills.js

import React from 'react';

function Skills(props) {
  return (
    <div className='contentHeader'>
      <h1>Skills:</h1>
      <div className='contentBody'>        
        <ul>
          <li>Front End
            <ul>
              <li>Vue, React, Angular, CSS3, HTML5, Dojo, JavaScript, WebGL, Cesium</li>              
            </ul>
          </li>
          <li>Full-Stack
            <ul>
              <li>JSON, Java, C#, C++, C, Node, Express, Rest API, Spring Boot, Spring MVC</li>
            </ul>
          </li>
          <li>Back-End
            <ul>
              <li>MongoDB, MySQL, Oracle, Linux Architecture</li>
            </ul>
          </li>
          <li>Version Control
            <ul>
              <li>Git, GitLab, TortoiseSVN, CodeReviews, Feature Branches</li>
            </ul>
          </li>
          <li>Testing
            <ul>
              <li>Jenkins, QonarQube, ADA Compliance</li>
            </ul>
          </li>
          <li>Development and Team Paradigms
            <ul>
              <li>Agile, Scrum, Waterfall, Kanban, Mixtures, Mentoring, Brown Bag Sessions</li>
            </ul>
          </li>
            <li>Project 1</li>
            <li>Project 2</li>
        </ul>
      </div>
    </div>
    
  );
}

export default Skills;