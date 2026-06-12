import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import AboutUs from './AboutUs';

export default function ProductList() {
  const [showCart, setShowCart] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const totalCartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const plantsData = [
    {
      category: "Air Purifying Plants",
      plants: [
        { name: "Snake Plant", cost: 15, image: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?q=80&w=400" },
        { name: "Spider Plant", cost: 12, image: "https://images.unsplash.com/photo-1512428813833-df702c7799b5?q=80&w=400" }
      ]
    },
    {
      category: "Medicinal Plants",
      plants: [
        { name: "Aloe Vera", cost: 18, image: "https://images.unsplash.com/photo-1596547610020-fbc3df7c7b8e?q=80&w=400" },
        { name: "Tulsi (Holy Basil)", cost: 10, image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=400" }
      ]
    }
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Navigation Navbar */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#2e7d32', padding: '15px 30px', color: 'white', alignItems: 'center' }}>
        <h3 style={{ margin: 0, cursor: 'pointer' }} onClick={() => { setShowCart(false); setShowAbout(false); }}>Paradise Nursery</h3>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <span style={{ cursor: 'pointer' }} onClick={() => { setShowAbout(true); setShowCart(false); }}>About Us</span>
          <span style={{ cursor: 'pointer' }} onClick={() => { setShowCart(false); setShowAbout(false); }}>Shop Plants</span>
          <button style={{ backgroundColor: '#1b5e20', border: 'none', color: 'white', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }} onClick={() => setShowCart(true)}>
            Cart ({totalCartCount})
          </button>
        </div>
      </nav>

      {/* Conditional Rendering Logic */}
      {showAbout ? (
        <AboutUs />
      ) : showCart ? (
        <CartItem onContinueShopping={() => setShowCart(false)} />
      ) : (
        <div style={{ padding: '30px' }}>
          {plantsData.map((section, idx) => (
            <div key={idx} style={{ marginBottom: '40px' }}>
              <h2 style={{ color: '#2e7d32', borderBottom: '2px solid #a5d6a7', paddingBottom: '10px' }}>{section.category}</h2>
              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginTop: '20px' }}>
                {section.plants.map((plant, pIdx) => {
                  const isInCart = cartItems.some(item => item.name === plant.name);
                  return (
                    <div key={pIdx} style={{ border: '1px solid #e0e0e0', borderRadius: '10px', width: '220px', padding: '15px', textAlign: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                      <img src={plant.image} alt={plant.name} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px' }} />
                      <h4 style={{ margin: '10px 0 5px 0' }}>{plant.name}</h4>
                      <p style={{ color: '#616161', fontWeight: 'bold' }}>${plant.cost}</p>
                      <button 
                        onClick={() => handleAddToCart(plant)}
                        disabled={isInCart}
                        style={{ width: '100%', backgroundColor: isInCart ? '#9e9e9e' : '#4caf50', color: 'white', border: 'none', padding: '10px', borderRadius: '5px', cursor: isInCart ? 'not-allowed' : 'pointer', fontWeight: 'bold' }}
                      >
                        {isInCart ? 'Added to Cart' : 'Add to Cart'}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}