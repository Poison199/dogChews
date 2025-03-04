import React from 'react';
import './strawberry.css';

export default function StrawberryPage() {
  return (
    <div className="product-page">
      {/* Product Header */}
      <div className="product-header">
        <h1>Strawberry Dog Chews</h1>
        <p className="product-tagline">Delicious strawberry flavor with a refreshing twist</p>
      </div>

      {/* Product Content */}
      <div className="product-content">
        {/* Product Image Section */}
        <div className="product-image">
          <img src="/assets/img/strawberry-chew.jpg" alt="Strawberry Dog Chews" />
        </div>

        {/* Product Details Section */}
        <div className="product-details">
          <h2>Sweet & Healthy</h2>
          <p>
            Infused with real strawberry flavor, these chews not only provide a yummy treat but also promote
            your dog's overall health with natural ingredients. A fruity experience your pet will love!
          </p>

          {/* Key Features */}
          <div className="key-features">
            <h3>Why Strawberry Dog Chews?</h3>
            <ul>
              <li>🍓 Real strawberry flavor dogs love</li>
              <li>💚 Packed with vitamins and antioxidants</li>
              <li>🦷 Supports healthy gums and teeth</li>
              <li>🐶 Perfect for all dog breeds</li>
              <li>⏳ Long-lasting chew for enjoyment</li>
            </ul>
          </div>

          {/* Call to Action */}
          <div className="cta-section">
            <button className="cta-button">Add to Cart</button>
            <p className="cta-note">Free shipping on orders over $25</p>
          </div>
        </div>
      </div>
    </div>
  );
}
