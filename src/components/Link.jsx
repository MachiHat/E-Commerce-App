import React from 'react'

export const Link = (props) => {
    const {label, route} = props.item;
    return (
        <li className="navlist-item"><a href={route} className="navlist-item-link">{label}</a></li>
    )
}
