import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

export default function CartItem({ onContinueShopping }) {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Computes grand overall total dollar amount
  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + (item.cost * item.quantity), 0);
  };

  // Computes subtotal configuration per individual item line
  const calculateTotalCost = (item) => {
    return item.cost * item.quantity;
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (name) => {
    dispatch(removeItem(name));
  };

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', color: '#2e7d32' }}>Your Shopping Cart</h2>
      <h3 style={{ textAlign: 'center', margin: '20px 0', color: '#424242' }}>Total Amount: ${calculateTotalAmount()}</h3>
      
      {cartItems.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#757575', fontSize: '1.2rem' }}>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #e0e0e0', padding: '15px 0', justifyContent: 'space-between' }}>
              <img src={item.image} alt={item.name} style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '8px' }} />
              <div style={{ flex: 1, marginLeft: '20px' }}>
                <h4 style={{ margin: '0 0 5px 0' }}>{item.name}</h4>
                <p style={{ margin: 0, color: '#616161' }}>Unit Price: ${item.cost}</p>
                <p style={{ margin: '5px 0 0 0', fontWeight: 'bold', color: '#2e7d32' }}>Subtotal: ${calculateTotalCost(item)}</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <button onClick={() => handleDecrement(item)} style={{ width: '30px', height: '30px', cursor: 'pointer', fontWeight: 'bold' }}>-</button>
                <span style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>{item.quantity}</span>
                <button onClick={() => handleIncrement(item)} style={{ width: '30px', height: '30px', cursor: 'pointer', fontWeight: 'bold' }}>+</button>
              </div>
              <button 
                onClick={() => handleRemove(item.name)} 
                style={{ marginLeft: '20px', backgroundColor: '#d32f2f', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '5px', cursor: 'pointer' }}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}

      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '30px' }}>
        <button onClick={onContinueShopping} style={{ border: '2px solid #4caf50', backgroundColor: 'white', color: '#4caf50', padding: '12px 25px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>
          Continue Shopping
        </button>
        <button onClick={() => alert('Checkout implementation step coming soon!')} style={{ backgroundColor: '#4caf50', color: 'white', border: 'none', padding: '12px 25px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>
          Checkout
        </button>
      </div>
    </div>
  );
}