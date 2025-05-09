# 🛍️ E-commerce Frontend

This is the frontend for an E-commerce web application built using **React**, **Vite**, **Tailwind CSS**, and **Bootstrap**. It connects to a backend REST API for product management, authentication, and user operations.

---

## 🌐 Live Demo

- **Frontend**: [Netlify Deployment Link](https://your-frontend-link.netlify.app)
- **Backend**: [Render Deployment Link](https://e-commerce-rest-api-1-7byv.onrender.com)

---

## 🚀 Features

- 🔐 User Signup/Login with JWT
- 🛒 View and manage products
- ✏️ Add, update, and delete products (admin only)
- 🧺 Add-to-cart functionality with a detailed cart page
- 📱 Responsive design using Tailwind and Bootstrap
- 🖼️ Dynamic product images

---

## 🛠️ Tech Stack

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Bootstrap](https://getbootstrap.com/)
- [Axios](https://axios-http.com/)

---

## 📦 Project Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd ecommerce-frontend


2. Install Dependencies
npm install

3. Set Up Environment Variables
Create a .env file in the root and add your backend API URL:
VITE_API_URL=http://localhost:3000/api

4. Run the App
npm run dev

🗂️ Folder Structure

ecommerce-frontend/
├── public/
│   └── images/
│       └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── CartModal.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   └── ProductCard.jsx
│   ├── context/
│   │   └── CartContext.jsx
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── CartPage.jsx
│   │   ├── CreateProduct.jsx
│   │   ├── Login.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── Products.jsx
│   │   └── SignUp.jsx
│   ├── styles/
│   │   ├── About.css
│   │   ├── CartModal.css
│   │   ├── Hero.css
│   │   ├── ProductDetail.css
│   │   └── App.css
│   ├── App.jsx
│   ├── config.js
│   ├── index.css
│   └── main.jsx
├── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
├── tailwind.config.js
└── vite.config.js


⚙️ Build for Production
npm run build
