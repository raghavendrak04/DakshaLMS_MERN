import React from 'react'
import './PhotoGallery.css'

function PhotoGallery() {
    const images = [
        { src: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", label: "University Campus" },
        { src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", label: "Lecture Hall" },
        { src: "https://images.unsplash.com/photo-1498243639359-2ceeeb4cb143?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", label: "Digital Archive" },
        { src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", label: "Student Life" },
        { src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", label: "Coding Labs" },
        { src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", label: "Reference Section" }
    ];

    return (
        <div className='photogallery-container'>
            <h1 className='photogallery-title'>Campus & Library Life</h1>
            <div className='photogallery-images'>
                {images.map((img, idx) => (
                    <div className="gallery-item" key={idx}>
                        <img src={img.src} alt={img.label} />
                        <div className="gallery-overlay">
                            <span>{img.label}</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="gallery-actions">
                <button className="view-more-btn">Explore Gallery</button>
            </div>
        </div>
    )
}

export default PhotoGallery