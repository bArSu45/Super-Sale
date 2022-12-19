import { useEffect } from "react";
import { useState } from "react"
import { Link } from "react-router-dom";
import FetchData from "../FetchData";
import style from "./ProductPage.module.css"

export default function Womens() {
    const url = `https://khalidproducts.herokuapp.com/womensData`
    const [data, setData] = useState([]);
    const [sortBy, setSortBy] = useState("")

    const sortByPrice = (e) => {
        if (e.target.value === "none") {
            setSortBy("")
        }
        if (e.target.value === "lth") {
            setSortBy("?_sort=price&_order=asc")
        }
        if (e.target.value === "htl") {
            setSortBy("?_sort=price&_order=DESC")
        }
    }

    useEffect(() => {
        FetchData(url + sortBy).then(res => setData(res))
    }, [url, sortBy])

    return (
        <div className={style.productsContainer}>
            <select onChange={sortByPrice} name="" id={style.sortPrice}>
                <option value="none">Sort by Price</option>
                <option value="lth">Low to High</option>
                <option value="htl">High to Low</option>
            </select>

            <div className={style.productsDiv}>
                {data.map((item) => (
                    <Link to={`/products/womens/${item.id}`} key={item.id} className={style.productLink}>
                        <div className={style.singleProductDiv} >
                            <img className={style.productImg} src={item.image_url} alt={item.image_url} />
                            <h3>{item.name}</h3>
                            <p className={style.price}>{item.price}/- Rs.</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>

    )
};
