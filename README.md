# 🚀 Mini CRM – Client Lead Management System

A full-stack Client Lead Management System (Mini CRM) built using React, Node.js, Express, and MySQL.

This application allows businesses, agencies, and freelancers to capture leads from a website contact form, track their status, manage follow-up notes, and securely access data via an admin dashboard.

---

## 📌 Features

### ✅ Lead Management
- Capture leads via contact form
- Store lead details in MySQL database
- View all leads in admin dashboard

### ✅ Status Tracking
- Track lead status:
  - New
  - Contacted
  - Converted
- Update status dynamically
- Persistent database updates

### ✅ Follow-Up Notes
- Add follow-up notes for each lead
- View notes per lead
- Notes stored in database with relational mapping

### ✅ Secure Admin Access
- Admin login with email & password
- Password hashing using bcrypt
- JWT token-based authentication
- Dashboard protected from unauthorized access

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Axios
- React Router

### Backend
- Node.js
- Express.js
- JWT Authentication
- bcryptjs (password hashing)
- dotenv

### Database
- MySQL

mini-crm/
│
├── backend/
│ ├── config/
│ ├── routes/
│ ├── server.js
│ └── .env
│
└── frontend/
├── src/
│ ├── pages/
│ ├── App.jsx
│ └── main.jsx


---

## ⚙️ Installation Guide

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/mini-crm.git
cd mini-crm

Backend Setup
cd backend
npm install
npm run dev

Make sure to create a .env file:

PORT=5000
JWT_SECRET=your_secret_key
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=mini_crm

Frontend Setup
cd frontend
npm install
npm run dev

Test Credentials
Email: admin@gmail.com
Password: admin123

🎯 API Endpoints
Leads
POST /api/leads
GET /api/leads
PUT /api/leads/:id

Notes
POST /api/notes/:leadId
GET /api/notes/:leadId

Authentication
POST /api/auth/login

🔐 Security
Passwords are securely hashed using bcrypt.
JWT tokens are generated upon login.
Dashboard is protected using token validation.
Unauthorized access redirects to login page.

🚀 Future Improvements
Backend route protection using JWT middleware
UI enhancements with modern styling
Search and filtering functionality
Pagination
Deployment (Render + Vercel)

👨‍💻 Author

Sagar Ghorade
Full Stack Developer


## 📂 Project Structure

