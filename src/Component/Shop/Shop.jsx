import React, { useEffect, useState } from 'react';
import './Shop.css'
import Products  from '../Products/Products';
import Cart from '../Cart/Cart';
import {addToDb,getShoppingCart} from '../../utilities/fakedb.js'

const Shop = () => {
   
     const [products,setProduct] = useState([]);
     const [cart,setCart] = useState([]);


     useEffect(()=>{
        
         fetch('products.json')
         .then(res => res.json())
         .then(data =>setProduct(data))


     },[]);

     useEffect(()=>{
        const storedCart = getShoppingCart();
        const saveCart = []
         for (const id in storedCart){
            const saveProduct = products.find(product => product.id === id);
            
            if(saveProduct){
            const quantity = storedCart[id];
            saveProduct.quantity = quantity;

            saveCart.push(saveProduct);

        }
         }

         setCart(saveCart);

     },[products])

     const handleAddToCart =(product)=>{
        let newCart = [];

        const exists = cart.find(pd =>pd.id === product.id);

        if (!exists){
            product.quantity = 1;
            newCart =[...cart,product]
        }
        else{
            exists.quantity = exists.quantity + 1 ;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart =[...remaining ,exists]
        }




        
        setCart(newCart);
        addToDb(product.id);
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
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;