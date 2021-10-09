import React from "react";
import './Nav.scss';

export default function Nav() {
  return (
    <div className="Nav">
      <div className="left-side">MyBlog</div>
      <div className="right-side">
        <ul>
          <li>Home</li>
          <li>Register</li>
        </ul>
      </div>
    </div>
  );
}
