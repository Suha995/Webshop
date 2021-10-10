import React,{ useState } from 'react';
import './Products.scss';
import {MdAddShoppingCart} from 'react-icons/md';
export default function Product({ product }) {


    console.log(product)
    // const addToCart = () => {

    // }
//    return (
//        <>
//        </>
//    )
    return (
        <div className='product' key={product.id}>
                        <div className='image'>
                        <img src={product.image.url} style={{width:'100%', height:'100%'}}/>
                        </div>
                        <div className='name-price'>
                            <p>{product.name}</p>
                            <p>{product.price.formatted_with_symbol}</p>
                        </div>
                        <div className='description'>
                            <p dangerouslySetInnerHTML={{__html:product.description}} />
                        </div>
                        <div className='shopping-cart'>
                        <button><MdAddShoppingCart size='2em'/></button>
                        </div>
                    </div>
    )
}
