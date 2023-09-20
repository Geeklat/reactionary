// src/components/Skills.js

import React from 'react';

function Skills() {
  return (
    <div className='contentHeader'>
      <h1>Skills:</h1>
      <div className='contentBody skillsBody'>
        <SkillCategory title="Front End">
            <SkillItem>Vue, React, Angular, CSS3, HTML5, Dojo, JavaScript, WebGL, Cesium</SkillItem>
          
        </SkillCategory>

        <SkillCategory title="Full-Stack">
            <SkillItem>JSON, Java, C#, C++, C, Node, Express, Rest API, Spring Boot, Spring MVC</SkillItem>
          
        </SkillCategory>

        <SkillCategory title="Back-End">
            <SkillItem>MongoDB, MySQL, Oracle, Linux Architecture</SkillItem>
          
        </SkillCategory>

        <SkillCategory title="Version Control">
            <SkillItem>Git, GitLab, TortoiseSVN, Code Reviews, Feature Branches</SkillItem>
          
        </SkillCategory>

        <SkillCategory title="Testing">
            <SkillItem>Jenkins, SonarQube, ADA Compliance</SkillItem>
          
        </SkillCategory>

        <SkillCategory title="Development and Team Paradigms">
            <SkillItem>Agile, Scrum, Waterfall, Kanban, Mentoring, Brown Bag Sessions</SkillItem>
          
        </SkillCategory>
      </div>
    </div>
  );
}

function SkillCategory({ title, children }) {
  return (
    <ul>
      <li>{title}
          {children}        
      </li>
    </ul>
  );
}
/*
function SkillList({ children }) {
  return <li>{children}</li>;
}*/

function SkillItem({ children }) {
  return <ul>{children.split(', ').map((item, index) => <li key={index}>{item}</li>)}</ul>;
}

export default Skills;
