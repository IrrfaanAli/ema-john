import React, { useEffect, useState } from 'react';
import './Shop.css'
import Products  from '../Products/Products';

const Shop = () => {
   
     const [products,setProduct] = useState([]);

     useEffect(()=>{
        
         fetch('products.json')
         .then(res => res.json())
         .then(data =>setProduct(data))


     },[]);

    return (
        <div className='shop-container'>
             <div className="products-container">
             {
                products.map(product => <Products 
                key = {product.id}
                product = {product}
                ></Products>)
             }
             </div>
            <div className="cart-container">
               <h2>Cart summary</h2>
            </div>
        </div>
    );
};

export default Shop;