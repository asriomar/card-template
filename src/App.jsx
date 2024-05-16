// src/App.jsx
import React from 'react';
import Card from './components/Card';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Card
        title="Card 1"
        description="This is the first card."
        imageUrl="https://via.placeholder.com/300x200"
      />
      <Card
        title="Card 2"
        description="This is the second card."
        imageUrl="https://via.placeholder.com/300x200"
      />
      <Card
        title="Card 3"
        description="This is the third card."
        imageUrl="https://via.placeholder.com/300x200"
      />
    </div>
  );
};

export default App;
