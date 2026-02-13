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
Password Masking API

Securely masks incoming passwords and logs masked values only.

Features

Input validation

Password masking

Structured event logging

JSON responses

3️⃣ Linear Regression Model (Vanilla JS)

Implemented a linear regression model using gradient descent optimization.

Features

Mean Squared Error loss calculation

Gradient computation for weight and bias

Iterative parameter updates

Interactive training interface

Real-time loss tracking

Formula Used

Loss:

𝑀
𝑆
𝐸
=
1
𝑛
∑
(
𝑦
ℎ
𝑎
𝑡
−
𝑦
)
2
MSE=
n
1
	​

∑(y
hat
	​

−y)
2

Gradients:

∂
𝐿
∂
𝑤
=
2
𝑛
∑
(
𝑒
𝑟
𝑟
𝑜
𝑟
⋅
𝑥
)
∂w
∂L
	​

=
n
2
	​

∑(error⋅x)
∂
𝐿
∂
𝑏
=
2
𝑛
∑
(
𝑒
𝑟
𝑟
𝑜
𝑟
)
∂b
∂L
	​

=
n
2
	​

∑(error)
▶️ How to Run
Backend API
npm install
node server.js


Server runs on:

http://localhost:3000

Linear Regression Demo

Open:

index.html


Click Train Model to reduce loss and observe convergence.

🧠 Key Concepts Demonstrated

REST API architecture

HTTP request lifecycle

JSON body parsing

Input validation

Async/Await flow control

Gradient descent optimization

State management in frontend applications

📌 Future Improvements

Integrate persistent database (PostgreSQL / SQLite)

Add authentication (JWT)

Deploy API to Render or Railway

Add automated testing (Jest)
