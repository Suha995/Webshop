import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Home from './components/Pages/Home';
import Register from "./components/Pages/Register";
import Login from "./components/Pages/Login";
import Nav from "./components/Navigation/Nav";
import Products from './components/Products/Products';
import { commerce } from './lib/commerce';

function App() {
  // const [registered, setRegistered] = useState(false);
  const [ products, setProducts ] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  }
  useEffect(() => {
    fetchProducts();
  }, [])
  console.log(products);
  return (
    <div className="App">
      <Router>
      <Nav />
        <Switch>
        <Route exact path='/'>
            <Products products={products}/>
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
