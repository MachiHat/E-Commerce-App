import logo from '../img/mmlogo.png'
import { Link } from './Link';

export const Topnav = () => {
    const linkArray = [
        {label: "HOME", route: "/"},
        {label: "SHOP", route: "/shop"},
        {label: "CONTACT", route: "/contact"},
    ];
    return (
        <nav>
            <img src={logo} alt="small-logo" className="logo-small" />
            <ul className="navlist">
                {linkArray.map((linkItem, index) => <Link key={index} item={linkItem} />)}
            </ul>
        </nav>
    );
};


