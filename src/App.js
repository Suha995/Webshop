import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Register from "./components/Register";
import Login from "./components/Login";
import Nav from "./components/Nav";
function App() {
  const [registered, setRegistered] = useState(false);
  return (
    <div className="App">
      <Nav />
      <Router>
        <Switch>
          <Route path='/Register'>
            <Register />
          </Route>
          <Route path='/Login'>
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
