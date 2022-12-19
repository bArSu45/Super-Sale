import { Link } from 'react-router-dom'
import style from './Footer.module.css'

export default function Footer() {

    const leftFooter = [
        { iconClass: "fas fa-map-marker-alt", details: "Mumbai, Maharashtra" },
        { iconClass: "fa-solid fa-phone", details: "+91 1234567890" },
        { iconClass: "fa-solid fa-envelope", details: "support@eshopping.com" }
    ]

    const socialIcon = [
        { iconClass: "fa-brands fa-square-facebook" },
        { iconClass: "fa-brands fa-square-twitter" },
        { iconClass: "fa-brands fa-linkedin" },
        { iconClass: "fa-brands fa-square-github" }
    ]

    return (
        <div id={style.footer}>
            <div>
                {leftFooter.map((icon) => (
                    <div key={icon.iconClass} className={style.leftFooter}>
                        <div className={style.leftFooterIcon}>
                            <i className={icon.iconClass} style={{ fontSize: "24px" }}></i>
                        </div>
                        <div>
                            <h3>{icon.details}</h3>
                        </div>
                    </div>
                ))}
            </div>
            <div id={style.rightFooter}>
                <div>
                    <Link className={style.about_faq} to="/about">
                        <h2>ABOUT US</h2>
                    </Link>
                </div>
                <div>
                    <Link className={style.about_faq} to="/faq">
                        <h2>FAQ</h2>
                    </Link>
                </div>
                <div>
                    {socialIcon.map((icon) => (
                        <i key={icon.iconClass} id={style.social} className={icon.iconClass}></i>
                    ))}
                </div>
            </div>
        </div>
    )
};
