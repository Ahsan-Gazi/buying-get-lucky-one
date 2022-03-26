import React from 'react';
import './Product.css'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Product = (props) => {

    const {product, handleAddToCart} = props;

    const {id,name,img,price}=props.product;

    return (
        <div className='product'>
            <img  src={img} alt=''/>
            <div className='product-info'>
            <p className='product-id'>Product ID: {id}</p>
                <p className='product-name'>Product Name: {name}</p>
                <p className='product-price'>Product Price: {price}</p>
              

            </div>
            <button onClick={() => handleAddToCart(product)}  className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
               <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;