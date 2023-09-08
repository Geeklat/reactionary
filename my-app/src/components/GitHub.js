// src/components/GitHub.js

import React from 'react';

function GitHub(props) {
  return (
    <div>
        <div className="contentHeader"><h1>GitHub</h1>
          <ul className="contentBody">
              <li>
                <div>
                  <h1><a href="https://github.com/Geeklat/reactionary">Reactionary</a></h1>
                  <div>- This site you're on. An experiment in learning React and trying a bunch of different things.</div>
                </div>
              </li>            
          </ul>
        </div>        
    </div>
  );
}

export default GitHub;