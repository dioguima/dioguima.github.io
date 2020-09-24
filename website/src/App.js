import React from 'react';
import logo from './logo.svg';
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
          <ul className='no-style-horizontal'>
            <li>
              <a href='mailto:diogoferreiraguima@hotmail.com'>
                <img className='icon' src='./images/icons/email.png' />
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/diogoafg/' target='new'>
                <img className='icon' src='./images/icons/linkedin.png' />
              </a>
            </li>
            <li>
              <a href='https://github.com/dioguima' target='new'>
                <img className='icon' src='./images/icons/github.png' />
              </a>
            </li>
          </ul>
        </div>
        <ul className='no-style-horizontal'>
          <li>
            {/* <img className='profile' src='./profile.png' /> */}
          </li>
          <li>
            <p className='title'>
              Olá, <br />
              eu sou o <span className='highlight'>Diogo</span>
            </p>
          </li>
        </ul>
      </header>

      {/* <li> */}

      {/* </li> */}
    </div>
  );
}

export default App;
