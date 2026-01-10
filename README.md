# 📚 Daksha LMS

> A modern, responsive, and full-featured Library Management System built with the MERN stack (MongoDB, Express.js, React.js, Node.js). 
> Designed to streamline library operations for both Students and Administrators with a beautiful, user-friendly interface.

## 🚀 Features

### 👨‍💼 Admin Panel
- **Dashboard Analytics**: Real-time overview of total books, members, and active transactions.
- **Member Management**: Add, update, and remove library members (Students/Faculty).
- **Book Management**: complete CRUD operations for books with categories (CSE, ECE, Mechanical, etc.).
- **Transaction Handling**: Issue and return books seamlessly with tracking.
- **Reservations**: View and manage book reservation requests.

### 👨‍🎓 Student/User Panel
- **Catalog Browsing**: Search and filter books by category, author, or title.
- **Book Details**: Rich UI showing book descriptions, availability, and cover images.
- **My Profile**: View borrowed books, fines, and history.
- **Reservation System**: Request to reserve books directly from the dashboard.

### 🎨 UI/UX Design
- **Modern Aesthetics**: Clean Glassmorphism effects, animated backgrounds, and smooth transitions.
- **Responsive Layout**: Fully optimized for Desktop, Tablet, and Mobile devices.
- **Dark/Light Mode**: (Currently optimized for a premium Dark Theme experience).

## 🛠 Tech Stack

| Component | Technology |
|-----------|------------|
| **Frontend** | React.js, Context API, CSS3 (Glassmorphism), Material UI Icons |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB (Atlas or Local) |
| **Authentication** | JWT (JSON Web Tokens) recommended / Session-based |
| **State Management**| React Context API |

## ⚙️ Usage & Installation

Follow these steps to run the project locally.

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/Library-Management-System-MERN.git
cd Library-Management-System-MERN
```

### 2. Backend Setup
Navigate to the backend folder and install dependencies.
```bash
cd backend
npm install
```

**Configure Environment Variables:**
Create a `.env` file in the `backend` directory:
```env
MONGO_URL=your_mongodb_connection_string
PORT=5000
```
> *Note: The system includes a fallback to an in-memory database if no MongoDB URL is provided, but a real database is recommended for persistence.*

Start the Backend Server:
```bash
npm start
```
*Server runs on http://localhost:5000*

### 3. Frontend Setup
Open a new terminal, navigate to the frontend folder, and install dependencies.
```bash
cd frontend
npm install
```

**Configure Environment Variables:**
The frontend connects to the backend via `REACT_APP_API_URL`. Ensure this aligns with your backend port.
by default it connects to `http://localhost:5000/`.

Start the Frontend Application:
```bash
npm start
```
*App runs on http://localhost:3000*

## 📦 Deployment Guide

### Backend (Render/Heroku/Vercel)
1.  Push the `backend` folder or the root repo.
2.  Set `MONGO_URL` in the deployment platform's environment variables.
3.  Ensure the build command matches `npm install` and start command `node server.js`.

### Frontend (Netlify/Vercel)
1.  Push the `frontend` folder or root repo.
2.  Set `REACT_APP_API_URL` to your deployed backend URL (e.g., `https://my-api.onrender.com/`).
3.  Build command: `npm run build`.
4.  Publish directory: `build`.

## 🤝 Contribution

Contributions are welcome!
1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.


## � Demo Credentials

Use the following credentials to test the application features:

### 👤 Admin Access
- **ID**: `ADMIN001`
- **Email**: `admin@gmail.com`
- **Password**: `admin123`

### 🎓 Student Access
- **ID**: `STUD001`
- **Email**: `student@gmail.com`
- **Password**: `student123`

## �📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
*Created with ❤️ by Raghavendra*
