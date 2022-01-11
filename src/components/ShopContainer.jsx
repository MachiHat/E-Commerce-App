import { ShopList } from "./ShopList";
import { Loader } from "./Loader";
import { useParams, Link } from "react-router-dom";
import { getAllDocs } from "../firebase/firebase";
import React, { useState, useEffect } from "react";

export const ShopContainer = () => {
  const [products, setProd] = useState([]); // ItemList products usestate

  const [loading, setLoading] = useState(false); // Loader usestate

  const categories = ["Hardware", "Weights", "Misc"];

  const { category } = useParams();

  useEffect(() => {
    setLoading(true);
    getAllDocs()
      .then((response) => {
        if (category) {
          setProd(response.filter((item) => item.category === category));
        } else {
          setProd(response);
        }
      })
      .finally(() => setLoading(false));
  }, [category]);

  return (
    <section>
      {loading === true ? (
        <Loader />
      ) : (
        <div>
          <ul className="filter-list">
            <li className="filter-item">
              <Link to={"/shop"}>All</Link>
            </li>
            {categories.map((cat) => (
              <li key={products.id} className="filter-item">
                <Link activeClassName="active" to={`/shop/${cat}`}>
                  {cat}
                </Link>
              </li>
            ))}
          </ul>
          <ShopList products={products} />
        </div>
      )}
    </section>
  );
};
