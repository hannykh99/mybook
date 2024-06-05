
import React, { useEffect } from 'react';
import './Product.css';

function Product() {
    useEffect(() => {
        const previewContainer = document.querySelector('.products-preview');
        const previewBox = document.querySelectorAll('.products-preview .preview');
        const productContainer = document.querySelectorAll('.products-container .product');
    
        productContainer.forEach(product => {
          product.onclick = () => {
            const name = product.getAttribute('data-name');
            previewBox.forEach(preview => {
              preview.getAttribute('data-target') === name
                ? preview.classList.add('active')
                : preview.classList.remove('active');
            });
            previewContainer.style.display = 'flex';
            product.classList.add('active');
            previewBox.forEach(preview => {
              const target = preview.getAttribute('data-target');
              if (name === target) {
                preview.classList.add('active');
              }
            });
          };
        });
    
        previewBox.forEach(close => {
          close.querySelector('.fa-times').onclick = () => {
            close.classList.remove('active');
            previewContainer.style.display = 'none';
          };
        });
      }, []);




  const products = [
    {
      id: 'p-1',
      name: 'What is Ipsum?',
      price: '$50',
      rating: '⭐⭐⭐⭐⭐',
      image: '/Images/pp.png',
    },
    {
      id: 'p-2',
      name: 'Another Product',
      price: '$20',
      rating: '⭐⭐⭐',
      image: '/Images/bb.png',
    },
    // Add more product objects as needed
  ];

  return (
    <div className='container-1'>
      <h2 className='title-1'>Product</h2>
      <div className='row-1'>
        {products.map((product) => (
          <div className='product' data-name={product.id} key={product.id}>
            <img className='product-img' src={process.env.PUBLIC_URL + product.image} alt={product.name} />
            <h2 className='product-name'>{product.name}</h2>
            <div className='price'>{product.price}</div>
            <div className='star'>{product.rating}</div>
          </div>
        ))}

        <div className='products-preview'>
            <div className='preview ' data-target='p-1'>
                <i className='fas fa-times'></i>
                <img  className='preview-img' src={process.env.PUBLIC_URL + '/Images/pp.png'} alt='' />
                <h2 className='product-name-1'>What is Ipsum?</h2>
                <div className='stars'>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star-half-alt'></i>
                </div>
                
                <p className='description'>Lorem ipsum dolor sit amet consectetur</p>
                <div className='price-1'>$50</div>
                <button className='cart-btn'>Add to cart</button>
              </div>  

              <div className='preview ' data-target='p-2'>
                <i className='fas fa-times'></i>
                <img src={process.env.PUBLIC_URL + '/Images/pp.png'} alt='' />
                <h2 className='product-name-1'>What is Ipsum?</h2>
                <div className='stars'>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star-half-alt'></i>
                </div>
                
                <p className='description'>Lorem ipsum dolor sit amet consectetur</p>
                <div className='price-1'>$50</div>
                <button className='cart-btn'>
                    <a href='#'>Add to cart</a>
                </button>
              </div>  

              
        </div>
      </div>
    </div>
  );
}

export default Product;