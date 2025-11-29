# Tasks App – Backend & Frontend Setup

A Tasks & Notes Management App built with **Node.js**, **Express**, **PostgreSQL**, and **React**.

---

## 📌 How to Create Database & Tables (PostgreSQL)

Run the following SQL commands:

```sql
CREATE DATABASE tasks_app;

CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255),
    full_name VARCHAR(255)
);

CREATE TABLE Tasks (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES Users(id),
    title VARCHAR(255),
    description TEXT,
    status VARCHAR(20),
    created_at TIMESTAMP DEFAULT NOW()
);

-- Add a fake user for authentication
INSERT INTO Users (id, email, full_name)
VALUES (1, 'test@example.com', 'Test User')
ON CONFLICT (id) DO NOTHING;

```

⚙️ How to Configure DB Connection (.env Sample)

Create a .env file inside the backend folder and update values accordingly:

PORT=5000

DB_HOST=localhost
DB_USER=postgres
DB_PASS=your_password
DB_NAME=tasks_app
DB_PORT=5432


🚀 How to Run Backend

cd backend
npm install
npm run dev

Backend runs at:

http://localhost:5000
