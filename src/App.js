import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Home from './components/Home';
import Register from "./components/Register";
import Login from "./components/Login";
import Nav from "./components/Nav";
import Products from './components/Products/Products'
function App() {
  const [registered, setRegistered] = useState(false);
  return (
    <div className="App">
      <Router>
      <Nav />
        <Switch>
        <Route exact path='/'>
            <Products />
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
