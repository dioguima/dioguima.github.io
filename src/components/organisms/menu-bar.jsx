import React from 'react';
import LanguageSelector from '../molecules/language-selector';
import './menu-bar.css';

class MenuBar extends React.Component {

    render(){
        return <div className='menuBar'>
            <LanguageSelector />
        </div>
    }

}

export default MenuBar;