import React from "react";
import './Nav.scss';
import { Link } from 'react-router-dom';
import {MdAddShoppingCart} from 'react-icons/md';
import { FcShop } from 'react-icons/fc';

export default function Nav({ numberOfItems }) {
  return (
    <div className="Nav">
      <div className="left-side">
      <FcShop size='2em' style={{verticalAlign: 'bottom'}}/>
      <Link to='/'>WEBSHOP</Link>
      </div>
      <div className="right-side">
        <ul>
         <li><Link to='/'>Home</Link></li>
         <li><Link to='/register'> Register</Link></li>
         <li><Link to='/login'> Login</Link></li>
         <li><Link to='/shopping-cart'><MdAddShoppingCart size='2em' style={{verticalAlign: 'bottom'}}/><span style={{fontWeight: 'bold'}}>{numberOfItems}</span></Link></li>
        </ul>
      </div>
    </div>
  );
}
