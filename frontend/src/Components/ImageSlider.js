import React from 'react'
import './ImageSlider.css'
import { Carousel } from 'react-bootstrap'

function ImageSlider() {
    return (
        <div className='slider'>
            <Carousel>
                <Carousel.Item interval={3000}>
                    <div className="slider-image-container">
                        <img
                            className="d-block w-100"
                            src="https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                            alt="Coding & CSE"
                        />
                        <div className="slider-overlay"></div>
                    </div>
                    <Carousel.Caption>
                        <h3 className="slider-title">Master Computer Science</h3>
                        <p className="slider-desc">Explore essentials like "Clean Code", "Introduction to Algorithms", and "The Pragmatic Programmer".</p>
                        <em className="slider-quote">"Code is like humor. When you have to explain it, it’s bad."</em>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={3000}>
                    <div className="slider-image-container">
                        <img
                            className="d-block w-100"
                            src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                            alt="Electronics & ECE"
                        />
                        <div className="slider-overlay"></div>
                    </div>
                    <Carousel.Caption>
                        <h3 className="slider-title">Electronics & Communication</h3>
                        <p className="slider-desc">Dive into "Microelectronic Circuits" and "Principles of Communication Systems".</p>
                        <em className="slider-quote">"Innovation is the bridge between electronics and a better world."</em>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={3000}>
                    <div className="slider-image-container">
                        <img
                            className="d-block w-100"
                            src="https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                            alt="Mathematics"
                        />
                        <div className="slider-overlay"></div>
                    </div>
                    <Carousel.Caption>
                        <h3 className="slider-title">Engineering Mathematics</h3>
                        <p className="slider-desc">Foundational books for B.Tech excellence in Calculus and Discrete Math.</p>
                        <em className="slider-quote">"Mathematics is the handwriting of God."</em>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={3000}>
                    <div className="slider-image-container">
                        <img
                            className="d-block w-100"
                            src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                            alt="Motivation & Library"
                        />
                        <div className="slider-overlay"></div>
                    </div>
                    <Carousel.Caption>
                        <h3 className="slider-title">LuminaLib: Your Success Gateway</h3>
                        <p className="slider-desc">Access thousands of technical journals and motivational literature.</p>
                        <em className="slider-quote">"Yesterday a reader, tomorrow a leader."</em>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default ImageSlider
