
const Link = (props) => {
    const {label, route} = props.item;
    return (
        <li className="navlist-item"><a href={route} className="navlist-item-link">{label}</a></li>
    )
}

export const Topnav = () => {
    const linkArray = [
        {label: "HOME", route: "/"},
        {label: "SHOP", route: "/shop"},
        {label: "CONTACT", route: "/contact"},
    ];
    return (
        <nav>
            <h1 className="logo-font">MATIMOVEMENT</h1>
            <ul className="navlist">
                {linkArray.map((linkItem, index) => <Link key={index} item={linkItem} />)}
            </ul>
        </nav>
    );
};


