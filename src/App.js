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
  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  }; // I don't understand that

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
            <Cart cart={cart} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
