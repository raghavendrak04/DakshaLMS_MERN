import React from 'react'
import './About.css'

function About() {
    return (
        <div className='about-box'>
            <h2 className="about-title">Our Scientific Legacy</h2>
            <div className="about-data">
                <div className="about-img">
                    <img src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Library" />
                </div>
                <div className="about-content">
                    <p className="about-text">
                        Welcome to the <i>IIIT Sri City Library Archive</i>, a sanctuary of technical knowledge and innovation.
                        Our facility is specifically designed to support the rigorous academic pursuits of B.Tech students and world-class researchers.
                        With a curated collection of over 50,000 volumes across CSE, ECE, and foundational sciences, we serve as the intellectual hub of the campus.<br /><br />

                        Our mission is to provide <i>seamless access</i> to both physical manuscripts and global digital repositories.
                        From the latest IEEE transactions to classic engineering textbooks by Grewal and Tanenbaum, our resources are selected to ensure you stay at the forefront of technology.<br /><br />

                        Equipped with high-speed specialized labs and quiet reflection zones,
                        our library is more than just a repository—it's a <i>collaborative space</i> where the next generation of engineers is born.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
