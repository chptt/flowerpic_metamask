# 🌸 Flower NFT Marketplace with MetaMask

A modern NFT marketplace for flower photography with Web3 payment integration.

## 🌐 Live Demo
**[https://flowerpic-metamask.vercel.app/](https://flowerpic-metamask.vercel.app/)**

## ✨ Features
- 🦊 MetaMask wallet connection
- 💰 Pay with Ethereum (Sepolia testnet)
- 🎨 Beautiful flower photography NFTs
- 🛒 Shopping cart with ETH pricing
- 📱 Fully responsive design
- 🌙 Dark mode support

## 🚀 Quick Start

### Prerequisites
1. Install [MetaMask](https://metamask.io/) browser extension
2. Switch to Sepolia testnet in MetaMask
3. Get free test ETH from [Sepolia Faucet](https://sepoliafaucet.com/)

### Local Development
```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Open http://localhost:5173
```

## 🎯 How to Use

1. **Connect Wallet** - Click the "Connect Wallet" button
2. **Browse NFTs** - View flower photography with ETH prices
3. **Add to Cart** - Select NFTs you want to purchase
4. **Pay with ETH** - Complete transaction via MetaMask (0.000001 ETH for testing)
5. **Done!** - NFTs are removed from marketplace after purchase

## 🔧 Configuration

### Update Your Wallet Address
Edit `src/App.jsx` (line ~108):
```javascript
const recipientAddress = '0xYourWalletAddressHere';
```

### Customize NFT Prices
Edit `src/data.js`:
```javascript
{
  id: 1,
  name: "Golden Sunflower Bouquet",
  price: 0.01, // ETH
  image: "/images/flower1.jpg"
}
```

## 🛠️ Tech Stack
- React + Vite
- Web3 (MetaMask integration)
- Sepolia Testnet
- CSS3

## 📝 Notes
- Frontend-only (no backend or database)
- Test mode: sends 0.000001 ETH per transaction
- All transactions visible on [Sepolia Etherscan](https://sepolia.etherscan.io/)
- No smart contracts (direct wallet-to-wallet transfers)

## 📦 Deploy
```bash
npm run build
```
Deploy the `dist/` folder to Vercel, Netlify, or any static host.

## 📄 License
MIT
