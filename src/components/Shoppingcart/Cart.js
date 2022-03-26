
import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDeleteLeft} from '@fortawesome/free-solid-svg-icons'


const Cart = (props) => {
    // const{name,img}=props.cart;
    // const{removeSingleItem}=props.id
    
  

    return (
        <div className='cart'>
            
            
            <div className='cart-second'>
            <div className='sideData'>
                {
                    props.cart.map(pd=>
                        
                    <div className='imgcart2' key={pd.id}>
                       <img className='imgcart' src={pd.img} alt=''/>
                           <h3>{pd.name}
                           <button onClick={()=>props.removeSingleItem(pd.id)}><FontAwesomeIcon icon={faDeleteLeft}></FontAwesomeIcon></button></h3>
                    </div>)
                }
           
           
            </div>
             <div>
             <button onClick={props.handleForOne}  className='cart-button'>
                <p >Choose one for me</p>
            </button>
            </div>
            
             <div>
               <button onClick={props.ChooseAgain} className='cart-button'>
                <p >Choose Again</p>
               </button>
             </div>
            </div>
          
        </div>
    );
};

export default Cart;