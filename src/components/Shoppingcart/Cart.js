import React from 'react';
import './Cart.css'

const Cart = () => {
    return (
        <div className='cart'>
            <div className='cart-second'>
            <div>
            <button  className='cart-button'>
                <p >Choose one for me</p>
            </button>
            
            </div>
            
            <div>
            <button  className='cart-button'>
                <p >Choose Again</p>
            </button>
            </div>
            </div>
          
        </div>
    );
};

export default Cart;