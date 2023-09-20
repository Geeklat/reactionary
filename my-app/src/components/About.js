// src/components/About.js

import React from 'react';

function About() {
  return (
    <div className="contentHeader">
        <h1>About:</h1>        
        <ul className='contentBody'>
          <li className='contentSpacer'>
            <ul>
              <strong>Who Am I:</strong>
              <li>Pronouns: (they/them)</li>
              <li>Neurodivergent</li>
              <li>Born in '84</li>
              <li>Loves to help others</li>
              <li>Infinite wealth of facts about any topic imaginable due to an overwhelming number of special interests</li>
            </ul>
          </li>
          <li className='contentSpacer'>
            <ul>
              <strong>Why Software and Front End:</strong>
              <li>I started out in game design and it wasn't really hitting the needs that I had</li>
              <li>I went back to school for a bachelor's of Computer Science and Computer security</li>
              <li>I like utilizing my passion for visual elements, creativity, and social engineering and applying them to the problem solving of developing a user interface</li>
            </ul>
          </li>
          <li className='contentSpacer'>
            <ul>
              <strong>Hobbies:</strong>
              <li>Video Games, their historical preservation, and overall impact on society as a whole</li>
              <li>Streaming video games on Twitch</li>
              <li>Studying</li>
              <li>Any and all things Horror</li>
              <li>Dungeons and Dragons</li>
              <li>Going on long walks with no intended journey</li>
            </ul>
          </li>
          <li className='contentSpacer'>
            <ul>
              <strong>Family:</strong>
              <li>Single Father w/ Two Kids</li>
              <li>6 year old boy - Elric</li>
              <li>7 year old girl - Ripley</li>
              <li>2 cats - Beezey, Y'Shtola</li>
            </ul>          
          </li>
        </ul>
    </div>
  );
}

export default About;