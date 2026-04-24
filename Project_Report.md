# 📚 Daksha LMS - Project Report

## 1. Working Aim
The primary aim of **Daksha LMS** (Library Management System) is to modernize and streamline library operations for educational institutions. It provides a dual-interface platform that caters to two main user groups:
*   **Administrators**: To efficiently manage library assets, including books, members, and transaction records (issuing/returning books).
*   **Students/Faculty**: To easily browse the library catalog, check availability, manage their profiles, and reserve books online.

The system aims to replace manual record-keeping with a digital, automated, and user-friendly solution that enhances efficiency and accessibility.

## 2. Technology Stack
The project is built using the **MERN Stack**, ensuring a robust, scalable, and JavaScript-based full-stack architecture.

### **Frontend** (Client-Side)
The user interface is built with **React.js**, focusing on a responsive and modern design.
*   **Core Framework**: `React.js` (v17.0.2)
*   **State Management**: `Context API` (Native React)
*   **UI Libraries & Frameworks**:
    *   `Bootstrap` & `React-Bootstrap`: For responsive grid layouts and components.
    *   `@material-ui/core` & `@material-ui/icons`: For ready-to-use Material Design components and icons.
    *   `Semantic UI React`: Additional UI components.
*   **HTTP Client**: `Axios` (for communicating with the backend API).
*   **Routing**: `react-router-dom` (for single-page application navigation).
*   **Utilities**: `Moment.js` (for date formatting and manipulation).
*   **Date Pickers**: `react-datepicker`, `react-datetime`.

### **Backend** (Server-Side)
The server logic is powered by **Node.js** and **Express.js**.
*   **Runtime Environment**: `Node.js`
*   **Web Framework**: `Express.js` (v4.17.1) - Handles API routing and middleware.
*   **Security**: `bcrypt` (v5.0.1) - For hashing user passwords.
*   **Cross-Origin Resource Sharing**: `cors` - To allow frontend-backend communication.
*   **Environment Variables**: `dotenv` - For managing configuration secrets.
*   **File Handling**: `multer` - For handling `multipart/form-data` (likely for book cover image uploads).

### **Database**
*   **Database**: `MongoDB` (NoSQL Database).
*   **ODM (Object Data Modeling)**: `Mongoose` (v5.13.3) - For modeling application data and interacting with MongoDB.

## 3. Key Features

### 👨‍💼 For Administrators
*   **Dashboard Analytics**: Visual overview of total books, active members, and current transactions.
*   **Member Management**: Tools to add, update, or remove student and faculty members.
*   **Inventory Management**: Full CRUD (Create, Read, Update, Delete) capabilities for library books, including categorization.
*   **Transaction Handler**: Streamlined process for issuing and returning books to members.
*   **Reservation Management**: View and approve/reject book reservation requests.

### 👨‍🎓 For Students/Users
*   **Digital Catalog**: Search and filter functionality to find books by category, author, or title.
*   **Live Availability**: Real-time status checks to see if a book is available or currently issued.
*   **User Dashboard**: Personal profile view showing borrowed books, history, and calculated fines.
*   **Reservation System**: Ability to reserve books remotely.

## 4. UI/UX Design Philosophy
*   **Modern Aesthetics**: Utilizes **Glassmorphism**, vibrant colors, and animated backgrounds to create a premium feel.
*   **Responsive Design**: Ensure the application is accessible and usable across Desktops, Tablets, and Mobile devices.
*   **Theme**: Optimized for a **Dark Mode** experience to reduce eye strain and provide a sleek look.
