import bcrypt from "bcrypt";
import User from "../models/User.js";
import Book from "../models/Book.js";
import Category from "../models/BookCategory.js";

const BOOKS_DATA = [
    // CSE
    {
        bookName: "Programming in ANSI C",
        author: "E. Balagurusamy",
        image: "https://m.media-amazon.com/images/I/51t6N-k9OBL._SX342_SY445_.jpg",
        description: "A comprehensive guide to programming in C, covering all robust features of the language.",
        category: "CSE"
    },
    {
        bookName: "Data Structures Using C",
        author: "Reema Thareja",
        image: "https://m.media-amazon.com/images/I/81O36vSgEHL._SY466_.jpg",
        description: "Provides a comprehensive and consistent coverage of both the abstract concepts of data structures and their implementation.",
        category: "CSE"
    },
    {
        bookName: "Introduction to Algorithms",
        author: "Cormen, Leiserson, Rivest, Stein",
        image: "https://m.media-amazon.com/images/I/61PgDn8DsuL._AC_UY327_FMwebp_QL65_.jpg",
        description: "The 'bible' of computer science algorithms, covering everything from sorting to graph theory.",
        category: "CSE"
    },
    {
        bookName: "Operating System Concepts",
        author: "Silberschatz, Galvin, Gagne",
        image: "https://m.media-amazon.com/images/I/81a+xHhN3BL._AC_UY327_FMwebp_QL65_.jpg",
        description: "Fundamental concepts of operating systems including processes, memory, and storage management.",
        category: "CSE"
    },
    {
        bookName: "Computer Networking: A Top-Down Approach",
        author: "Kurose & Ross",
        image: "https://m.media-amazon.com/images/I/71p0Em+3jVL._AC_UY327_FMwebp_QL65_.jpg",
        description: "A clear and engaging introduction to computer networking, organized around the Internet architecture.",
        category: "CSE"
    },
    {
        bookName: "Database System Concepts",
        author: "Silberschatz, Korth, Sudarshan",
        image: "https://m.media-amazon.com/images/I/51+u0a+jGEL._SX357_BO1,204,203,200_.jpg",
        description: "Core principles for designing, implementing, and managing database systems.",
        category: "CSE"
    },
    {
        bookName: "Software Engineering",
        author: "Ian Sommerville",
        image: "https://m.media-amazon.com/images/I/71k4i-8ZJzL._AC_UY327_FMwebp_QL65_.jpg",
        description: "Methodologies for building complex software systems at scale.",
        category: "CSE"
    },
    {
        bookName: "Introduction to Automata Theory",
        author: "Hopcroft, Motwani, Ullman",
        image: "https://m.media-amazon.com/images/I/51w+3F+A6KL._SX370_BO1,204,203,200_.jpg",
        description: "The classic text on formal languages, automata, and computational complexity.",
        category: "CSE"
    },
    {
        bookName: "Artificial Intelligence: A Modern Approach",
        author: "Stuart Russell & Peter Norvig",
        image: "https://m.media-amazon.com/images/I/81q6xP8aZAL._AC_UY327_FMwebp_QL65_.jpg",
        description: "The leading textbook in AI, covering agents, logic, and machine learning.",
        category: "CSE"
    },
    {
        bookName: "Machine Learning",
        author: "Tom M. Mitchell",
        image: "https://m.media-amazon.com/images/I/71Y9g0+0VYL._AC_UY327_FMwebp_QL65_.jpg",
        description: "Foundations of automated learning and predictive modeling.",
        category: "CSE"
    },

    // ECE
    {
        bookName: "Electronic Devices and Circuit Theory",
        author: "Boylestad & Nashelsky",
        image: "https://m.media-amazon.com/images/I/818+R0vT2ML._AC_UY327_FMwebp_QL65_.jpg",
        description: "Standard text for understanding semiconductor devices and circuit analysis.",
        category: "ECE"
    },
    {
        bookName: "Signals and Systems",
        author: "Alan V. Oppenheim",
        image: "https://m.media-amazon.com/images/I/51aK8e2+k8L._SX367_BO1,204,203,200_.jpg",
        description: "Mathematical foundations for processing and analyzing signals.",
        category: "ECE"
    },
    {
        bookName: "Digital Design",
        author: "M. Morris Mano",
        image: "https://m.media-amazon.com/images/I/51P+fTC6J+L._SX385_BO1,204,203,200_.jpg",
        description: "Fundamental concepts of digital logic, gates, and processors.",
        category: "ECE"
    },
    {
        bookName: "Principles of Communication Systems",
        author: "Taub & Schilling",
        image: "https://m.media-amazon.com/images/I/71W-2+d+eEL._AC_UY327_FMwebp_QL65_.jpg",
        description: "Introduction to analog and digital signal modulation techniques.",
        category: "ECE"
    },
    {
        bookName: "Engineering Electromagnetics",
        author: "William H. Hayt",
        image: "https://m.media-amazon.com/images/I/512+1s0+yGL._SX373_BO1,204,203,200_.jpg",
        description: "Classic text on electromagnetic fields and waves.",
        category: "ECE"
    },
    {
        bookName: "Microprocessor Architecture",
        author: "Ramesh S. Gaonkar",
        image: "https://m.media-amazon.com/images/I/91rz8-f+d+L._AC_UY327_FMwebp_QL65_.jpg",
        description: "The 8085 microprocessor architecture, programming, and interfacing.",
        category: "ECE"
    },
    {
        bookName: "Principles of CMOS VLSI Design",
        author: "Neil H.E. Weste",
        image: "https://m.media-amazon.com/images/I/61+9+8+k+L._AC_UY327_FMwebp_QL65_.jpg",
        description: "Techniques for designing highly integrated CMOS circuits.",
        category: "ECE"
    },
    {
        bookName: "Modern Control Engineering",
        author: "Katsuhiko Ogata",
        image: "https://m.media-amazon.com/images/I/71s8Q+8+1+L._AC_UY327_FMwebp_QL65_.jpg",
        description: "State-space analysis and modern control design techniques.",
        category: "ECE"
    },
    {
        bookName: "Digital Signal Processing",
        author: "John G. Proakis",
        image: "https://m.media-amazon.com/images/I/71+6+1+k+L._AC_UY327_FMwebp_QL65_.jpg",
        description: "Algorithmic processing of digital signals and filtrations.",
        category: "ECE"
    },

    // EEE
    {
        bookName: "Electrical Machinery",
        author: "P.S. Bimbhra",
        image: "https://m.media-amazon.com/images/I/81+2+6+k+L._AC_UY327_FMwebp_QL65_.jpg",
        description: "Comprehensive guide to electrical machines and transformers.",
        category: "EEE"
    },
    {
        bookName: "Power System Engineering",
        author: "Nagrath & Kothari",
        image: "https://m.media-amazon.com/images/I/81+2+6+k+L._AC_UY327_FMwebp_QL65_.jpg",
        description: "Comprehensive coverage of power generation, transmission, and distribution.",
        category: "EEE"
    },
    {
        bookName: "Power Electronics",
        author: "P.S. Bimbhra",
        image: "https://m.media-amazon.com/images/I/71+2+6+k+L._AC_UY327_FMwebp_QL65_.jpg",
        description: "Principles and applications of power conversion and electrical control.",
        category: "EEE"
    },
    {
        bookName: "Engineering Circuit Analysis",
        author: "Hayt & Kemmerly",
        image: "https://m.media-amazon.com/images/I/81+2+6+k+L._AC_UY327_FMwebp_QL65_.jpg",
        description: "Essentials of circuit analysis with practical engineering applications.",
        category: "EEE"
    },
    {
        bookName: "Automatic Control Systems",
        author: "Benjamin C. Kuo",
        image: "https://m.media-amazon.com/images/I/81+2+6+k+L._AC_UY327_FMwebp_QL65_.jpg",
        description: "Practical approach to analysis and design of feedback control systems.",
        category: "EEE"
    },
    {
        bookName: "Electrical Measurements",
        author: "Golding & Widdis",
        image: "https://m.media-amazon.com/images/I/81+2+6+k+L._AC_UY327_FMwebp_QL65_.jpg",
        description: "Classic text on electrical measuring instruments.",
        category: "EEE"
    },
    {
        bookName: "High Voltage Engineering",
        author: "M.S. Naidu",
        image: "https://m.media-amazon.com/images/I/81+2+6+k+L._AC_UY327_FMwebp_QL65_.jpg",
        description: "Design and testing protocols for high voltage power components.",
        category: "EEE"
    },
    {
        bookName: "Power System Protection",
        author: "Badri Ram",
        image: "https://m.media-amazon.com/images/I/81+2+6+k+L._AC_UY327_FMwebp_QL65_.jpg",
        description: "Protection systems for power grids and electrical devices.",
        category: "EEE"
    },
    {
        bookName: "Renewable Energy Sources",
        author: "D.P. Kothari",
        image: "https://m.media-amazon.com/images/I/81+2+6+k+L._AC_UY327_FMwebp_QL65_.jpg",
        description: "Exploration of solar, wind, and sustainable power technologies.",
        category: "EEE"
    },

    // Civil
    {
        bookName: "Strength of Materials",
        author: "R.K. Bansal",
        image: "https://m.media-amazon.com/images/I/81+2+6+k+L._AC_UY327_FMwebp_QL65_.jpg",
        description: "Standard text on mechanics of materials for civil engineering.",
        category: "Civil"
    },
    {
        bookName: "Structural Analysis",
        author: "R.C. Hibbeler",
        image: "https://m.media-amazon.com/images/I/81+2+6+k+L._AC_UY327_FMwebp_QL65_.jpg",
        description: "Comprehensive guide to analysis of determinate and indeterminate structures.",
        category: "Civil"
    },
    {
        bookName: "Concrete Technology",
        author: "M.S. Shetty",
        image: "https://m.media-amazon.com/images/I/81+2+6+k+L._AC_UY327_FMwebp_QL65_.jpg",
        description: "Properties of concrete, mix design, and special concretes.",
        category: "Civil"
    },
    {
        bookName: "Surveying (Vol I & II)",
        author: "B.C. Punmia",
        image: "https://m.media-amazon.com/images/I/81+2+6+k+L._AC_UY327_FMwebp_QL65_.jpg",
        description: "Fundamental principles and modern methods of surveying.",
        category: "Civil"
    },
    {
        bookName: "Soil Mechanics and Foundations",
        author: "B.C. Punmia",
        image: "https://m.media-amazon.com/images/I/81+2+6+k+L._AC_UY327_FMwebp_QL65_.jpg",
        description: "Behavior of soils and design of foundations.",
        category: "Civil"
    },
    {
        bookName: "Fluid Mechanics",
        author: "R.K. Bansal",
        image: "https://m.media-amazon.com/images/I/81+2+6+k+L._AC_UY327_FMwebp_QL65_.jpg",
        description: "Comprehensive coverage of fluid mechanics and hydraulic machines.",
        category: "Civil"
    },
    {
        bookName: "Highway Engineering",
        author: "Khanna & Justo",
        image: "https://m.media-amazon.com/images/I/81+2+6+k+L._AC_UY327_FMwebp_QL65_.jpg",
        description: "Planning, design, construction, and maintenance of roads.",
        category: "Civil"
    },
    {
        bookName: "Environmental Engineering",
        author: "S.K. Garg",
        image: "https://m.media-amazon.com/images/I/81+2+6+k+L._AC_UY327_FMwebp_QL65_.jpg",
        description: "Water supply, wastewater treatment, and pollution control.",
        category: "Civil"
    },
    {
        bookName: "Construction Planning and Management",
        author: "U.K. Shrivastava",
        image: "https://m.media-amazon.com/images/I/81+2+6+k+L._AC_UY327_FMwebp_QL65_.jpg",
        description: "Techniques for planning and managing construction projects.",
        category: "Civil"
    },

    // Mechanical
    {
        bookName: "Engineering Mechanics",
        author: "Timoshenko & Young",
        image: "https://m.media-amazon.com/images/I/81+2+6+k+L._AC_UY327_FMwebp_QL65_.jpg",
        description: "Foundational principles of statics and dynamics.",
        category: "Mechanical"
    },
    {
        bookName: "Engineering Thermodynamics",
        author: "P.K. Nag",
        image: "https://m.media-amazon.com/images/I/81+2+6+k+L._AC_UY327_FMwebp_QL65_.jpg",
        description: "Basic and applied concepts of thermodynamics.",
        category: "Mechanical"
    },
    {
        bookName: "Fluid Mechanics",
        author: "R.K. Bansal",
        image: "https://m.media-amazon.com/images/I/81+2+6+k+L._AC_UY327_FMwebp_QL65_.jpg",
        description: "Properties of fluids and fluid dynamics applications.",
        category: "Mechanical"
    },
    {
        bookName: "Theory of Machines",
        author: "S.S. Rattan",
        image: "https://m.media-amazon.com/images/I/81+2+6+k+L._AC_UY327_FMwebp_QL65_.jpg",
        description: "Kinematics and dynamics of machinery.",
        category: "Mechanical"
    },
    {
        bookName: "Design of Machine Elements",
        author: "V.B. Bhandari",
        image: "https://m.media-amazon.com/images/I/81+2+6+k+L._AC_UY327_FMwebp_QL65_.jpg",
        description: "Design procedures for various machine components.",
        category: "Mechanical"
    },
    {
        bookName: "Manufacturing Science",
        author: "Ghosh & Mallik",
        image: "https://m.media-amazon.com/images/I/81+2+6+k+L._AC_UY327_FMwebp_QL65_.jpg",
        description: "Scientific principles of manufacturing processes.",
        category: "Mechanical"
    },
    {
        bookName: "Heat and Mass Transfer",
        author: "R.K. Rajput",
        image: "https://m.media-amazon.com/images/I/81+2+6+k+L._AC_UY327_FMwebp_QL65_.jpg",
        description: "Fundamentals of heat transfer mechanisms.",
        category: "Mechanical"
    },
    {
        bookName: "Internal Combustion Engines",
        author: "V. Ganesan",
        image: "https://m.media-amazon.com/images/I/81+2+6+k+L._AC_UY327_FMwebp_QL65_.jpg",
        description: "Operation and performance of IC engines.",
        category: "Mechanical"
    },
    {
        bookName: "Refrigeration and Air Conditioning",
        author: "C.P. Arora",
        image: "https://m.media-amazon.com/images/I/81+2+6+k+L._AC_UY327_FMwebp_QL65_.jpg",
        description: "Principles of refrigeration cycles and air conditioning systems.",
        category: "Mechanical"
    },
    {
        bookName: "CAD/CAM: Principles and Applications",
        author: "P.N. Rao",
        image: "https://m.media-amazon.com/images/I/81+2+6+k+L._AC_UY327_FMwebp_QL65_.jpg",
        description: "Computer-aided design and manufacturing technologies.",
        category: "Mechanical"
    }
];

