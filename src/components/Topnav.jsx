import { BsCartFill } from "react-icons/bs";
import React from "react";
import { NavLink } from "react-router-dom";
import CartCounter from "./CartCounter";

export const Topnav = () => { // TOPNAV CRAFTED VIA ARRAY MAP METHOD
  const linkArray = [
    { label: "HOME", route: "/" },
    { label: "SHOP", route: "/shop" },
    { label: "SERVER", route: "/server" },
    {
      label: (
        <React.Fragment>
          <BsCartFill />
          <CartCounter />
        </React.Fragment>
      ),
      route: "/cart",
    },
  ];
  return (
    <nav>
      <h1 className="logo-font">MATIMOVEMENT</h1>
      <ul className="navlist">
        {linkArray.map((linkItem, index) => (
          <NavLink
            className="navlist-item"
            activeClassName="active"
            to={linkItem.route}
            key={index}
          >
            {linkItem.label}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};
