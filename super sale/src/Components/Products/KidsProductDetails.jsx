import { useContext } from "react"
import { useEffect } from "react"
import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import { CartAuthContext } from "../../Context/CartAuthContext"
import Error404 from "./Error404"
import style from "./ProductDetails.module.css"

const GetData = (id) => {
    return fetch(`https://khalidproducts.herokuapp.com/mensData/${id}`)
        .then(res => res.json())
}

export default function MensProductDetails() {

    const value = useContext(CartAuthContext)
    const { HandleCart, isAuth, setSavePath } = value;
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const params = useParams()

    useEffect(() => {
        setLoading(true)
        GetData(params.id).then(res => {
            setLoading(false)
            setData(res)
        }).catch(err => {
            setLoading(false)
            console.log("error: " + err)
        })
    }, [params.id])

    const loadingStyle = {
        height: "500px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }

    if (loading) {
        return <h1 style={loadingStyle}>Loading......</h1>
    }

    if (!data.id) {
        return <Error404 />
    }

    const HandleAuth = () => {
        setSavePath(`/products/mens/${params.id}`)
        alert("Please Login First")
    }

    return (
        <div>
            {data && (
                <div className={style.productDetailsDiv}>
                    <img className={style.productDetailsImg} src={data.image_url} alt={data.image_url} />
                    <h3> {data.name} </h3>
                    <div className={style.productDetailsPrice}>
                        <p>Only {data.price}/- Rs.</p>
                        <p>{data.strikedoffprice}/- Rs.</p>
                    </div>
                    {isAuth ?
                        <button onClick={() => HandleCart(data.id, data.name, data.image_url, data.price)} className={style.add_cart}>Add to Cart</button>
                        :
                        <Link to="/login">
                            <button onClick={HandleAuth} className={style.add_cart}>Add to Cart</button>
                        </Link>
                    }
                </div>
            )}
        </div>
    )
};

