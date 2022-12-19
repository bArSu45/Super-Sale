import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { CartAuthContext } from "../Context/CartAuthContext";
import style from "./Navbar.module.css";
// import logo from ""

export default function Navbar() {
    const value = useContext(CartAuthContext)
    const { cartData, isAuth, authName, ToggleAuth } = value

    const Links = [
        { path: "/products", page: "PRODUCTS" },
        { path: "/contact", page: "CONTACT" },
        { path: "/about", page: "ABOUT" },
        { path: "/faq", page: "FAQ" }
    ];
    return (
        <div id={style.Navbar}>
            <Link to="/">
                <img id={style.websiteLogo} src="https://th.bing.com/th/id/R.0beb67ed5d8508ce507864c7128362a7?rik=EsHJIHlB4Srdgw&riu=http%3a%2f%2fwww.logodesignteam.com%2fimages%2fportfolio-images%2fecommerce-websites-logo-design%2fecommerce-websites-logo-design20.jpg&ehk=nFpn6D%2fh2dHvnY8gxrAbezKBUpHmnUm5V46BROOG8Nk%3d&risl=&pid=ImgRaw&r=0" alt="webSiteIcon" />
            </Link>

            {Links.map((link) => (
                <NavLink className={({ isActive }) => (isActive ? style.active : style.default)} key={link.path} to={link.path}>
                    {link.page}
                </NavLink>
            ))}

            <Link className={style.cart} to="/shoppingcart">
                <i id={style.cart} className='fas fa-cart-plus'></i>
                {cartData.length}
            </Link>

            {isAuth
                ? <p onClick={ToggleAuth} id={style.loginIcon}>{authName}</p>
                : <Link id={style.loginIcon} to="/login">
                    <i className="fa-solid fa-user"></i>
                </Link>
            }
        </div >
    )
};

