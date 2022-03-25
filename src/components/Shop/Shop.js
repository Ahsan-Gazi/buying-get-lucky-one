import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Shoppingcart/Cart';

const Shop = () => {
    const[products,setProducts]=useState([])

    // const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
       
            <div className='shop-container'>
                <div className='products-container'>
                    {/* <h2>Product list</h2> */}
                    {
                        products.map(product=><Product 
                        key={product.id}
                        product={product}
                        >

                        </Product>)
                    }
                </div>
                <div className='selected-container'>
                    <Cart></Cart>
                    {/* <Cart cart={cart}></Cart> */}
                </div>
            </div>
        
    );
};

export default Shop;