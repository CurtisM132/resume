import React from 'react';

import Header from './features/header/Header';
import MainContent from './features/main-content/MainContent';

import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="body-container">
        <MainContent />
      </div>
    </div>
  );
};

export default App;
