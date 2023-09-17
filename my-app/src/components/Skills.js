// src/components/Skills.js

import React from 'react';

function Skills() {
  return (
    <div className='contentHeader'>
      <h1>Skills:</h1>
      <div className='contentBody'>
        <SkillCategory title="Front End">
          <SkillList>
            <SkillItem>Vue, React, Angular, CSS3, HTML5, Dojo, JavaScript, WebGL, Cesium</SkillItem>
          </SkillList>
        </SkillCategory>

        <SkillCategory title="Full-Stack">
          <SkillList>
            <SkillItem>JSON, Java, C#, C++, C, Node, Express, Rest API, Spring Boot, Spring MVC</SkillItem>
          </SkillList>
        </SkillCategory>

        <SkillCategory title="Back-End">
          <SkillList>
            <SkillItem>MongoDB, MySQL, Oracle, Linux Architecture</SkillItem>
          </SkillList>
        </SkillCategory>

        <SkillCategory title="Version Control">
          <SkillList>
            <SkillItem>Git, GitLab, TortoiseSVN, Code Reviews, Feature Branches</SkillItem>
          </SkillList>
        </SkillCategory>

        <SkillCategory title="Testing">
          <SkillList>
            <SkillItem>Jenkins, SonarQube, ADA Compliance</SkillItem>
          </SkillList>
        </SkillCategory>

        <SkillCategory title="Development and Team Paradigms">
          <SkillList>
            <SkillItem>Agile, Scrum, Waterfall, Kanban, Mentoring, Brown Bag Sessions</SkillItem>
          </SkillList>
        </SkillCategory>
      </div>
    </div>
  );
}

function SkillCategory({ title, children }) {
  return (
    <ul>
      <li>{title}
        <ul>
          {children}
        </ul>
      </li>
    </ul>
  );
}

function SkillList({ children }) {
  return <li>{children}</li>;
}

function SkillItem({ children }) {
  return <ul>{children.split(', ').map((item, index) => <li key={index}>{item}</li>)}</ul>;
}

export default Skills;
