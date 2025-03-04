import React from 'react';
import './cranberry.css';

export default function CranberryPage() {
  return (
    <div className="product-page">
      {/* Product Header */}
      <div className="product-header">
        <h1>Cranberry Chews</h1>
        <p className="product-tagline">Natural treats bursting with cranberry goodness</p>
      </div>

      {/* Product Content */}
      <div className="product-content">
        {/* Product Image Section */}
        <div className="product-image">
          <img src="/assets/img/post-slide-1.jpg" alt="Cranberry Chews" />
        </div>

        {/* Product Details Section */}
        <div className="product-details">
          <h2>Irresistible & Nutritious</h2>
          <p>
            Crafted with real cranberries, these chews combine tangy flavor with powerful antioxidants 
            to support your dog's health. Perfect for dogs who love a tasty, long-lasting treat!
          </p>

          {/* Key Features */}
          <div className="key-features">
            <h3>Why Cranberry Chews?</h3>
            <ul>
              <li>🍒 Natural cranberry flavor dogs adore</li>
              <li>🦷 Reduces plaque and tartar buildup</li>
              <li>🌿 Rich in antioxidants and vitamins</li>
              <li>⏳ Long-lasting enjoyment</li>
              <li>🐾 Suitable for all breeds</li>
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
