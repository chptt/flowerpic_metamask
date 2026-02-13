# Bloom & Petal Flower Shop

A clean and modern flower shop frontend built with React and Vite.

## Features
- **Flower Gallery**: Browse beautiful flower arrangements with images, names, and prices in USD.
- **Shopping Cart**: Add multiple flowers to your cart and see the total price.
- **Easy Checkout**: Complete your purchase with a simple checkout process.
- **Responsive Design**: Works on desktop and mobile devices.
- **Dark Mode Support**: Automatically adapts to your system's color scheme.

## Tech Stack
- **React**: Frontend library.
- **Vite**: Fast build tool and dev server.
- **CSS3**: Modern styling with Flexbox and Grid.

## Project Details
- This is a **frontend-only** flower shop.
- **No persistent storage** (localStorage, Database, or Backend) is used. All state is managed via React `useState`.
- **Ready for backend integration**: The current cart and checkout logic can be easily connected to a payment processor and order management system.

## Customizing Images
To use your own flower images:
1. Place your image files in the `public/images/` folder (e.g., `public/images/flower1.jpg`).
2. Update the `image` path in `src/data.js` to point to the file relative to the public root:
   ```javascript
   image: "/images/flower1.jpg"
   ```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open your browser to the URL shown in the terminal (usually `http://localhost:5173`).
