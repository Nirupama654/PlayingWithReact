import React from 'react'
import { useState } from 'react'
import Product from '../Product/Product'
import productData from "../../Assets/Data/products.json"
import "./ProductList.css"

const ProductList = () => {
  const [productList,setProductList] = useState(productData);
  return (
    <div className='product-list'>
      {productList.map((item,index) => {
        return <Product item={item} key={index}/>
      })}
    </div>
  )
}

export default ProductList