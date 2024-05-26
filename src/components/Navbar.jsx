import React from "react";
import { CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
  return (
    <nav>
      <p>SHOP</p>
      <div>
        <CiShoppingCart className="icon" />
        <span>0</span>
      </div>
    </nav>
  );
};

export default Navbar;
