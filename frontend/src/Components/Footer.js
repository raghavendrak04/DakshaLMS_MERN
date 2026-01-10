import React from 'react'
import './Footer.css'

import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='footer-data'>
                    <div className="contact-details">
                        <h1>Contact Us</h1>
                        <p>IIIT Sri City, Chittoor</p>
                        <p>630 Gnan Marg, Sri City,</p>
                        <p>Tirupati District - 517646</p>
                        <p>Andhra Pradesh, India</p>
                        <p><b>Email:</b> contact@iiits.in</p>
                        <p><b>Phone:</b> +91 73064 73364</p>
                    </div>
                    <div className='usefull-links'>
                        <h1>Digital Resources</h1>
                        <a href='https://ndl.iitkgp.ac.in/' target="_blank" rel="noreferrer">National Digital Library (NDLI)</a>
                        <a href='https://nptel.ac.in/' target="_blank" rel="noreferrer">NPTEL Online Courses</a>
                        <a href='https://swayam.gov.in/' target="_blank" rel="noreferrer">Swayam Central</a>
                        <a href='https://www.vlab.co.in/' target="_blank" rel="noreferrer">Virtual Labs</a>
                    </div>
                    <div className='librarian-details'>
                        <h1>Library Hours</h1>
                        <p><b>Mon - Fri:</b> 9:00 AM - 9:00 PM</p>
                        <p><b>Saturday:</b> 9:00 AM - 5:00 PM</p>
                        <p><b>Sunday:</b> Closed</p>
                        <br />
                        <p><b>Librarian:</b> Head of Library Services</p>
                    </div>
                </div>
                <div className="contact-social" >
                    <a href='https://facebook.com/iiits.ac.in' target="_blank" rel="noreferrer" className='social-icon'><FacebookIcon className="icon-v" /></a>
                    <a href='https://twitter.com/iiits_ac_in' target="_blank" rel="noreferrer" className='social-icon'><TwitterIcon className="icon-v" /></a>
                    <a href='https://linkedin.com/school/iiit-sri-city/' target="_blank" rel="noreferrer" className='social-icon'><LinkedInIcon className="icon-v" /></a>
                    <a href='https://instagram.com/iiits.ac.in' target="_blank" rel="noreferrer" className='social-icon'><InstagramIcon className="icon-v" /></a>
                    <a href='https://youtube.com/@IIITSriCity' target="_blank" rel="noreferrer" className='social-icon'><YouTubeIcon className="icon-v" /></a>
                </div>
            </div>
            <div className='copyright-details'>
                <div className='footer-line'></div>
                <p className='footer-copyright'>&#169; 2026 Daksha LMS. All rights reserved.<br /><span>Integrated Information System for Excellence</span></p>
            </div>
        </div>
    )
}

export default Footer