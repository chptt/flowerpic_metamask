import { useState } from 'react'
import { INITIAL_FLOWERS } from './data'
import FlowerCard from './components/FlowerCard'
import Cart from './components/Cart'
import './App.css'

function App() {
  const [flowers, setFlowers] = useState(INITIAL_FLOWERS);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (flower) => {
    // Prevent adding the same item twice
    if (!cart.find(item => item.id === flower.id)) {
      setCart([...cart, flower]);
      setIsCartOpen(true); // Open cart when item is added
    }
  };

  const handleCheckout = () => {
    // Remove purchased items from the website
    const cartIds = cart.map(item => item.id);
    const remainingFlowers = flowers.filter(flower => !cartIds.includes(flower.id));
    
    setFlowers(remainingFlowers);
    setCart([]); // Reset cart
    setIsCartOpen(false);
    alert('Thank you for your purchase! The items have been removed from the store.');
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1>Picture Gallery</h1>
        <p className="subtitle">Buy Beautiful Flower Photography</p>
        
        <div className="cart-icon-container">
          <button 
            className="cart-icon-btn" 
            onClick={() => setIsCartOpen(!isCartOpen)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1"/>
              <circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
            {cart.length > 0 && <span className="cart-badge">{cart.length}</span>}
          </button>
          
          {isCartOpen && (
            <div className="cart-dropdown">
              <Cart 
                cartItems={cart} 
                onCheckout={handleCheckout}
                onClose={() => setIsCartOpen(false)}
              />
            </div>
          )}
        </div>
      </header>

      <main className="main-content">
        <section className="nft-grid-section">
          <h2>Available Pictures</h2>
          <div className="nft-grid">
            {flowers.map(flower => (
              <FlowerCard 
                key={flower.id} 
                flower={flower} 
                onAddToCart={addToCart}
              />
            ))}
          </div>
        </section>
      </main>
      
      <footer className="footer">
        <p>Picture Gallery © 2026 | Premium Flower Photography</p>
      </footer>
    </div>
  )
}

export default App