export const seedData = async () => {
    try {
        console.log("Adding users...");
        // Clear existing users just in case
        await User.deleteMany({});

        const salt = await bcrypt.genSalt(10);
        const adminPassword = await bcrypt.hash("admin123", salt);
        const studentPassword = await bcrypt.hash("student123", salt);

        const adminUser = new User({
            userFullName: "Demo Admin",
            email: "admin@gmail.com",
            password: adminPassword,
            isAdmin: true,
            userType: "Staff",
            employeeId: "ADMIN001",
            mobileNumber: "9876543210",
            address: "IIIT Sri City",
            gender: "Male"
        });

        const studentUser = new User({
            userFullName: "Demo Student",
            email: "student@gmail.com",
            password: studentPassword,
            isAdmin: false,
            userType: "Student",
            admissionId: "STUD001",
            mobileNumber: "9123456789",
            address: "IIIT Sri City Hostel",
            gender: "Female"
        });

        await adminUser.save();
        await studentUser.save();
        console.log("Demo users seeded.");

        console.log("Adding books...");
        await Book.deleteMany({});
        await Category.deleteMany({});

        // Create Categories
        const categories = ["CSE", "ECE", "EEE", "Civil", "Mechanical"];
        const categoryMap = {};

        for (const catName of categories) {
            const cat = new Category({ categoryName: catName });
            const savedCat = await cat.save();
            categoryMap[catName] = savedCat._id;
        }

        // Add Books
        for (const bookInfo of BOOKS_DATA) {
            const book = new Book({
                bookName: bookInfo.bookName,
                author: bookInfo.author,
                image: bookInfo.image,
                description: bookInfo.description,
                language: "English",
                publisher: "Standard Publishers",
                bookCountAvailable: 5,
                bookStatus: "Available",
                categories: [categoryMap[bookInfo.category]]
            });
            await book.save();
        }
        console.log(`Seeded ${BOOKS_DATA.length} books successfully.`);

    } catch (err) {
        console.error("Error seeding memory database:", err);
    }
};
