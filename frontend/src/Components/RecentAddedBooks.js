import React from 'react'
import './RecentAddedBooks.css'

function RecentAddedBooks() {
    const books = [
        "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1532012197367-2d59784fa774?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=400&q=80"
    ];

    return (
        <div className='recentaddedbooks-container'>
            <div className="section-header">
                <h2 className='recentbooks-title'>Newest Acquisitions</h2>
                <div className="title-underline emerald"></div>
            </div>

            <div className='recentbooks-marquee'>
                <div className='marquee-track'>
                    {books.concat(books).map((src, idx) => (
                        <div key={idx} className="marquee-item">
                            <img
                                className='recent-book'
                                src={src}
                                alt='Book Cover'
                                onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=400"; }}
                            />
                            <div className="book-shadow emerald"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default RecentAddedBooks