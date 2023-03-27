import React from 'react';
import './Products.css'

const Products = (props) => {

    const {img, name,seller,quantity,price} = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
        </div>
    );
};

export default Products;