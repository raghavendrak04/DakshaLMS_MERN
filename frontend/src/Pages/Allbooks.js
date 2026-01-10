import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "./Allbooks.css";

const BOOKS_DATA_FALLBACK = [
  // CSE
  {
    _id: "cse1",
    bookName: "Programming in ANSI C",
    author: "E. Balagurusamy",
    image: "https://m.media-amazon.com/images/I/51t6N-k9OBL._SX342_SY445_.jpg",
    description: "A comprehensive guide to programming in C, covering all robust features of the language.",
    categories: [{ categoryName: "CSE" }],
    bookCountAvailable: 5
  },
  {
    _id: "cse2",
    bookName: "Data Structures Using C",
    author: "Reema Thareja",
    image: "https://m.media-amazon.com/images/I/81O36vSgEHL._SY466_.jpg",
    description: "Provides a comprehensive and consistent coverage of both the abstract concepts of data structures and their implementation.",
    categories: [{ categoryName: "CSE" }],
    bookCountAvailable: 5
  },
  {
    _id: "cse3",
    bookName: "Introduction to Algorithms",
    author: "Cormen, Leiserson, Rivest, Stein",
    image: "https://m.media-amazon.com/images/I/61PgDn8DsuL._AC_UY327_FMwebp_QL65_.jpg",
    description: "The 'bible' of computer science algorithms, covering everything from sorting to graph theory.",
    categories: [{ categoryName: "CSE" }],
    bookCountAvailable: 5
  },
  {
    _id: "cse4",
    bookName: "Operating System Concepts",
    author: "Silberschatz, Galvin, Gagne",
    image: "https://m.media-amazon.com/images/I/81a+xHhN3BL._AC_UY327_FMwebp_QL65_.jpg",
    description: "Fundamental concepts of operating systems including processes, memory, and storage management.",
    categories: [{ categoryName: "CSE" }],
    bookCountAvailable: 5
  },
  {
    _id: "cse5",
    bookName: "Computer Networking: A Top-Down Approach",
    author: "Kurose & Ross",
    image: "https://m.media-amazon.com/images/I/71p0Em+3jVL._AC_UY327_FMwebp_QL65_.jpg",
    description: "A clear and engaging introduction to computer networking, organized around the Internet architecture.",
    categories: [{ categoryName: "CSE" }],
    bookCountAvailable: 5
  },
  {
    _id: "cse6",
    bookName: "Database System Concepts",
    author: "Silberschatz, Korth, Sudarshan",
    image: "https://m.media-amazon.com/images/I/51+u0a+jGEL._SX357_BO1,204,203,200_.jpg",
    description: "Core principles for designing, implementing, and managing database systems.",
    categories: [{ categoryName: "CSE" }],
    bookCountAvailable: 5
  },
  {
    _id: "cse7",
    bookName: "Software Engineering",
    author: "Ian Sommerville",
    image: "https://m.media-amazon.com/images/I/71k4i-8ZJzL._AC_UY327_FMwebp_QL65_.jpg",
    description: "Methodologies for building complex software systems at scale.",
    categories: [{ categoryName: "CSE" }],
    bookCountAvailable: 5
  },
  {
    _id: "cse8",
    bookName: "Introduction to Automata Theory",
    author: "Hopcroft, Motwani, Ullman",
    image: "https://m.media-amazon.com/images/I/51w+3F+A6KL._SX370_BO1,204,203,200_.jpg",
    description: "The classic text on formal languages, automata, and computational complexity.",
    categories: [{ categoryName: "CSE" }],
    bookCountAvailable: 5
  },
  {
    _id: "cse9",
    bookName: "Artificial Intelligence: A Modern Approach",
    author: "Stuart Russell & Peter Norvig",
    image: "https://m.media-amazon.com/images/I/81q6xP8aZAL._AC_UY327_FMwebp_QL65_.jpg",
    description: "The leading textbook in AI, covering agents, logic, and machine learning.",
    categories: [{ categoryName: "CSE" }],
    bookCountAvailable: 5
  },
  {
    _id: "cse10",
    bookName: "Machine Learning",
    author: "Tom M. Mitchell",
    image: "https://m.media-amazon.com/images/I/71Y9g0+0VYL._AC_UY327_FMwebp_QL65_.jpg",
    description: "Foundations of automated learning and predictive modeling.",
    categories: [{ categoryName: "CSE" }],
    bookCountAvailable: 5
  },

  // ECE
  {
    _id: "ece1",
    bookName: "Electronic Devices and Circuit Theory",
    author: "Boylestad & Nashelsky",
    image: "https://m.media-amazon.com/images/I/818+R0vT2ML._AC_UY327_FMwebp_QL65_.jpg",
    description: "Standard text for understanding semiconductor devices and circuit analysis.",
    categories: [{ categoryName: "ECE" }],
    bookCountAvailable: 5
  },
  {
    _id: "ece2",
    bookName: "Signals and Systems",
    author: "Alan V. Oppenheim",
    image: "https://m.media-amazon.com/images/I/51aK8e2+k8L._SX367_BO1,204,203,200_.jpg",
    description: "Mathematical foundations for processing and analyzing signals.",
    categories: [{ categoryName: "ECE" }],
    bookCountAvailable: 5
  },
  {
    _id: "ece3",
    bookName: "Digital Design",
    author: "M. Morris Mano",
    image: "https://m.media-amazon.com/images/I/51P+fTC6J+L._SX385_BO1,204,203,200_.jpg",
    description: "Fundamental concepts of digital logic, gates, and processors.",
    categories: [{ categoryName: "ECE" }],
    bookCountAvailable: 5
  },
  {
    _id: "ece4",
    bookName: "Principles of Communication Systems",
    author: "Taub & Schilling",
    image: "https://m.media-amazon.com/images/I/71W-2+d+eEL._AC_UY327_FMwebp_QL65_.jpg",
    description: "Introduction to analog and digital signal modulation techniques.",
    categories: [{ categoryName: "ECE" }],
    bookCountAvailable: 5
  },
  {
    _id: "ece5",
    bookName: "Engineering Electromagnetics",
    author: "William H. Hayt",
    image: "https://m.media-amazon.com/images/I/512+1s0+yGL._SX373_BO1,204,203,200_.jpg",
    description: "Classic text on electromagnetic fields and waves.",
    categories: [{ categoryName: "ECE" }],
    bookCountAvailable: 5
  },
  {
    _id: "ece6",
    bookName: "Microprocessor Architecture",
    author: "Ramesh S. Gaonkar",
    image: "https://m.media-amazon.com/images/I/91rz8-f+d+L._AC_UY327_FMwebp_QL65_.jpg",
    description: "The 8085 microprocessor architecture, programming, and interfacing.",
    categories: [{ categoryName: "ECE" }],
    bookCountAvailable: 5
  },
  {
    _id: "ece7",
    bookName: "Principles of CMOS VLSI Design",
    author: "Neil H.E. Weste",
    image: "https://m.media-amazon.com/images/I/61+9+8+k+L._AC_UY327_FMwebp_QL65_.jpg",
    description: "Techniques for designing highly integrated CMOS circuits.",
    categories: [{ categoryName: "ECE" }],
    bookCountAvailable: 5
  },
  {
    _id: "ece8",
    bookName: "Modern Control Engineering",
    author: "Katsuhiko Ogata",
    image: "https://m.media-amazon.com/images/I/71s8Q+8+1+L._AC_UY327_FMwebp_QL65_.jpg",
    description: "State-space analysis and modern control design techniques.",
    categories: [{ categoryName: "ECE" }],
    bookCountAvailable: 5
  },
  {
    _id: "ece9",
    bookName: "Digital Signal Processing",
    author: "John G. Proakis",
    image: "https://m.media-amazon.com/images/I/71+6+1+k+L._AC_UY327_FMwebp_QL65_.jpg",
    description: "Algorithmic processing of digital signals and filtrations.",
    categories: [{ categoryName: "ECE" }],
    bookCountAvailable: 5
  },

  // EEE
  {
    _id: "eee1",
    bookName: "Electrical Machinery",
    author: "P.S. Bimbhra",
    image: "https://m.media-amazon.com/images/I/81+2+6+k+L._AC_UY327_FMwebp_QL65_.jpg",
    description: "Comprehensive guide to electrical machines and transformers.",
    categories: [{ categoryName: "EEE" }],
    bookCountAvailable: 5
  },
  {
    _id: "eee2",
    bookName: "Power System Engineering",
    author: "Nagrath & Kothari",
    image: "https://m.media-amazon.com/images/I/81+2+6+k+L._AC_UY327_FMwebp_QL65_.jpg",
    description: "Comprehensive coverage of power generation, transmission, and distribution.",
    categories: [{ categoryName: "EEE" }],
    bookCountAvailable: 5
  },
  {
    _id: "eee3",
    bookName: "Power Electronics",
    author: "P.S. Bimbhra",
    image: "https://m.media-amazon.com/images/I/71+2+6+k+L._AC_UY327_FMwebp_QL65_.jpg",
    description: "Principles and applications of power conversion and electrical control.",
    categories: [{ categoryName: "EEE" }],
    bookCountAvailable: 5
  },
  {
    _id: "eee4",
    bookName: "Engineering Circuit Analysis",
    author: "Hayt & Kemmerly",
    image: "https://m.media-amazon.com/images/I/81+2+6+k+L._AC_UY327_FMwebp_QL65_.jpg",
    description: "Essentials of circuit analysis with practical engineering applications.",
    categories: [{ categoryName: "EEE" }],
    bookCountAvailable: 5
  },
  {
    _id: "eee5",
    bookName: "Automatic Control Systems",
    author: "Benjamin C. Kuo",
    image: "https://m.media-amazon.com/images/I/81+2+6+k+L._AC_UY327_FMwebp_QL65_.jpg",
    description: "Practical approach to analysis and design of feedback control systems.",
    categories: [{ categoryName: "EEE" }],
    bookCountAvailable: 5
  },
  {
    _id: "eee6",
    bookName: "Electrical Measurements",
    author: "Golding & Widdis",
    image: "https://m.media-amazon.com/images/I/81+2+6+k+L._AC_UY327_FMwebp_QL65_.jpg",
    description: "Classic text on electrical measuring instruments.",
    categories: [{ categoryName: "EEE" }],
    bookCountAvailable: 5
  },
  {
    _id: "eee7",
    bookName: "High Voltage Engineering",
    author: "M.S. Naidu",
    image: "https://m.media-amazon.com/images/I/81+2+6+k+L._AC_UY327_FMwebp_QL65_.jpg",
    description: "Design and testing protocols for high voltage power components.",
    categories: [{ categoryName: "EEE" }],
    bookCountAvailable: 5
  },
  {
    _id: "eee8",
    bookName: "Power System Protection",
    author: "Badri Ram",
    image: "https://m.media-amazon.com/images/I/81+2+6+k+L._AC_UY327_FMwebp_QL65_.jpg",
    description: "Protection systems for power grids and electrical devices.",
    categories: [{ categoryName: "EEE" }],
    bookCountAvailable: 5
  },
  {
    _id: "eee9",
    bookName: "Renewable Energy Sources",
    author: "D.P. Kothari",
    image: "https://m.media-amazon.com/images/I/81+2+6+k+L._AC_UY327_FMwebp_QL65_.jpg",
    description: "Exploration of solar, wind, and sustainable power technologies.",
    categories: [{ categoryName: "EEE" }],
    bookCountAvailable: 5
  },

  // Civil
  {
    _id: "civ1",
    bookName: "Strength of Materials",
    author: "R.K. Bansal",
    image: "https://m.media-amazon.com/images/I/81+2+6+k+L._AC_UY327_FMwebp_QL65_.jpg",
    description: "Standard text on mechanics of materials for civil engineering.",
    categories: [{ categoryName: "Civil" }],
    bookCountAvailable: 5
  },
  {
    _id: "civ2",
    bookName: "Structural Analysis",
    author: "R.C. Hibbeler",
    image: "https://m.media-amazon.com/images/I/81+2+6+k+L._AC_UY327_FMwebp_QL65_.jpg",
    description: "Comprehensive guide to analysis of determinate and indeterminate structures.",
    categories: [{ categoryName: "Civil" }],
    bookCountAvailable: 5
  },
  {
    _id: "civ3",
    bookName: "Concrete Technology",
    author: "M.S. Shetty",
    image: "https://m.media-amazon.com/images/I/81+2+6+k+L._AC_UY327_FMwebp_QL65_.jpg",
    description: "Properties of concrete, mix design, and special concretes.",
    categories: [{ categoryName: "Civil" }],
    bookCountAvailable: 5
  },
  {
    _id: "civ4",
    bookName: "Surveying (Vol I & II)",
    author: "B.C. Punmia",
    image: "https://m.media-amazon.com/images/I/81+2+6+k+L._AC_UY327_FMwebp_QL65_.jpg",
    description: "Fundamental principles and modern methods of surveying.",
    categories: [{ categoryName: "Civil" }],
    bookCountAvailable: 5
  },
  {
    _id: "civ5",
    bookName: "Soil Mechanics and Foundations",
    author: "B.C. Punmia",
    image: "https://m.media-amazon.com/images/I/81+2+6+k+L._AC_UY327_FMwebp_QL65_.jpg",
    description: "Behavior of soils and design of foundations.",
    categories: [{ categoryName: "Civil" }],
    bookCountAvailable: 5
  },
  {
    _id: "civ6",
    bookName: "Fluid Mechanics",
    author: "R.K. Bansal",
    image: "https://m.media-amazon.com/images/I/81+2+6+k+L._AC_UY327_FMwebp_QL65_.jpg",
    description: "Comprehensive coverage of fluid mechanics and hydraulic machines.",
    categories: [{ categoryName: "Civil" }],
    bookCountAvailable: 5
  },
  {
    _id: "civ7",
    bookName: "Highway Engineering",
    author: "Khanna & Justo",
    image: "https://m.media-amazon.com/images/I/81+2+6+k+L._AC_UY327_FMwebp_QL65_.jpg",
    description: "Planning, design, construction, and maintenance of roads.",
    categories: [{ categoryName: "Civil" }],
    bookCountAvailable: 5
  },
  {
    _id: "civ8",
    bookName: "Environmental Engineering",
    author: "S.K. Garg",
    image: "https://m.media-amazon.com/images/I/81+2+6+k+L._AC_UY327_FMwebp_QL65_.jpg",
    description: "Water supply, wastewater treatment, and pollution control.",
    categories: [{ categoryName: "Civil" }],
    bookCountAvailable: 5
  },
  {
    _id: "civ9",
    bookName: "Construction Planning and Management",
    author: "U.K. Shrivastava",
    image: "https://m.media-amazon.com/images/I/81+2+6+k+L._AC_UY327_FMwebp_QL65_.jpg",
    description: "Techniques for planning and managing construction projects.",
    categories: [{ categoryName: "Civil" }],
    bookCountAvailable: 5
  },

  // Mechanical
  {
    _id: "mech1",
    bookName: "Engineering Mechanics",
    author: "Timoshenko & Young",
    image: "https://m.media-amazon.com/images/I/81+2+6+k+L._AC_UY327_FMwebp_QL65_.jpg",
    description: "Foundational principles of statics and dynamics.",
    categories: [{ categoryName: "Mechanical" }],
    bookCountAvailable: 5
  },
  {
    _id: "mech2",
    bookName: "Engineering Thermodynamics",
    author: "P.K. Nag",
    image: "https://m.media-amazon.com/images/I/81+2+6+k+L._AC_UY327_FMwebp_QL65_.jpg",
    description: "Basic and applied concepts of thermodynamics.",
    categories: [{ categoryName: "Mechanical" }],
    bookCountAvailable: 5
  },
  {
    _id: "mech3",
    bookName: "Fluid Mechanics",
    author: "R.K. Bansal",
    image: "https://m.media-amazon.com/images/I/81+2+6+k+L._AC_UY327_FMwebp_QL65_.jpg",
    description: "Properties of fluids and fluid dynamics applications.",
    categories: [{ categoryName: "Mechanical" }],
    bookCountAvailable: 5
  },
  {
    _id: "mech4",
    bookName: "Theory of Machines",
    author: "S.S. Rattan",
    image: "https://m.media-amazon.com/images/I/81+2+6+k+L._AC_UY327_FMwebp_QL65_.jpg",
    description: "Kinematics and dynamics of machinery.",
    categories: [{ categoryName: "Mechanical" }],
    bookCountAvailable: 5
  },
  {
    _id: "mech5",
    bookName: "Design of Machine Elements",
    author: "V.B. Bhandari",
    image: "https://m.media-amazon.com/images/I/81+2+6+k+L._AC_UY327_FMwebp_QL65_.jpg",
    description: "Design procedures for various machine components.",
    categories: [{ categoryName: "Mechanical" }],
    bookCountAvailable: 5
  },
  {
    _id: "mech6",
    bookName: "Manufacturing Science",
    author: "Ghosh & Mallik",
    image: "https://m.media-amazon.com/images/I/81+2+6+k+L._AC_UY327_FMwebp_QL65_.jpg",
    description: "Scientific principles of manufacturing processes.",
    categories: [{ categoryName: "Mechanical" }],
    bookCountAvailable: 5
  },
  {
    _id: "mech7",
    bookName: "Heat and Mass Transfer",
    author: "R.K. Rajput",
    image: "https://m.media-amazon.com/images/I/81+2+6+k+L._AC_UY327_FMwebp_QL65_.jpg",
    description: "Fundamentals of heat transfer mechanisms.",
    categories: [{ categoryName: "Mechanical" }],
    bookCountAvailable: 5
  },
  {
    _id: "mech8",
    bookName: "Internal Combustion Engines",
    author: "V. Ganesan",
    image: "https://m.media-amazon.com/images/I/81+2+6+k+L._AC_UY327_FMwebp_QL65_.jpg",
    description: "Operation and performance of IC engines.",
    categories: [{ categoryName: "Mechanical" }],
    bookCountAvailable: 5
  },
  {
    _id: "mech9",
    bookName: "Refrigeration and Air Conditioning",
    author: "C.P. Arora",
    image: "https://m.media-amazon.com/images/I/81+2+6+k+L._AC_UY327_FMwebp_QL65_.jpg",
    description: "Principles of refrigeration cycles and air conditioning systems.",
    categories: [{ categoryName: "Mechanical" }],
    bookCountAvailable: 5
  },
  {
    _id: "mech10",
    bookName: "CAD/CAM: Principles and Applications",
    author: "P.N. Rao",
    image: "https://m.media-amazon.com/images/I/81+2+6+k+L._AC_UY327_FMwebp_QL65_.jpg",
    description: "Computer-aided design and manufacturing technologies.",
    categories: [{ categoryName: "Mechanical" }],
    bookCountAvailable: 5
  }
];

