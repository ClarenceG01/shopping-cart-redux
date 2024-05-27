import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.products.cart);
  console.log(cart);
  return (
    <section className="cart-component">
      {cart.map((product) => (
        <article className="cart-card" key={product.id}>
          <div>
            <img src={product.image} alt="" />
          </div>
          <div>
            <p>{product.title}</p>
            <p>$:{product.price}</p>
          </div>
        </article>
      ))}
      ;
    </section>
  );
};

export default Cart;
