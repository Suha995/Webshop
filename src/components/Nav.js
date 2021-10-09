import React from "react";
import './Nav.scss';
import { BrowserRouter as Router, Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div className="Nav">
      <div className="left-side">MyBlog</div>
      <div className="right-side">
        <ul>
         <Router>
         <Link to='/'><li>Home</li></Link>
         <Link to='/Register'> <li>Register</li></Link>
         </Router>
        </ul>
      </div>
    </div>
  );
}
