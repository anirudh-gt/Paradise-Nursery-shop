import React from 'react';

export default function AboutUs() {
  return (
    <div className="about-us-container" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ color: '#2e7d32', fontSize: '2.5rem', marginBottom: '20px' }}>About Paradise Nursery</h2>
      <p style={{ color: '#455a64', fontSize: '1.2rem', lineHeight: '1.6' }}>
        Welcome to Paradise Nursery, where green meets serenity. We are dedicated to bridging the gap between urban spaces and nature by providing healthy, vibrant, and carefully nurtured plants right to your doorstep.
      </p>
      <p style={{ color: '#455a64', fontSize: '1.2rem', lineHeight: '1.6', marginTop: '15px' }}>
        Our mission is to cultivate a passion for nature by offering a seamless way to introduce plant life into your environment, enhancing productivity and creating peaceful sanctuaries.
      </p>
    </div>
  );
}