import { NavLink } from "react-router-dom"
// import Navbar from "../Navbar"
import style from "./Products.module.css"

export default function Products() {

    const categoryImages = [
        { path: "/products/mens", title: "MENS", image: "https://www.bennevisfashion.com/upload/product/1575290695Blue-Stripes-Stylish-Mens-Blazer-3.jpg" },
        { path: "/products/womens", title: "WOMENS", image: "https://www.prodirectselect.com/productimages/V3_1_Main/V3_1_Main_0319791.jpg" },
        { path: "/products/kids", title: "KIDS", image: "https://th.bing.com/th/id/R.82b41e986ccae41e8c631c8eb9b0c3d4?rik=U1TrLVLcnnzS%2fQ&riu=http%3a%2f%2fwww.kidswear-magazine.com%2fwp-content%2fuploads%2f2017%2f05%2fkw-TAO-ss17-1.jpg&ehk=uwqMQy3tzKG38wrJHvu5YYFuXrbCe3ZXob6P1%2bHi3OQ%3d&risl=&pid=ImgRaw&r=0" }
    ]

    return (
        <div>
            <div id={style.catDiv}>
                {categoryImages.map((cat) => (
                    <div className={style.catbox} key={cat.title}>
                        <NavLink className={style.catLinks} to={cat.path}>
                            <img className={style.catImg} src={cat.image} alt={cat.title} />
                            <h3 >
                                {cat.title}
                            </h3>
                        </NavLink>
                    </div>
                ))}
            </div>
        </div>
    )
};
