import React, { useEffect, useState } from 'react';
import './Shop.css'
import Products  from '../Products/Products';

const Shop = () => {
   
     const [products,setProduct] = useState([]);
     const [cart,setCart] = useState([]);


     useEffect(()=>{
        
         fetch('products.json')
         .then(res => res.json())
         .then(data =>setProduct(data))


     },[]);

     const handleAddToCart =(product)=>{
        const newCart = [...cart,product];
        setCart(newCart);
     }

    return (
        <div className='shop-container'>
             <div className="products-container">
             {
                products.map(product => <Products 
                key = {product.id}
                product = {product}
                handleAddToCart ={handleAddToCart}
                ></Products>)
             }
             </div>
            <div className="cart-container">
               <h2>Cart summary</h2>
               <h3>Selected Items : {cart.length}</h3>
            </div>
        </div>
    );
};

export default Shop;