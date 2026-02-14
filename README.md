# Flower NFT Marketplace with MetaMask

A modern NFT marketplace for flower photography built with React, Vite, and Web3 integration using MetaMask.

## Live Demo
🌐 [View Live Site](https://flowerpictures.vercel.app)

## Features
- **NFT Gallery**: Browse beautiful flower photography NFTs with ETH pricing
- **MetaMask Integration**: Connect your crypto wallet to purchase NFTs
- **Shopping Cart**: Add multiple NFTs to your cart and see the total price in ETH
- **Web3 Payments**: Pay with real cryptocurrency on Sepolia testnet
- **Blockchain Verification**: All transactions are verified on-chain
- **Responsive Design**: Works on desktop and mobile devices
- **Dark Mode Support**: Automatically adapts to your system's color scheme

## Web3 Features
- 🦊 **MetaMask Wallet Connection**: One-click wallet connection
- 🔗 **Sepolia Testnet**: Safe testing environment with test ETH
- 💰 **ETH Payments**: Real blockchain transactions (0.000001 ETH for testing)
- ✅ **Transaction Verification**: View transaction hashes on Etherscan
- 🔒 **Network Validation**: Automatic Sepolia network detection
- 🎨 **NFT Ownership**: NFTs removed from marketplace after purchase

## Tech Stack
- **React**: Frontend library
- **Vite**: Fast build tool and dev server
- **Web3**: MetaMask integration via `window.ethereum`
- **CSS3**: Modern styling with Flexbox and Grid
- **Sepolia Testnet**: Ethereum test network

## Prerequisites
- **MetaMask**: Install the [MetaMask browser extension](https://metamask.io/)
- **Sepolia ETH**: Get free test ETH from a [Sepolia faucet](https://sepoliafaucet.com/)

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open your browser to `http://localhost:5173`

4. Connect your MetaMask wallet and switch to Sepolia testnet

5. Add NFTs to cart and complete purchase with test ETH

## Configuration

### Update Recipient Wallet Address
Before deploying, update the recipient address in `src/App.jsx` (line ~108):
```javascript
const recipientAddress = '0xYourWalletAddressHere';
```

### Customize NFT Prices
Edit prices in `src/data.js`:
```javascript
{
  id: 1,
  name: "Golden Sunflower Bouquet",
  price: 0.01, // Price in ETH
  image: "/images/flower1.jpg"
}
```

### Add Your Own Images
1. Place image files in `public/images/` folder
2. Update the `image` path in `src/data.js`:
   ```javascript
   image: "/images/your-image.jpg"
   ```

## How It Works

1. **Connect Wallet**: Click "Connect Wallet" to link your MetaMask
2. **Browse NFTs**: View available flower photography NFTs with ETH prices
3. **Add to Cart**: Select NFTs you want to purchase
4. **Pay with ETH**: Click "Pay Now" to initiate blockchain transaction
5. **Confirm in MetaMask**: Approve the transaction (0.000001 ETH for testing)
6. **Ownership Transfer**: NFTs are removed from marketplace after successful payment

## Project Structure
- `src/App.jsx` - Main app with Web3 integration
- `src/components/Cart.jsx` - Shopping cart component
- `src/components/FlowerCard.jsx` - NFT card display
- `src/data.js` - NFT data (names, prices, images)
- `src/App.css` - Styling including wallet UI

## Testing
- Uses **Sepolia testnet** for safe testing
- Sends **0.000001 ETH** per transaction (test mode)
- Get free Sepolia ETH from faucets
- View transactions on [Sepolia Etherscan](https://sepolia.etherscan.io/)

## Deployment
Deploy to Vercel, Netlify, or any static hosting:
```bash
npm run build
```

The `dist/` folder contains your production build.

## Security Notes
- Frontend-only implementation (no backend or database)
- No private keys stored in code
- All transactions require user approval in MetaMask
- Test mode uses minimal ETH amounts

## Future Enhancements
- Smart contract integration for true NFT minting
- IPFS storage for NFT metadata
- Multiple network support (Mainnet, Polygon, etc.)
- NFT collection management
- Resale marketplace features

## License
MIT
