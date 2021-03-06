import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Shoppingcart/Cart';

const Shop = () => {
    const[products,setProducts]=useState([])
    const [cart, setCart] = useState([]);

    // const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    // useEffect( () =>{
    //     // const storedCart = getStoredCart();
    //     const savedCart = [];
    //     for(const id in storedCart){
    //         const addedProduct = products.find(product => product.id === id);
    //         if(addedProduct){
    //             const quantity = storedCart[id];
    //             addedProduct.quantity = quantity;
    //             savedCart.push(addedProduct);
    //         }
    //     }
    //     setCart(savedCart);
    // }, [products])

    // let newCart = [];
    const handleAddToCart = (product) =>{
        
    
        if(cart.length<4){
            const alreadyAdded=cart.find(cartt=>cartt.id===product.id);
            if(alreadyAdded)return;
            const newCart=[...cart,product]
            setCart(newCart)
        }
            // const newCart=[...cart,product]
            // const exist=cart.find(prod=>prod.id===product.id);
            // if(!exist && !newCart.length>4){
              
            //     setCart(newCart)
            // }
            // else{
            //     const rest=cart.filter(pro=>pro.id!==product.id);
            //     setCart(rest,exist);
            // }
          
            // setCart(newCart)
         
            

        
    }

    const handleForOne=()=>{
        const randomItem=[cart[Math.floor(Math.random()*cart.length)]];
        setCart(randomItem);
    }

    const removeSingleItem=(id)=>{
        const newCart=cart.filter((cart)=>{
            return cart.id!==id;
        });
        setCart(newCart);
    }

    const ChooseAgain=()=>{
        setCart([])
    }


    

    return (
       
            <div className='shop-container'>
                <div className='products-container'>
                    {/* <h2>Product list</h2> */}
                    {
                        products.map(product=><Product 
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                      
                        >

                        </Product>)
                    }
                </div>
                <div className='selected-container'>
                    <h4 className='selecteditem'>Selected Items</h4>
                    {/* <Cart></Cart> */}
                    <Cart cart={cart}   ChooseAgain={ChooseAgain}
                    handleForOne={handleForOne} removeSingleItem={removeSingleItem}>

                    </Cart>
                </div>
            </div>
        
    );
};

export default Shop;