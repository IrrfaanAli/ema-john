import React from 'react';
import './Products.css'

const Products = (props) => {

    const {img, name,seller,ratings,price} = props.product
    const handleAddToCart =props.handleAddToCart;
    return (
        <div className='product'>
            <img src={img} alt="" />

            <div className="product-info">
            <h6>{name}</h6>
            <h6> Price :{price}</h6>
            <p> Seller : {seller}</p>
            <p> Ratting : {ratings}</p>
            </div>
            <button onClick={() =>handleAddToCart(props.product)} className='cart-btn'>Add to cart</button>
        </div>
    );
};

export default Products;