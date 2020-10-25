import React from 'react';
import './App.css';
import PersonalSummary from './components/organisms/personal-summary';
import MenuBar from './components/organisms/menu-bar'

import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import en from './locales/en';

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
      <header>
        <MenuBar />
      </header>
      <div className="body">
        <PersonalSummary />
      </div>

    </div>
  );
}

export default App;
