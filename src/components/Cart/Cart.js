
import "./Cart.scss";
import { Link } from "react-router-dom";


const Cart = ({
  cart,
  handleUpdateCart,
  handleRemoveFromCart,
  handleEmptyCart,
}) => {
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
                    alt={item.name}
                  />
                </div>

                <div className="name-price">
                  <p>{item.name}</p>
                  <p>{item.price.formatted_with_symbol}</p>
                </div>
                <div className="price-quantity">
                  <div className="quantity">
                    <button
                      onClick={() =>
                        handleUpdateCart(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <p>{item.quantity}</p>
                    <button
                      onClick={() =>
                        handleUpdateCart(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => handleRemoveFromCart(item.id)}
                    className="remove"
                  >
                    remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="total-price">
          <p>{`Total-Price: ${cart.subtotal.formatted_with_symbol}`}</p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button onClick={handleEmptyCart}>Empty Cart</button>
              <Link to="/checkout"><button style={{ color:'white', backgroundColor:'purple', padding:'10px'}}>Checkout</button></Link>
            
          </div>
        </div>
      </>
    );
  };

  if (!cart.line_items) return "Loading......";
  return (
    <div className="shopping-cart">
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
