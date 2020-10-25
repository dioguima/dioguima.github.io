import React from 'react';
import SocialCombo from '../molecules/social-combo';
import './personal-summary.css';
import Translate from 'react-translate-component';

class PersonalSummary extends React.Component {
    render() {
        return <div className='presentation'>
            <Translate content="firstName" component="h2" />
            <Translate content="shortSummary" component="p" />
            <SocialCombo></SocialCombo>
        </div>;
    }
}

export default PersonalSummary;