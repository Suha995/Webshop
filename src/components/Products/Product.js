import React,{ useState } from 'react';
import './Products.scss';
import {MdAddShoppingCart} from 'react-icons/md';
export default function Product(props) {

    const addToCart = () => {

    }
    return (
        <div className='product' key={props.product.id}>
                        <div className='image'>
                        <img src={props.product.image} style={{width:'100%', height:'100%'}}/>
                        </div>
                        <div className='name-price'>
                            <p>{props.product.name}</p>
                            <p>{props.product.price}</p>
                        </div>
                        <div className='description'>
                            <p>{props.product.description}</p>
                        </div>
                        <div className='shopping-cart'>
                        <button onClick={addToCart}><MdAddShoppingCart size='2em'/></button>
                        </div>
                    </div>
    )
}
