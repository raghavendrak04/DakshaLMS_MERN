import React from 'react'
import './WelcomeBox.css'
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import SchoolIcon from '@material-ui/icons/School';
import SearchIcon from '@material-ui/icons/Search';

function WelcomeBox() {
    return (
        <div className='welcome-box'>
            <div className="floating-icons">
                <ImportContactsIcon className="float-icon i1" />
                <SchoolIcon className="float-icon i2" />
                <SearchIcon className="float-icon i3" />
            </div>

            <div className="welcome-content">
                <p className='welcome-title'>WELCOME TO IIIT SRI CITY LIBRARY</p>
                <div className="welcome-divider"></div>
                <p className='welcome-message'>
                    Elevate Your Knowledge<br />
                    <span className='welcome-submessage'>Empowering the next generation of engineers with world-class technical literature.</span>
                </p>
                <div className="welcome-badges">
                    <span className="badge amber">Digital Ready</span>
                    <span className="badge amber">Open 24/7</span>
                    <span className="badge amber">Academic Excellence</span>
                </div>
            </div>
        </div>
    )
}

export default WelcomeBox
