import React from 'react';
import { Link } from 'react-router-dom';
import productsData from '../products.json'; // Import dữ liệu sản phẩm từ file JSON
import './ProductDetail.css';

function ProductDetail() {
  return (
    <div className="product-list-container">
      <h2>Danh sách sản phẩm</h2>
      {productsData.map(product => (
        <div key={product.id} className="product-detail">
          <div className="product-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product-info">
            <h3>{product.name}</h3>
            <p className="price">${product.price}</p>
            <Link to={`/${product.id}`} className="detail-button">
              Xem chi tiết
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductDetail;
