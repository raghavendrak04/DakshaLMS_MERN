import React from 'react'
import './Stats.css'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PublicIcon from '@material-ui/icons/Public';

function Stats() {
    return (
        <div className='stats-container-main'>
            <div className='stats'>
                <div className='stats-block gold-theme'>
                    <LibraryBooksIcon className='stats-icon gold' style={{ fontSize: 45 }} />
                    <p className='stats-title'>Active Volumes</p>
                    <p className='stats-count'>52,430+</p>
                </div>
                <div className='stats-block gold-theme'>
                    <AccountCircleIcon className='stats-icon gold' style={{ fontSize: 45 }} />
                    <p className='stats-title'>Total Members</p>
                    <p className='stats-count'>4,820+</p>
                </div>
                <div className='stats-block gold-theme'>
                    <PublicIcon className='stats-icon gold' style={{ fontSize: 45 }} />
                    <p className='stats-title'>Digital Assets</p>
                    <p className='stats-count'>105,000+</p>
                </div>
            </div>
        </div>
    )
}

export default Stats