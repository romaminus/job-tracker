# job-tracker
Pet project Job Tracker is a web application for effectively tracking the job search process. The application allows you to conveniently save vacancies, track the status of applications, add notes, deadlines, recruiter contacts and other important information.

# 🎯 Job Hunt Tracker

**Job Hunt Tracker** is a personal pet project built to efficiently track the job application process — from submission to potential hire. It's designed as a full-fledged Full Stack application that serves not only as a practical tool but also as a demonstration of real-world web development skills.

[![GitHub repo](https://img.shields.io/badge/GitHub-job--tracker-blue?logo=github)](https://github.com/romaminus/job-tracker.git)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Status](https://img.shields.io/badge/status-active-brightgreen)](https://github.com/romaminus/job-tracker)

---

## ✨ Features

- 🗂️ **Application Tracking** — Add, edit, and delete job applications with ease.
- 🔄 **Custom Statuses** — Track progress with flexible statuses: *Applied*, *Responded*, *Interview*, *Offer*, *Rejected*.
- 📝 **Detailed Notes** — Attach important notes to each application and interview session.
- 💾 **Local Data Storage** — All data is stored on the backend in a JSON file that simulates a simple database.
- 🧑‍💻 **Clean Interface** — Minimalistic and intuitive user experience.

---

## 🛠️ Tech Stack

### 🔹 Frontend

- **React** — Library for building user interfaces
- **Zustand** — Lightweight and fast state management
- **Tailwind CSS** — Utility-first CSS framework for styling

### 🔹 Backend

- **Node.js** — JavaScript runtime for backend logic
- **Express** — Web framework for building API routes
- **CORS** — Middleware for secure client-server communication

### 🔹 Dev Tools

- **Concurrently** — Run client and server together in one terminal

---

## 🚀 Getting Started

To run the project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/romaminus/job-tracker.git
   cd job-tracker
   ```

2. **Install root dependencies:**
   ```bash
   npm install
   ```

3. **Install frontend dependencies:**
   ```bash
   cd client
   npm install
   cd ..
   ```

4. **Install backend dependencies:**
   ```bash
   cd server
   npm install
   cd ..
   ```

5. **Run both frontend and backend:**
   ```bash
   npm run dev
   ```

- Frontend will be available at: [http://localhost:5173](http://localhost:5173)  
- Backend will run on: [http://localhost:3001](http://localhost:5000)

---

## 📂 Project Structure

```
job-tracker/
├── client/              # React frontend (Zustand, Tailwind)
│   ├── public/
│   ├── src/
│   │   ├── api/         # API interaction functions
│   │   ├── components/    # Reusable UI components
│   │   ├── store/         # Zustand store for state
│   │   └── ...            # Other client files
│   ├── index.html
│   └── package.json
├── server/              # Express backend
│   ├── data/
│   │   └── applications.json # JSON file simulating a database
│   ├── server.js         # Main Express server
│   └── package.json
├── package.json         # Root dependencies (incl. concurrently)
└── README.md            # You're here :)
```

---

## 📈 Future Improvements

- ✅ Replace mock JSON with real database (e.g., MongoDB or PostgreSQL)
- 🔐 Add authentication (multi-user support)
- 📊 Add statistics dashboard (number of interviews, offers, etc.)
- 🌍 Deploy to cloud (e.g., Vercel for frontend + Render for backend)

---

## 🤝 Feedback & Contributions

This is a personal side project for learning and practice.  
If you have feedback, ideas, or want to contribute — feel free to fork the repo, open an issue, or reach out.

---

**Made with ❤️ by [@romaminus](https://github.com/romaminus)**
