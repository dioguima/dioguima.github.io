import React from 'react';
import profileImagePath from './images/profile.png'
import linkedinImagePath from './images/icons/linkedin.png'
import emailImagePath from './images/icons/email.png'
import gitHubImagePath from './images/icons/github.png'
import './App.css';
import SocialCombo from './components/molecules/social-combo';
import PersonalSummary from './components/organisms/personal-summary';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <div className='full-width social-media'>
          <ul className='no-style-horizontal top-menu'>
            <li>
              <a href='#'>Experiencia</a>
            </li>
            <li>
              <a href='#'>Projetos pessoais</a>
            </li>
            <li>
              <a href='#'>Bons conteudos</a>
            </li>
          </ul>

        </div>
      </header> */}
      <div className="body">
        <PersonalSummary />
      </div>

    </div>
  );
}

export default App;
