import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {

    let total = 0;
    let totalShipping = 0; 

     for(const product of cart ){
          total = total + product.price;
          totalShipping = totalShipping + product.shipping;
     }

     const tax = total*7/100;

      const grandTotal = total + totalShipping +tax;
    
    return (
        <div className='cart'>
              <h2>Cart summary</h2>
               <h3>Selected Items : {cart.length}</h3>
                <p>Total Price : {total} </p>
                <p>Total Shipping : {totalShipping}</p>
                <p>Tax: {tax.toFixed(2)} </p>
                <h6>Grand Total:{grandTotal.toFixed(2)}</h6>
               
        </div>
    );
};

export default Cart;