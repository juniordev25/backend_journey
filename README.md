# Backend Fundamentals Suite

A collection of backend-focused JavaScript projects demonstrating REST API development, asynchronous programming, and algorithmic implementation.

---

## 🚀 Overview

This repository contains:

- RESTful API development using Node.js and Express
- Input validation and structured error handling
- Async/Await workflow control
- Linear regression implementation using gradient descent
- Frontend integration for model training visualization

The purpose of this project is to strengthen backend fundamentals and demonstrate understanding of HTTP architecture, asynchronous control flow, and optimization algorithms.

---

## 🛠 Technologies

- Node.js
- Express
- JavaScript (ES6+)
- REST APIs
- Async/Await
- HTML5
- CSS3

---

# 📂 Projects Included

## 1️⃣ Notes API

A RESTful API that allows users to:

- Create notes
- Retrieve notes
- Validate request payloads
- Receive proper HTTP status codes

### Endpoints

| Method | Route     | Description         |
|--------|-----------|--------------------|
| GET    | /health   | Server status check |
| POST   | /notes    | Create a new note  |
| GET    | /notes    | Retrieve all notes |

### Example Request

```json
POST /notes
{
  "text": "Study gradient descent"
}
