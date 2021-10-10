import React from "react";
import './Nav.scss';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div className="Nav">
      <div className="left-side">
      <Link to='/'><i class="fas fa-store-alt"></i> WEBSHOP</Link>
      </div>
      <div className="right-side">
        <ul>
         <li><Link to='/'>Home</Link></li>
         <li><Link to='/register'> Register</Link></li>
         <li><Link to='/login'> Login</Link></li>
         <li><Link to='/shopping-cart'><i class="fas fa-cart-plus fa-2x"></i></Link></li>
        </ul>
      </div>
    </div>
  );
}
