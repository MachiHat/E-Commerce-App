import { BsCart } from "react-icons/bs"
import React from "react"
import { Link } from "react-router-dom"

export const Topnav = () => {
    const linkArray = [
        {label: "HOME", route: "/"},
        {label: "SHOP", route: "/shop"},
        {label: "CONTACT", route: "/contact"},
        {label: <React.Fragment><BsCart /></React.Fragment>, route: "/cart"}
    ];
    return (
        <nav>
            <h1 className="logo-font">MATIMOVEMENT</h1>
            <ul className="navlist">
                {linkArray.map((linkItem, index) => <Link className="navlist-item" to={linkItem.route} key={index}>{linkItem.label}</Link>)}
            </ul>
        </nav>
    );
};


