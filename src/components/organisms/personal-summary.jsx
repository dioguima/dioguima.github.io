import React from 'react';
import SocialCombo from '../molecules/social-combo';
import './personal-summary.css';

class PersonalSummary extends React.Component {
    render() {
        return <div className='presentation'>
            <h2>Diogo</h2>
            <p>
                Sou um desenvolvedor full stack vivendo em Cracóvia, Polônia. Eu programo aplicações web normalmente em Angular e .NET Core
            </p>
            <SocialCombo></SocialCombo>
        </div>;
    }
}

export default PersonalSummary;