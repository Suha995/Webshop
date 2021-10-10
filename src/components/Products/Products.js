import React from 'react'
import './Products.scss';
import Product from './Product';
const products = [
    {id: 1, name: 'Shoes', description:'Running shoes', price: '$5', image: 'https://media.istockphoto.com/photos/sport-shoes-on-isolated-white-background-picture-id956501428?k=6&m=956501428&s=612x612&w=0&h=cBcBHYySQGpV5kHPbcXUnpXrgqXrNs0s7cahHBCDsbA='},
    {id: 2, name: 'Macbook', description:'Apple macbook', price: '$10', image: 'https://9to5mac.com/wp-content/uploads/sites/6/2019/12/Buying-the-16-inch-MacBook-Pro-%E2%80%93-main-image.jpg?quality=82&strip=all'}

];
export default function Products() {
    return (
        <div className='products-container'>
            {products.map((product, index) => {
                return(
                    <Product product={product}/>
                )
            })}
        </div>
    )
}
