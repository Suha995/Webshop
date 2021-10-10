import React from 'react'
import './Products.scss';
import Product from './Product';

export default function Products({ products, handleAddToCart }) {
    return (
        <div className='products-container'>
            {products.map((product, index) => {
                return(
                    <Product product={product} key={index} handleAddToCart={handleAddToCart}/>
                )
            })}
        </div>
    )
}
