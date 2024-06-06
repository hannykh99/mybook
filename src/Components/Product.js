
import React, { useState } from 'react';
import './Product.css';

function Product() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 'p-1',
      name: 'What is Ipsum?',
      price: '$50',
      rating: '⭐⭐⭐⭐⭐',
      image: '/Images/cc.png',
      Authors: 'Author 1, Author 2',
      Date : '2022-01-01',
      description: 'Lorem ipsum dolor sit amet consectetur',
    },
    {
      id: 'p-2',
      name: 'Another Product',
      price: '$20',
      rating: '⭐⭐⭐⭐⭐',
      image: '/Images/bb.png',
      Authors: 'Author 1, Author 2',
      Date : '2022-01-01',
      description: 'Lorem ipsum dolor sit amet consectetur',
    },
    {
      id: 'p-3',
      name: 'What is Ipsum?',
      price: '$50',
      rating: '⭐⭐⭐⭐⭐',
      image: '/Images/cc.png',
      Authors: 'Author 1, Author 2',
      Date : '2022-01-01',
      description: 'Lorem ipsum dolor sit amet consectetur',
    },
    {
      id: 'p-4',
      name: 'Another Product',
      price: '$20',
      rating: '⭐⭐⭐⭐⭐',
      image: '/Images/bb.png',
      Authors: 'Author 1, Author 2',
      Date : '2022-01-01',
      description: 'Lorem ipsum dolor sit amet consectetur',
    },
    {
      id: 'p-5',
      name: 'What is Ipsum?',
      price: '$50',
      rating: '⭐⭐⭐⭐⭐',
      image: '/Images/cc.png',
      Authors: 'Author 1, Author 2',
      Date : '2022-01-01',
      description: 'Lorem ipsum dolor sit amet consectetur',
    },
    {
      id: 'p-6',
      name: 'Another Product',
      price: '$20',
      rating: '⭐⭐⭐⭐⭐',
      image: '/Images/bb.png',
      Authors: 'Author 1, Author 2',
      Date : '2022-01-01',
      description: 'Lorem ipsum dolor sit amet consectetur',
    },
    {
      id: 'p-7',
      name: 'What is Ipsum?',
      price: '$50',
      rating: '⭐⭐⭐⭐⭐',
      image: '/Images/cc.png',
      Authors: 'Author 1, Author 2',
      Date : '2022-01-01',
      description: 'Lorem ipsum dolor sit amet consectetur',
    },
    {
      id: 'p-8',
      name: 'Another Product',
      price: '$20',
      rating: '⭐⭐⭐⭐⭐',
      image: '/Images/cc.png',
      Authors: 'Author 1, Author 2',
      Date : '2022-01-01',
      description: 'Lorem ipsum dolor sit amet consectetur',
    },
    {
      id: 'p-9',
      name: 'What is Ipsum?',
      price: '$50',
      rating: '⭐⭐⭐⭐⭐',
      image: '/Images/cc.png',
      Authors: 'Author 1, Author 2',
      Date : '2022-01-01',
      description: 'Lorem ipsum dolor sit amet consectetur',
    },
    {
      id: 'p-10',
      name: 'Another Product',
      price: '$20',
      rating: '⭐⭐⭐⭐⭐',
      image: '/Images/bb.png',
      Authors: 'Author 1, Author 2',
      Date : '2022-01-01',
      description: 'Lorem ipsum dolor sit amet consectetur',
    },
    // Add more product objects as needed
  ];

  const openQuickView = (productId) => {
    const selectedProduct = products.find((product) => product.id === productId);
    setSelectedProduct(selectedProduct);
  };

  const closeQuickView = () => {
    setSelectedProduct(null);
  };

  return (
    <div className='container-1'>
      <h2 className='title-1'>Best Seller</h2>
      <div className='row-1'>
        {products.map((product) => (
          <div className='product' data-id={product.id} key={product.id}>
            <img
              className='product-img'
              src={process.env.PUBLIC_URL + product.image}
              alt={product.name}
            />
            <h2 className='product-name'>{product.name}</h2>
            <div className='price'>{product.price}</div>
            <div className='star'>{product.rating}</div>
            <button className='quick-view-btn' onClick={() => openQuickView(product.id)}>
              Quick View
            </button>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className='quick-view-popup'>
          <div className='quick-view-content'>
            <i className='fas fa-times' onClick={closeQuickView}></i>
            <img
              className='product-img'
              src={process.env.PUBLIC_URL + selectedProduct.image}
              alt={selectedProduct.name}
            />
            <h2 className='product-name'>{selectedProduct.name}</h2>
            <div className='price'>{selectedProduct.price}</div>
            <div className='star'>{selectedProduct.rating}</div>
            <div className='Authors'>{selectedProduct.Authors}</div>
            <div className='Date'>{selectedProduct.Date}</div>
            <p className='description'>{selectedProduct.description}</p>
            <a href='#'className='add-to-cart-btn'> Add to cart</a>
          </div>
        </div>
      )}
    </div>
  );
}


export default Product;