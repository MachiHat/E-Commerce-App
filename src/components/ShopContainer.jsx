import { ShopList } from "./ShopList";
import { Loader } from "./Loader";
import { useParams, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

export const ShopContainer = ({ itemList }) => {

  const [products, setProd] = useState([]); // ItemList products usestate

  const [loading, setLoading] = useState(true); // Loader usestate

  const categories = ["Hardware", "Weights", "Misc"];

  const { category } = useParams();

  // Itemlist filter useeffect and promise for categories
  useEffect(() => {
    setLoading(true);
    const getProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (category) {
          resolve(itemList.filter((item) => item.category === category));
        } else {
          resolve(itemList);
        }
      });
    });
    getProducts
      .then((response) => setProd(response))
      .then(() => setLoading(false));
  }, [category, itemList]);

  return (
    <section>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <ul className="filter-list">
            <li className="filter-item">
              <Link to={"/shop"}>All</Link>
            </li>
            {categories.map((cat) => (
              <li key={products.id} className="filter-item">
                <Link activeClassName="active" to={`/shop/${cat}`}>{cat}</Link>
              </li>
            ))}
          </ul>
          <ShopList products={products} />
        </div>
      )}
    </section>
  );
};
