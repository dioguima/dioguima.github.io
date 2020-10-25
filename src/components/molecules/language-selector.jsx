import React from 'react';
import counterpart from 'counterpart';
// import Translate from 'react-translate-component';
import './language-selector.css'

import en from '../../locales/en';
import pt from '../../locales/pt';

counterpart.registerTranslations('en', en);
counterpart.registerTranslations('pt', pt);

counterpart.setLocale('en');

class LanguageSelector extends React.Component {

    state = {
        lang: 'en'
    }

    changeLanguage = (e) => {
        this.setState({ lang: e });
        counterpart.setLocale(e);
    }

    render() {
        return <div className="languageSelector">
            <span onClick={() => this.changeLanguage('en')}>English</span>
            <div className="separator"></div> 
            <span onClick={() => this.changeLanguage('pt')}>Português</span> 
        </div>
    }

}

export default LanguageSelector;