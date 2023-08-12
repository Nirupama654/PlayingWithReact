import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import StarRating from "../Rating/Ratings";
import "./Product.css"

const Product = ({item}) => {
  return (
    <div className="product card">
      
        <img src={item.image} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{item.title}</h5>
          <p class="card-text">
            {item.description}
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
          <StarRating rating={item.rating.rate}/>
        </div>
     
    </div>
  );
};

export default Product;
