import React from 'react';
import linkedinImagePath from '../../images/icons/linkedin.png'
import emailImagePath from '../../images/icons/email.png'
import gitHubImagePath from '../../images/icons/github.png'
import './social-combo.css';

class SocialCombo extends React.Component {

    render() {
        return <ul className='no-style-horizontal social-media'>
            <li>
                <a href='https://github.com/dioguima' target='new'>
                    <img className='icon' src={gitHubImagePath} />
                </a>
            </li>
            <li>
                <a href='https://www.linkedin.com/in/diogoafg/' target='new'>
                    <img className='icon' src={linkedinImagePath} />
                </a>
            </li>
            <li>
                <a href='mailto:diogoferreiraguima@hotmail.com'>
                    <img className='icon' src={emailImagePath} />
                </a>
            </li>
        </ul>
    }
}

export default SocialCombo;