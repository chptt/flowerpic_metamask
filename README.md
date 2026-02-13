# Picture Gallery - Flower Photography

A modern e-commerce frontend for buying flower photography pictures. Built with React and Vite.

## 🌐 Live Demo
[View Live Site](https://flowerpictures.vercel.app)

## 📋 Project Overview
This is a simple frontend application for buying pictures from a website where buyers can select multiple pictures. The portal displays different pictures with their prices alongside a buy button. When buyers click the "Buy" button, pictures are added to the shopping cart where the total price is displayed. When the "Pay" button is clicked, purchased pictures are removed from the website.

## ✨ Features
- **Picture Gallery**: Browse 12 beautiful flower photography images
- **Price Display**: Each picture shows its price in USD alongside a "Buy" button
- **Shopping Cart**: Dropdown cart in header with item count badge
- **Add to Cart**: Click "Buy" to add pictures to your shopping cart
- **Total Price**: Real-time calculation of total price in cart
- **Purchase Flow**: "Pay Now" button completes purchase and removes items from gallery
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Dark Mode Support**: Automatically adapts to system color scheme
- **No Persistence**: Resets on page refresh for easy testing

## 🛠️ Tech Stack
- **React 18** - Frontend library
- **Vite** - Build tool and dev server
- **CSS3** - Modern styling with Flexbox and Grid
- **JavaScript (ES6+)** - Core functionality

## 📦 Project Structure
```
picture-gallery/
├── public/
│   └── images/          # Flower photography images
├── src/
│   ├── components/
│   │   ├── Cart.jsx     # Shopping cart dropdown component
│   │   └── FlowerCard.jsx  # Picture card component
│   ├── App.jsx          # Main application component
│   ├── App.css          # Application styles
│   ├── data.js          # Picture data (name, price, image)
│   └── main.jsx         # Application entry point
└── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd picture-gallery
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open your browser to `http://localhost:5173`

### Build for Production
```bash
npm run build
```

## 🎯 Key Implementation Details

### No Backend Integration
- **Frontend only** - Pure React application
- **No API calls** - No fetch/axios requests
- **No database** - All data in `src/data.js`
- **No persistent storage** - No localStorage, sessionStorage, or cookies
- **State management** - React `useState` hooks only

### Testing
The application can be tested multiple times by simply refreshing the page, which resets all state to the initial configuration.

## 📝 Requirements Met
✅ Simple frontend for buying pictures  
✅ Multiple picture selection capability  
✅ Pictures displayed with prices and buy button  
✅ Shopping cart with total price display  
✅ Pay button functionality  
✅ Pictures removed from website after purchase  
✅ No persistent storage (resets on refresh)  
✅ No backend integration required  

## 🎨 Customization

To use your own images:
1. Place image files in `public/images/` folder
2. Update the `INITIAL_FLOWERS` array in `src/data.js`:
   ```javascript
   {
     id: 1,
     name: "Your Picture Name",
     price: 29.99,
     image: "/images/your-image.jpg"
   }
   ```

## 📄 License
This project is open source and available for educational purposes.

## 👤 Author
Developed as a frontend assessment project.
