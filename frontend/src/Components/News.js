import React from 'react'
import './News.css'
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';

function News() {
    return (
        <div className='news-container'>
            <div className="news-header-main">
                <LocalLibraryIcon className="section-icon-news" />
                <h1 className='news-title'>Global Opportunities & Updates</h1>
            </div>

            <div className='news-data'>
                <div className="news-column">
                    <div className="col-header">
                        <EventAvailableIcon className="news-sub-icon" />
                        <h2 className='news-subtitle'>Innovation & Hackathons</h2>
                    </div>
                    <div className="news-event card-purple">
                        <h4>Smart India Hackathon (SIH)</h4>
                        <p>Solve pressing problems of our daily lives with nationwide engineering talent.</p>
                    </div>
                    <div className="news-event card-purple">
                        <h4>ACM-ICPC Regionals</h4>
                        <p>The premier global algorithmic programming contest for college students.</p>
                    </div>
                    <div className="news-event card-purple">
                        <h4>e-Yantra Robotics</h4>
                        <p>Annual robotics competition hosted by IIT Bombay to solve real-world problems.</p>
                    </div>
                </div>

                <div className="news-column">
                    <div className="col-header">
                        <EventAvailableIcon className="news-sub-icon" />
                        <h2 className='news-subtitle'>Skill Certification</h2>
                    </div>
                    <div className="news-event card-purple">
                        <h4>NPTEL Certification</h4>
                        <p>Enroll in semester-long courses from top IITs to enhance technical mastery.</p>
                    </div>
                    <div className="news-event card-purple">
                        <h4>GATE 2026 Strategy</h4>
                        <p>Access specialized library resources for Graduate Aptitude Test preparation.</p>
                    </div>
                    <div className="news-event card-purple">
                        <h4>GSoc 2026</h4>
                        <p>Google Summer of Code - A global, online program focused on bringing new contributors into open source software development.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News
