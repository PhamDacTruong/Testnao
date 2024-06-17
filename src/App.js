// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetailPage from './components/ProductDetailPage';
import ProductDetail from './components/ProductDetail'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductDetail />} />
        <Route path="/:productId" element={<ProductDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