function Allbooks() {
  const [books, setBooks] = useState([]);
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const API_URL = process.env.REACT_APP_API_URL;
  const location = useLocation();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(API_URL + "api/books/allbooks");
        if (response.data && response.data.length > 0) {
          setBooks(response.data);
        }
      } catch (err) {
        console.error("Error fetching books:", err);
      }
    };
    fetchBooks();

    // Check for search query in URL
    const params = new URLSearchParams(location.search);
    const search = params.get("search");
    if (search) {
      setSearchQuery(search);
    }
  }, [API_URL, location.search]);

  // If API returns data, use it; otherwise, use the updated fallback data
  const displayBooks = books.length > 0 ? books : BOOKS_DATA_FALLBACK;

  const filteredBooks = displayBooks.filter(book => {
    const matchesFilter = filter === "All" || book.categories?.some(cat => cat.categoryName === filter);
    const matchesSearch = (book.bookName || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
      (book.author || "").toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="books-page">
      <div className="books-header">
        <h1 className="books-page-title">Daksha LMS</h1>
        <p className="books-page-subtitle">Explore our curated collection of technical literature for B.Tech Excellence</p>

        <div className="search-bar-container" style={{ margin: "20px 0", textAlign: "center" }}>
          <input
            type="text"
            placeholder="Search by title or author..."
            className="books-search-input"
            style={{
              padding: "12px 25px",
              borderRadius: "30px",
              border: "2px solid #6366f1",
              width: "100%",
              maxWidth: "600px",
              fontSize: "16px",
              outline: "none",
              boxShadow: "0 4px 15px rgba(99, 102, 241, 0.1)"
            }}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="filter-bar">
          {["All", "CSE", "EEE", "ECE", "Civil", "Mechanical"].map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? "active" : ""} btn-${cat.toLowerCase()}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="books-container">
        <div className="books-grid">
          {filteredBooks.map((book) => (
            <div className={`modern-book-card card-${(book.categories?.[0]?.categoryName || "CSE").toLowerCase()}`} key={book._id}>
              <div className="book-card-inner">
                <div className="book-image-wrapper">
                  <img src={book.image || "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=400&auto=format&fit=crop"} alt={book.bookName} />
                  <div className={`book-category-badge badge-${(book.categories?.[0]?.categoryName || "CSE").toLowerCase()}`}>{book.categories?.[0]?.categoryName || "General"}</div>
                </div>
                <div className="book-content">
                  <h3 className="book-title">{book.bookName}</h3>
                  <p className="book-author">By {book.author}</p>
                  <p className="book-summary" title={book.description}>{book.description ? book.description.substring(0, 80) + "..." : "No description available."}</p>
                  <div className="book-actions">
                    <button className="reserve-btn">View Details</button>
                    <span className={`book-status-tag ${book.bookCountAvailable > 0 ? "available" : "unavailable"}`}
                      style={{
                        marginLeft: "10px",
                        padding: "6px 12px",
                        borderRadius: "20px",
                        fontSize: "12px",
                        fontWeight: "600",
                        background: book.bookCountAvailable > 0 ? "#ecfdf5" : "#fef2f2",
                        color: book.bookCountAvailable > 0 ? "#059669" : "#dc2626",
                        border: `1px solid ${book.bookCountAvailable > 0 ? "#10b981" : "#f87171"}`
                      }}>
                      {book.bookCountAvailable > 0 ? `Available: ${book.bookCountAvailable}` : "Out of Stock"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {filteredBooks.length === 0 && <p className="no-results" style={{ textAlign: "center", gridColumn: "1/-1", padding: "60px", fontSize: "1.2rem", color: "#64748b" }}>No books found matching your criteria.</p>}
        </div>
      </div>
    </div>
  );
}

export default Allbooks;
