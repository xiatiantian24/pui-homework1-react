import React from "react";
import { Link } from 'react-router-dom';

export default function Navbar(){
    return(
        <nav>
        <a class="logo-link" href="/"
          ><img src="./assets/logo/logo-01.svg" alt="logo" class="logo-img"
        /></a>
        <div class="links">
          <Link to="/" class="current">Products</Link>
          <Link to="/cart">Cart</Link>
        </div>
      </nav>
    )
}