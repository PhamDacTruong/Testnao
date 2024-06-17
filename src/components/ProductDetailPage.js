import React from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../products.json'; // Import dữ liệu sản phẩm từ file JSON
import './ProductDetailPage.css';

function ProductDetailPage() {
  const { productId } = useParams();
  const product = productsData.find(product => product.id === parseInt(productId));

  if (!product) {
    return <div>Không tìm thấy sản phẩm.</div>;
  }

  return (
    <div className="product-detail-container">
      <h2>Chi tiết sản phẩm</h2>
      <div className="product-detail">
        <div className="product-image">
          <img src={process.env.PUBLIC_URL + product.image} alt={product.name} />
        </div>
        <div className="product-info">
          <h3>{product.name}</h3>
          <p className="price">${product.price}</p>
          <div className="description">
            {product.description.map((item, index) => (
              typeof item === 'string' ? (
                <p key={index}>{item}</p>
              ) : (
                <div key={index}>
                  <h4>{item.title}</h4>
                  <ul>
                    {item.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              )
            ))}
          </div>
          <button className="back-button" onClick={() => window.history.back()}>
            Quay lại
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
