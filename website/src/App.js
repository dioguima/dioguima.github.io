import React from 'react';
import profileImagePath from './images/profile.png'
import linkedinImagePath from './images/icons/linkedin.png'
import emailImagePath from './images/icons/email.png'
import gitHubImagePath from './images/icons/github.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
      <div className="body">
        <div className='presentation'>
          <h2>Diogo</h2>
          <p>
            Desenvolvedor full stack por profissão e desenvolvedor de jogos como hobby.
        </p>
          <ul className='no-style-horizontal social-media'>
            <li>
              <a href='mailto:diogoferreiraguima@hotmail.com'>
                <img className='icon' src={emailImagePath} />
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/diogoafg/' target='new'>
                <img className='icon' src={linkedinImagePath} />
              </a>
            </li>
            <li>
              <a href='https://github.com/dioguima' target='new'>
                <img className='icon' src={gitHubImagePath} />
              </a>
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
}

export default App;
