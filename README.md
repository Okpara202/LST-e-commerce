# 🛒 E-Commerce Landing Page – Learnable Standardization Test (LST)

This project is a responsive **e-commerce landing page** built as part of the Learnable Standardization Test (LST). The goal was to replicate a Figma design **exactly** and implement core features using modern web development tools and best practices.

## 🚀 Tech Stack

- **React** (with [Vite](https://vitejs.dev/)) – Fast build tool and dev server
- **TypeScript** – Type-safe JavaScript
- **CSS Modules** – Scoped and maintainable styles
- **Redux Toolkit** – State management
- **RTK Query** – Data fetching and caching
- **React Router DOM** – Client-side routing with `RouterProvider`

## 🔍 Features

- **Pixel-perfect** UI based on the provided Figma design
- **Responsive** layout for desktop and mobile
- **Featured Products** section:
  - Fetched from the [DummyJSON API](https://dummyjson.com/products) using RTK Query
  - Initial fetch limit: 8 products
  - **"Load More"** button to fetch more products on demand
- **Routing setup** using `RouterProvider` (preparing for future scalability)

## 🔧 Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/Okpara202/LST-e-commerce.git
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the development server**

```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) to view the landing page.

## 📦 API Reference

- **Data Source**: [DummyJSON](https://dummyjson.com/products)

### Fetch Strategy:

- Initially fetch 8 products using the `limit` parameter
- Load more on user interaction using the **Load More** button
- RTK Query handles caching, loading states, and data fetching

## 🎨 Design Reference

The UI was built to **exactly match** the provided Figma design, with attention to spacing, typography, and layout fidelity.

## 📌 Notes

- Although only the landing page is implemented, the project includes routing via `RouterProvider` for potential future pages.
- The codebase is structured for **scalability and maintainability**.
- Emphasis was placed on **clean code**, **component reusability**, and **performance**.

---

**Author:** Favour Okpara  
**Project:** Learnable Standardization Test (LST)
