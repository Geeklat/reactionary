// src/components/GitHub.js

import React from 'react';
import { useEffect, useState } from 'react';

function GitHub() {
  const [githubData, setGitHubData] = useState([]);
 
  const fetchData = () => {
    return fetch(`https://api.github.com/users/Geeklat/repos`)
      .then((response) => response.json())
      .then((data) => setGitHubData(data));
  }

  useEffect(() => {
    fetchData()
  }, [])

  const GITHUBREPOS = githubData;

  return (
    <div className='contentHeader'>      
      <h1>GitHub Repos</h1>
      <ul className='contentBody'>
        {GITHUBREPOS.map((repos, index) => (
          <div key={index} className='contentSpacer'>
            <h1><a href={repos.html_url}>{repos.name}</a></h1>
            <div className='contentHeader'>{repos.description}</div>            
          </div>
        ))}
      </ul>        
    </div>
  );
}

export default GitHub;