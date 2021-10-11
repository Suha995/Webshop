import React, { useState, useEffect } from "react";
import "./Cart.scss";

const Cart = ({ cart }) => {
  // const [ isEmpty, setIsEmpty ] = useState(true);
  //   const isEmpty = (!cart.line_items.length); //every value other than 0 is truthy

  //   useEffect( () => {
  //       setIsEmpty(cart.total_items === 0)
  //   }, [])

  const FilledCart = () => {
    return (
      <>
        <div className="cart-items-container">
          {cart.line_items.map((item) => {
            return (
              <div className="cart-item" key={item.id}>
                <div className="image">
                  <img
                    src={item.image.url}
                    style={{ width: "100%", height: "100%" }}
                    alt="product-image"
                  />
                </div>
                <div className="name-price">
                  <p>{item.name}</p>
                  <p>{item.price.formatted_with_symbol}</p>
                </div>
                <div className="quantity">
                  <button>-</button>
                  <p>{item.quantity}</p>
                  <button>+</button>
                </div>
                <button>Remove</button>
              </div>
            );
          })}
        </div>
        <div>
          <p>{cart.subtotal.formatted_with_symbol}</p>
          <button>Empty Cart</button>
          <button>Checkout</button>
        </div>
      </>
    );
  };

  if (!cart.line_items) return "Loading......";
  return (
    <div className='shopping-cart'>
      <h2>Shopping Cart</h2>
      {!cart.line_items.length ? (
        <p>You have no products in your Shopping Cart</p>
      ) : (
        <FilledCart />
      )}
    </div>
  );
};
export default Cart;
