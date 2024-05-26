import React, { useEffect, useState } from "react";
import axios from "axios";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    await axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <section className="shop">
      {products.map((product) => (
        <article className="card" key={product.id}>
          <img src={product.image} alt="" />
          <div className="details-div">
            <div className="title-price">
              <p>{product.title}</p>
              <p>{product.price}</p>
            </div>
            <button>Add to cart</button>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Shop;
