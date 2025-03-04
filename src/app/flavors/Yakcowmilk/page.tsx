import React from 'react';
import './yakcowmilk.css';

export default function YakCowMilkPage() {
  return (
    <div className="product-page">
      {/* Product Header */}
      <div className="product-header">
        <h1>Yak Cow Milk Dog Chews</h1>
        <p className="product-tagline">A creamy and rich treat made from yak cow milk</p>
      </div>

      {/* Product Content */}
      <div className="product-content">
        {/* Product Image Section */}
        <div className="product-image">
          <img src="/assets/img/yakcowmilk-chew.jpg" alt="Yak Cow Milk Dog Chews" />
        </div>

        {/* Product Details Section */}
        <div className="product-details">
          <h2>Rich & Nutritious</h2>
          <p>
            Made from pure yak cow milk, these chews are not only delicious but also packed with
            protein and nutrients, providing your dog with a healthy snack that promotes strong teeth
            and bones.
          </p>

          {/* Key Features */}
          <div className="key-features">
            <h3>Why Yak Cow Milk Dog Chews?</h3>
            <ul>
              <li>🥛 Made from pure yak cow milk</li>
              <li>💪 Packed with protein and nutrients</li>
              <li>🦷 Supports strong teeth and bones</li>
              <li>⏳ Long-lasting chew for enjoyment</li>
              <li>🐕 Ideal for dogs of all sizes</li>
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
