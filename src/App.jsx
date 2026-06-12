import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  return (
    <div className="app-container">
      {!showProductList ? (
        <div className="landing-page">
          <h1 className="landing-title">Paradise Nursery</h1>
          <p className="landing-subtitle">Where Green Meets Serenity</p>
          <button 
            className="get-started-btn" 
            onClick={() => setShowProductList(true)}
          >
            Get Started
          </button>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
}

export default App;