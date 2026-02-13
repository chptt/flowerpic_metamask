import React from 'react';

const FlowerCard = ({ flower, onAddToCart }) => {
  return (
    <div className="nft-card">
      <img src={flower.image} alt={flower.name} className="nft-image" />
      <div className="nft-info">
        <h3>{flower.name}</h3>
        <p className="price">${flower.price.toFixed(2)}</p>
        <button 
          className="add-to-cart-btn" 
          onClick={() => onAddToCart(flower)}
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default FlowerCard;
