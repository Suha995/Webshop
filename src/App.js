import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Home from "./components/Pages/Home";
import Register from "./components/Pages/Register";
import Login from "./components/Pages/Login";
import Nav from "./components/Navigation/Nav";
import Products from "./components/Products/Products";
import { commerce } from "./lib/commerce";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";

function App() {
  // const [registered, setRegistered] = useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };
  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve();
    setCart(cart);
  };
  const handleAddToCart = async (productId, quantity) => {//Add products to cart
    const response = await commerce.cart.add(productId, quantity); //response is object
    setCart(response.cart);
  }; // I don't understand that

  const handleUpdateCart = async (productId, quantity) => {
    const response = await commerce.cart.update(productId, { quantity });
    setCart(response.cart);
  }
  const handleRemoveFromCart = async (productId) => {
    const response = await commerce.cart.remove(productId);
    setCart(response.cart);
  }

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();
    setCart(response.cart);
  }
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(products);
  console.log(cart);

  return (
    <div className="App">
      <Router>
        <Nav numberOfItems={cart.total_items} />
        <Switch>
          <Route exact path="/">
            <Products products={products} handleAddToCart={handleAddToCart} />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/shopping-cart">
            <Cart cart={cart} handleUpdateCart={handleUpdateCart}
             handleRemoveFromCart={handleRemoveFromCart}
             handleEmptyCart={handleEmptyCart}/>
          </Route>
          <Route path="/checkout">
            <Checkout cart={cart} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
