# 📝 Note MERN App
---

## 📑 Table of Contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [Login Credentials](#login-credentials)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)

---

## 📖 Overview
**Note MERN** is a full-stack note-taking web application built with the **MERN stack** (MongoDB, Express.js, React.js, Node.js). It allows users to:

- ✍️ Create new notes
- 🛠️ Update existing notes
- 🗑️ Delete notes


### 🖼️ Screenshot

![Screenshot of the app](./bookstore.png)

### 🔗 Links

- Live Site: [View Project](https://bookstore-websites.netlify.app/)
- Repository: [GitHub Repo](https://github.com/Ramelzkie96/bookstore)
- **Admin Dashboard:** Access it directly by visiting [`/admin/dashboard`](https://bookstore-websites.netlify.app/admin/dashboard)

> 💡 To view the admin dashboard, either log in with the credentials below and manually navigate, or go directly to the `/admin/dashboard` URL. Take note no backend is within dashboard all are just frontend only.

---

## 🔐 Login Credentials

To log in and access user functionality like adding to cart and favorites, use the following hardcoded credentials:

- **Email:** `ramel@gmail.com`  
- **Password:** `Ramel12345`

> ⚠️ These credentials are for demo purposes only and stored using `localStorage`.

---

## 🔧 My Process

### 🛠️ Built With

- React
- Tailwind CSS
- React Router DOM
- Lucide React Icons
- LocalStorage (for authentication and state)

### 🚀 Features

- User login system using `localStorage`
- Conditional UI: users must log in to add to cart or mark favorites
- Dynamic cart with item quantity, per-item price, and total payment calculation
- Checkout form including user details and credit card fields
- Favorite books functionality (only available after login)
- Admin dashboard with total counts (users, books, categories)
- Book management (edit/delete)
- Category management (create/edit/delete)

### 🤓 What I Learned

- How to use `localStorage` for authentication and session management
- Conditional rendering based on user state
- State lifting for shared UI elements (e.g., cart count in header)
- React routing with protected pages and nested layouts
- Building a basic admin interface in the same frontend app
- Managing state for dynamic pricing in the cart with quantity updates

---

💡 Feel free to contribute or fork the project to enhance it with a backend or more features!
