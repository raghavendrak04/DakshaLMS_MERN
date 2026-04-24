<div align="center">

# 📚 Daksha LMS
### Modern Library Management System

![MERN Stack](https://img.shields.io/badge/MERN-Stack-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

*A comprehensive, responsive, and feature-rich Library Management System built with the MERN stack for educational institutions.*

[Features](#-features) • [Quick Start](#-quick-start) • [How to Run](#-how-to-run-step-by-step) • [Demo Logins](#-demo-login-credentials) • [API Docs](#-api-routes) • [Contributing](#-contributing)

</div>

---

## 📖 About The Project

**Daksha LMS** is a full-stack Library Management System designed for colleges and universities. It provides separate dashboards for **Administrators** and **Students/Members** to manage books, issue/return transactions, reservations, and more — all through a modern, dark-themed UI with glassmorphism effects.

### 🎯 Key Objectives
- **Automate Library Operations** — Book issuing, returning, and reservations
- **Real-time Inventory** — Track book availability and member activity instantly
- **Dual Dashboards** — Separate Admin and Member interfaces
- **Zero-Config Fallback** — Works even without MongoDB installed (uses in-memory DB)

---

## ✨ Features

### 👨‍💼 Admin Dashboard
| Feature | Description |
|---------|-------------|
| 📊 Overview | Real-time stats — total books, members, active transactions |
| 👥 Member Management | Add, update, delete library members |
| 📚 Book Management | Full CRUD for books with cover images and categories |
| 🔄 Transactions | Issue books, process returns, track due dates & fines |
| 📋 Reservations | View and manage book reservation requests |

### 👨‍🎓 Member Dashboard
| Feature | Description |
|---------|-------------|
| 🔍 Browse Catalog | Search & filter books by title, author, category |
| ✅ Availability Status | Real-time book availability |
| 👤 Profile | View borrowed books, history, and fines |
| 🔖 Reserve Books | Request books that are currently unavailable |

### 🎨 UI/UX
- Dark mode with glassmorphism design
- Animated backgrounds and smooth transitions
- Fully responsive — works on desktop, tablet, and mobile
- **One-click demo login buttons** on the Sign In page

---

## 🛠 Tech Stack

### Frontend
| Technology | Version | Purpose |
|-----------|---------|---------|
| React.js | 17.0.2 | UI framework |
| React Router DOM | 5.2.0 | Client-side routing |
| Material-UI | 4.x | Icons & components |
| Axios | 0.21.1 | HTTP requests |
| Bootstrap | 4.6.0 | Responsive grid |
| Moment.js | 2.29.1 | Date formatting |

### Backend
| Technology | Version | Purpose |
|-----------|---------|---------|
| Node.js | 14+ | Runtime |
| Express.js | 4.17.1 | REST API server |
| Mongoose | 5.13.3 | MongoDB ODM |
| bcrypt | 5.0.1 | Password hashing |
| CORS | 2.8.5 | Cross-origin support |
| dotenv | 10.0.0 | Environment variables |

### Database
| Technology | Purpose |
|-----------|---------|
| MongoDB | Primary database (local or Atlas) |
| MongoDB Memory Server | Auto-fallback if MongoDB is not installed |

---

## 📁 Project Structure

```
Library-Management-System-MERN/
├── backend/
│   ├── models/              # Mongoose schemas
│   │   ├── Book.js
│   │   ├── User.js
│   │   ├── Transaction.js
│   │   └── BookCategory.js
│   ├── routes/              # Express route handlers
│   │   ├── auth.js          # Login & register
│   │   ├── books.js         # Book CRUD
│   │   ├── users.js         # User management
│   │   ├── transactions.js  # Issue/return books
│   │   └── categories.js    # Book categories
│   ├── scripts/             # Database utilities
│   │   ├── seed.js          # Seed runner
│   │   └── seedHelper.js    # Seed data (users + 47 books)
│   ├── .env                 # Environment config (create this)
│   ├── .env.example         # Example env file
│   ├── server.js            # Entry point
│   └── package.json
│
├── frontend/
│   ├── public/              # Static assets
│   ├── src/
│   │   ├── Components/      # Reusable components (Header, ImageSlider, etc.)
│   │   ├── Pages/
│   │   │   ├── Dashboard/
│   │   │   │   ├── AdminDashboard/   # Admin panels
│   │   │   │   └── MemberDashboard/  # Member panels
│   │   │   ├── Allbooks.js  # Book catalog page
│   │   │   ├── Signin.js    # Login page with demo buttons
│   │   │   └── Signin.css
│   │   ├── Context/         # React Context (AuthContext)
│   │   ├── App.js           # Root component & routes
│   │   └── index.js         # React entry point
│   ├── .env                 # Frontend env config
│   └── package.json
│
├── README.md
└── Project_Report.md
```

---

## 🚀 Quick Start

> **Fastest way to run** — just 4 commands:

```bash
# 1. Clone
git clone https://github.com/raghavendrak04/DakshaLMS_MERN.git
cd Library-Management-System-MERN

# 2. Install & start backend (Terminal 1)
cd backend && npm install && npm start

# 3. Install & start frontend (Terminal 2)
cd frontend && npm install && npm start
```

The app opens at **http://localhost:3000** — use the demo login buttons on the Sign In page!

> **Note:** If MongoDB is not installed locally, the backend automatically uses an in-memory database with demo data pre-loaded.

---

## 📋 How to Run (Step by Step)

### Prerequisites
| Software | Required | Download |
|----------|----------|----------|
| **Node.js** (v14+) | ✅ Yes | [nodejs.org](https://nodejs.org/) |
| **npm** | ✅ Yes | Comes with Node.js |
| **MongoDB** | ❌ Optional | [mongodb.com](https://www.mongodb.com/try/download/community) |
| **Git** | ✅ Yes | [git-scm.com](https://git-scm.com/) |

> MongoDB is **optional**. Without it, the app auto-falls back to an in-memory database with all demo data.

---

### Step 1️⃣ — Clone the Repository

```bash
git clone https://github.com/raghavendrak04/DakshaLMS_MERN.git
cd Library-Management-System-MERN
```

---

### Step 2️⃣ — Backend Setup

```bash
cd backend
npm install
```

#### Configure Environment Variables

Create a `.env` file in the `backend/` folder:

```env
PORT=5000
MONGO_URL=mongodb://localhost:27017/library
```

> **💡 Tips:**
> - For **MongoDB Atlas** (cloud), replace `MONGO_URL` with your Atlas connection string
> - If you **skip this step entirely**, the server uses an in-memory database automatically
> - A `.env.example` file is included for reference

#### Start the Backend Server

```bash
npm start
```

You should see:
```
Server is running in PORT 5000
MONGODB CONNECTED SUCCESSFULLY (LOCAL)
```

Or if MongoDB isn't installed:
```
Server is running in PORT 5000
MONGODB CONNECTED SUCCESSFULLY (MEMORY SERVER)
Seeding demo data...
Seeding complete.
```

---

### Step 3️⃣ — Frontend Setup

**Open a new terminal** (keep the backend running):

```bash
cd frontend
npm install
```

#### Configure API URL (Optional)

Create a `.env` file in the `frontend/` folder:

```env
REACT_APP_API_URL=http://localhost:5000/
```

> If this file already exists, no changes needed. The default points to `localhost:5000`.

#### Start the Frontend

```bash
npm start
```

The app opens automatically at **http://localhost:3000**

---

### Step 4️⃣ — Seed the Database (If Using Local MongoDB)

If you're using a local MongoDB installation (not the memory server), seed demo data:

```bash
cd backend
npm run seed
```

This creates:
- 3 demo users (Admin, Student, Teacher)
- 47 books across 5 categories (CSE, ECE, EEE, Civil, Mechanical)
- 5 book categories

---

## 🔑 Demo Login Credentials

The Sign In page has **one-click demo login buttons** — no need to type anything!

| Role | ID | Password | Login Type |
|------|----|----------|------------|
| 🎓 **Demo Student** | `STUD001` | `student123` | Admission ID (Student toggle) |
| 👨‍🏫 **Demo Teacher** | `TEACH001` | `teacher123` | Employee ID (Staff toggle) |
| 👨‍💼 **Demo Admin** | `ADMIN001` | `admin123` | Employee ID (Staff toggle) |

> **Manual login:** Toggle between "Student" and "Staff" mode using the switch on the login page, then enter the ID and password above.

> ⚠️ **Security Note:** Change these credentials immediately if deploying to production!

---

## 🌐 API Routes

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/auth/register` | Register a new user |
| `POST` | `/api/auth/signin` | Login with admissionId/employeeId + password |

### Users
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/users/all-members` | Get all library members |
| `GET` | `/api/users/:id` | Get user by ID |
| `PUT` | `/api/users/updateuser/:id` | Update user details |
| `PUT` | `/api/users/:id/move-to-activetransactions` | Add active transaction to user |
| `PUT` | `/api/users/:id/move-to-prevtransactions` | Move transaction to history |
| `DELETE` | `/api/users/deleteuser/:id` | Remove a user |

### Books
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/books/allbooks` | Get all books |
| `GET` | `/api/books/:id` | Get book by ID |
| `POST` | `/api/books/addbook` | Add a new book |
| `PUT` | `/api/books/updatebook/:id` | Update book details |
| `DELETE` | `/api/books/removebook/:id` | Delete a book |

### Transactions
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/transactions/all-transactions` | Get all transactions |
| `POST` | `/api/transactions/add-transaction` | Create a new transaction (issue book) |
| `PUT` | `/api/transactions/update-transaction/:id` | Update transaction status |

### Categories
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/categories/allcategories` | Get all book categories |
| `POST` | `/api/categories/addcategory` | Add a new category |
| `DELETE` | `/api/categories/deletecategory/:id` | Delete a category |

---

## 🚢 Deployment

### Backend (Render / Railway / Heroku)
1. Push code to GitHub
2. Connect your repository
3. Set environment variables:
   - `MONGO_URL` — your MongoDB Atlas connection string
   - `PORT` — `5000` (or platform default)
4. Build command: `npm install`
5. Start command: `node server.js`

### Frontend (Vercel / Netlify)
1. Build: `npm run build`
2. Deploy the `build/` folder
3. Set env variable: `REACT_APP_API_URL=https://your-backend.onrender.com/`
4. For Netlify, add `_redirects` file in `public/`:
   ```
   /*    /index.html   200
   ```

---

## 🐛 Known Issues & Roadmap

### Current Limitations
- Session-based auth (no JWT yet)
- No email notifications
- No barcode scanning

### Planned Features
- 🔐 JWT authentication with refresh tokens
- 📧 Email notifications for due dates
- 📱 Mobile app (React Native)
- 📊 Advanced analytics dashboard
- 📄 PDF receipt generation
- 🔍 Barcode/QR code scanning
- 💳 Online fine payment

---

## 🤝 Contributing

1. **Fork** this repository
2. **Create** a feature branch: `git checkout -b feature/MyFeature`
3. **Commit** your changes: `git commit -m "Add MyFeature"`
4. **Push** to the branch: `git push origin feature/MyFeature`
5. **Open** a Pull Request

---

## 📝 License

This project is licensed under the **MIT License**.

---

## 🙏 Acknowledgments

- [React Documentation](https://reactjs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://docs.mongodb.com/)
- [Material-UI](https://mui.com/)

---

<div align="center">

### ⭐ Star this repo if you found it helpful!

**Made with ❤️ using the MERN Stack**

[⬆ Back to Top](#-daksha-lms)

</div>
