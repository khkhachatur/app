import React from 'react';
import Orders from './Pages/Orders/Orders';
import HomePage from './Pages/HomePage/HomePage';
import MainPage from './Pages/MainPage/MainPage';
import FoodPage from './Pages/FoodPage/FoodPage';
import DrinksPage from './Pages/DrinksPage/DrinksPage';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="food" element={<FoodPage />} />
        <Route path="orders" element={<Orders />} />
        <Route path="drinks" element={<DrinksPage />} />
      </Routes> 
    </>
  );
}

export default App;
