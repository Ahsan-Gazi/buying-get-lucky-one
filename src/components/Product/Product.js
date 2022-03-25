import React from 'react';
import './Product.css'

const Product = (props) => {
    const {id,name,img,price}=props.product;
    return (
        <div className='product'>
            <img  src={img} alt=''/>
            <div className='product-info'>
            <p className='product-id'>Product ID: {id}</p>
                <p className='product-name'>Product Name: {name}</p>
                <p className='product-price'>Product Price: {price}</p>
              

            </div>
           
        </div>
    );
};

export default Product;