import React from 'react';
import Card from '../Components/Card.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


export default function Content() {
  return (
    <div className="container">
       <div className="CardName"	>Best Seller</div>
      <div className="row">
        <div className='col-md-3 col-lg-3 col-sm-12'>
          <Card
            title="What  Ipsum?"
            images="../Images/pp.png"
            starRating={5}
            newPrice="9"
            dollar="$"
            alt="rice"
          />
        </div>
        <div className='col-md-3 col-lg-3 col-sm-12'>
          <Card
            title="What is Ipsum?"
            images="../Images/pp.png"
            starRating={5}
            newPrice="50"
            dollar="$"
            alt="rice"
          />
        </div>
        <div className='col-md-3 col-lg-3 col-sm-12'>
          <Card
            title="What is Ipsum?"
            images="../Images/pp.png"
            starRating={5}
            newPrice="70"
            dollar="$"
            alt="rice"
          />
        </div>
        <div className='col-md-3 col-lg-3   col-sm-12'>
          <Card
            title="What Ipsum?"
            images="../Images/pp.png"
            starRating={5}
            newPrice="50"
            dollar="$"
            alt="rice"
          />
        </div>
        {/* Additional products */}
        <div className='col-md-3 col-lg-3 col-sm-12'>
          <Card
            title="Product 5"
            images="../Images/bb.png"
            starRating={4}
            newPrice="25"
            dollar="$"
            alt="rice"
          />
        </div>
        <div className='col-md-3 col-lg-3 col-sm-12'>
          <Card
            title="Product 6"
            images="../Images/bb.png"
            starRating={3}
            newPrice="15"
            dollar="$"
            alt="rice"
          />
        </div>
        <div className='col-md-3 col-lg-3 col-sm-12'>
          <Card
            title="Product 7"
            images="../Images/bb.png"
            starRating={5}
            newPrice="35"
            dollar="$"
            alt="rice"
          />
        </div>
        <div className='col-md-3 col-lg-3 col-sm-12'>
          <Card
            title="Product 8"
            images="../Images/cc.png"
            starRating={4}
            newPrice="20"
            dollar="$"
            alt="rice"
          />
        </div>
      </div>
    </div>
  );
}