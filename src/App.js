import React from 'react';

import Header from "./features/header/Header";
import Sidebar from "./features/sidebar/Sidebar";
import MainContent from "./features/main-content/MainContent";

import './App.css';


const App = () => (
  <div className={"page"}>
    <Header />
    <div className={"flexRow"}>
      <Sidebar />
      <MainContent />
    </div>
  </div>
);

export default App;
