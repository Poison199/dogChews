import React from 'react';
import './peanutButter.css';

export default function PeanutButterPage() {
  return (
    <div className="product-page">
      {/* Product Header */}
      <div className="product-header">
        <h1>Peanut Butter Dog Chews</h1>
        <p className="product-tagline">Irresistible peanut butter flavor for your dog</p>
      </div>

      {/* Product Content */}
      <div className="product-content">
        {/* Product Image Section */}
        <div className="product-image">
          <img src="/assets/img/peanut-butter-chew.jpg" alt="Peanut Butter Dog Chews" />
        </div>

        {/* Product Details Section */}
        <div className="product-details">
          <h2>Tasty & Nutritious</h2>
          <p>
            Made with real peanut butter, these chews offer a delicious treat while supporting
            your dog's health. Packed with protein and flavor, they’re perfect for rewarding your
            furry friend.
          </p>

          {/* Key Features */}
          <div className="key-features">
            <h3>Why Peanut Butter Dog Chews?</h3>
            <ul>
              <li>🥜 Real peanut butter flavor dogs love</li>
              <li>💪 Packed with protein for muscle health</li>
              <li>🦷 Supports healthy teeth and gums</li>
              <li>🐶 Suitable for all dog breeds</li>
              <li>⏳ Long-lasting chew for enjoyment</li>
            </ul>
          </div>

          {/* Call to Action */}
          <div className="cta-section">
            <button className="cta-button">Add to Cart</button>
            <p className="cta-note">Free shipping on all orders</p>
          </div>
        </div>
      </div>
    </div>
  );
}
