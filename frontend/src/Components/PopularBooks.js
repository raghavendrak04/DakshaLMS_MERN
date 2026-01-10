import React from "react";
import "./PopularBooks.css";

function PopularBooks() {
  const books = [
    { src: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=400&q=80", tag: "Database" },
    { src: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=400&q=80", tag: "Coding" },
    { src: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=400&q=80", tag: "FullStack" },
    { src: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=400&q=80", tag: "Python" },
    { src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80", tag: "C++" },
    { src: "https://images.unsplash.com/photo-1599507591144-6650f9ee21d8?auto=format&fit=crop&w=400&q=80", tag: "Logic" }
  ];

  return (
    <div className="popularbooks-container">
      <div className="section-header">
        <h2 className="popularbooks-title">Engineering Core Collection</h2>
        <div className="title-underline"></div>
      </div>

      <div className="popularbooks-marquee">
        <div className="marquee-track-reverse">
          {books.concat(books).map((book, idx) => (
            <div key={idx} className="marquee-item">
              <img
                className="popular-book"
                src={book.src}
                alt="Popular Book"
                onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1532012197367-2d59784fa774?q=80&w=400"; }}
              />
              <div className="book-overlay">
                <span className="trending-badge">#{book.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PopularBooks;
