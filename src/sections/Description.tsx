import React from 'react';
import './description.css';

const Description: React.FC = () => {
  return (
    <div className="description-container">
      {/* White Box for Text */}
      <div className="text-container">
        <h1 className="title">Yak Cheese Chews</h1>
        <p className="intro">
          Yak cheese chews are natural, long-lasting dog treats traditionally made from yak and cow milk. 
          They offer numerous health benefits, including promoting dental health, providing essential nutrients, 
          and satisfying dogs' natural chewing instincts. To enhance their appeal and provide additional health 
          benefits, these chews are often infused with various flavors.
        </p>
        <div className="benefits">
          <h2>General Benefits of Yak Cheese Chews</h2>
          <ul className="benefit-list">
            <li><strong>Dental Health:</strong> Helps remove plaque and tartar, promoting clean teeth and healthy gums.</li>
            <li><strong>Digestibility:</strong> Highly digestible due to its natural composition, making it suitable for dogs with sensitive stomachs.</li>
            <li><strong>Nutrient-Rich:</strong> Contains essential nutrients like protein, calcium, and healthy fats, supporting overall health.</li>
            <li><strong>Long-Lasting:</strong> Provides prolonged engagement, reducing boredom and destructive chewing behaviors.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Description;
