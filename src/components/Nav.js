import React from "react";
import './Nav.scss';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div className="Nav">
      <div className="left-side">MyBlog</div>
      <div className="right-side">
        <ul>
         <li><Link to='/'>Home</Link></li>
         <li><Link to='/register'> Register</Link></li>
         <li><Link to='/login'> Login</Link></li>
        </ul>
      </div>
    </div>
  );
}
