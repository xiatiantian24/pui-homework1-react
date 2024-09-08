import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar(){
  const navigate = useNavigate();
    return(
        <nav>
        <a class="logo-link" href="index.js"
          ><img src="./assets/logo/logo-01.svg" alt="logo" class="logo-img"
        /></a>
        <div class="links">
          <a href="index.js" class="current">Products</a>
          <a href="shoppingcart.js">Cart</a>
          <button onClick={() => navigate("/cart")}>
                Cart
            </button>
        </div>
      </nav>
    )
}