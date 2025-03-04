import React from 'react';
import './mint.css';

export default function MintPage() {
  return (
    <div className="product-page">
      {/* Product Header */}
      <div className="product-header">
        <h1>Mint Dog Chews</h1>
        <p className="product-tagline">Refreshing chews infused with natural mint</p>
      </div>

      {/* Product Content */}
      <div className="product-content">
        {/* Product Image Section */}
        <div className="product-image">
          <img src="/assets/img/mint-chew.jpg" alt="Mint Dog Chews" />
        </div>

        {/* Product Details Section */}
        <div className="product-details">
          <h2>Fresh & Healthy</h2>
          <p>
            Infused with natural mint, these chews not only provide a tasty treat but also
            help freshen breath and promote dental health for your beloved pet.
          </p>

          {/* Key Features */}
          <div className="key-features">
            <h3>Why Mint Dog Chews?</h3>
            <ul>
              <li>🌿 Natural mint for fresh breath</li>
              <li>🦷 Supports dental hygiene</li>
              <li>💚 Rich in antioxidants</li>
              <li>⏳ Long-lasting enjoyment</li>
              <li>🐾 Ideal for all dog breeds</li>
            </ul>
          </div>

          {/* Call to Action */}
          <div className="cta-section">
            <button className="cta-button">Add to Cart</button>
            <p className="cta-note">Free shipping</p>
          </div>
        </div>
      </div>
    </div>
  );
}
