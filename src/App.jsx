import { useState } from 'react'
import { INITIAL_FLOWERS } from './data'
import FlowerCard from './components/FlowerCard'
import Cart from './components/Cart'
import './App.css'

function App() {
  const [flowers, setFlowers] = useState(INITIAL_FLOWERS);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  // ========== WEB3 STATE ==========
  const [walletAddress, setWalletAddress] = useState(null);
  const [isConnecting, setIsConnecting] = useState(false);

  const addToCart = (flower) => {
    // Prevent adding the same item twice
    if (!cart.find(item => item.id === flower.id)) {
      setCart([...cart, flower]);
      setIsCartOpen(true); // Open cart when item is added
    }
  };

  // ========== WEB3 FUNCTIONS ==========
  
  // Connect to MetaMask wallet
  const connectWallet = async () => {
    // Check if MetaMask is installed
    if (typeof window.ethereum === 'undefined') {
      alert('MetaMask is not installed! Please install MetaMask to use this feature.');
      return;
    }

    setIsConnecting(true);
    try {
      // Request account access
      const accounts = await window.ethereum.request({ 
        method: 'eth_requestAccounts' 
      });
      
      if (accounts.length > 0) {
        setWalletAddress(accounts[0]);
        
        // Check if user is on Sepolia network
        await checkNetwork();
      }
    } catch (error) {
      console.error('Error connecting wallet:', error);
      alert('Failed to connect wallet: ' + error.message);
    } finally {
      setIsConnecting(false);
    }
  };

  // Check if user is on Sepolia network
  const checkNetwork = async () => {
    try {
      const chainId = await window.ethereum.request({ method: 'eth_chainId' });
      const sepoliaChainId = '0xaa36a7'; // Sepolia testnet
      
      if (chainId !== sepoliaChainId) {
        alert('Please switch to Sepolia testnet in MetaMask to continue!');
      }
    } catch (error) {
      console.error('Error checking network:', error);
    }
  };

  // Format wallet address for display (0x1234...abcd)
  const formatAddress = (address) => {
    if (!address) return '';
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  // Handle checkout with MetaMask payment
  const handleCheckout = async () => {
    // Check if wallet is connected
    if (!walletAddress) {
      alert('Please connect your wallet first!');
      return;
    }

    // Verify Sepolia network
    try {
      const chainId = await window.ethereum.request({ method: 'eth_chainId' });
      const sepoliaChainId = '0xaa36a7';
      
      if (chainId !== sepoliaChainId) {
        alert('Please switch to Sepolia testnet in MetaMask!');
        return;
      }
    } catch (error) {
      alert('Error checking network: ' + error.message);
      return;
    }

    // Send ETH transaction
    try {
      // Calculate total price for display only
      const totalEth = cart.reduce((total, item) => total + item.price, 0);
      
      // ALWAYS send 0.000001 ETH for testing (regardless of cart total)
      const weiValue = BigInt(1000000000000); // 0.000001 ETH = 1,000,000,000,000 wei
      const valueHex = '0x' + weiValue.toString(16);

      // REPLACE THIS WITH YOUR TEST WALLET ADDRESS
      const recipientAddress = '0x32EfAe774A73A4E4b835Bad888e52e291c34E9aC'; // ⚠️ PASTE YOUR ADDRESS HERE

      const transactionParameters = {
        from: walletAddress,
        to: recipientAddress,
        value: valueHex, // Fixed 0.000001 ETH for testing
      };

      // Send transaction
      const txHash = await window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [transactionParameters],
      });

      // Transaction successful!
      alert(`Transaction successful!\nDisplayed: ${totalEth.toFixed(4)} ETH\nActual sent: 0.000001 ETH (test mode)\nHash: ${txHash}\n\nYour NFTs are now owned by you!`);

      // Update ownership - remove purchased items from the website
      const cartIds = cart.map(item => item.id);
      const remainingFlowers = flowers.filter(flower => !cartIds.includes(flower.id));
      
      setFlowers(remainingFlowers);
      setCart([]); // Clear cart
      setIsCartOpen(false);

    } catch (error) {
      console.error('Transaction failed:', error);
      alert('Transaction failed: ' + error.message + '\n\nOwnership was NOT updated.');
      // Do NOT update ownership if transaction fails
    }
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1>Picture Gallery</h1>
        <p className="subtitle">Buy Beautiful Flower Photography</p>
        
        {/* ========== CONNECT WALLET BUTTON ========== */}
        <div className="wallet-section">
          {!walletAddress ? (
            <button 
              className="connect-wallet-btn" 
              onClick={connectWallet}
              disabled={isConnecting}
            >
              {isConnecting ? 'Connecting...' : '🦊 Connect Wallet'}
            </button>
          ) : (
            <div className="wallet-connected">
              <span className="wallet-icon">✅</span>
              <span className="wallet-address">{formatAddress(walletAddress)}</span>
            </div>
          )}
        </div>
        
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
