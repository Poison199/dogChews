import React from 'react';
import './mango.css';

export default function MangoPage() {
  return (
    <div className="product-page">
      {/* Product Header */}
      <div className="product-header">
        <h1>Mango Dog Chews</h1>
        <p className="product-tagline">Tropical delight packed with mango goodness</p>
      </div>

      {/* Product Content */}
      <div className="product-content">
        {/* Product Image Section */}
        <div className="product-image">
          <img src="/assets/img/mango-chew.jpg" alt="Mango Dog Chews" />
        </div>

        {/* Product Details Section */}
        <div className="product-details">
          <h2>Delicious & Nutritious</h2>
          <p>
            Made with real mango, these chews offer a sweet and chewy treat rich in vitamins
            to support your dog's overall well-being. A perfect reward for your furry friend!
          </p>

          {/* Key Features */}
          <div className="key-features">
            <h3>Why Mango Dog Chews?</h3>
            <ul>
              <li>🥭 Naturally sweet mango flavor</li>
              <li>🦷 Supports dental health</li>
              <li>💪 Packed with essential vitamins</li>
              <li>⏳ Long-lasting chewing fun</li>
              <li>🐾 Great for all dog breeds</li>
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