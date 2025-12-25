import React, { useEffect, useState } from "react";
import "./style.css";

const LoadMoreButton = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await res.json();

      if (result && result.products && result.products.length) {
        setProducts([...products, ...result.products]);
        setLoading(false);
      }
      console.log(products);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) {
      setDisableButton(true);
    }
  }, [products.length]);

  if (loading) {
    return <div>Data is fetching...</div>;
  }

  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products?.length
          ? products?.map((item, index) => (
              <div className="product" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button disabled={disableButton} onClick={() => setCount(count + 1)}>
          Load more products
        </button>
      </div>
      <div>{!!disableButton && <div>You Have reached limit</div>}</div>
    </div>
  );
};

export default LoadMoreButton;
