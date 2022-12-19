import { useContext } from "react"
import { CartAuthContext } from "../../Context/CartAuthContext"
import style from "./Cart.module.css"

export default function Cart() {
    const value = useContext(CartAuthContext)
    const { cartData } = value;

    if (cartData.length === 0) {
        return (
            <div id={style.cart}>
                <h1 id={style.noItem}>No Items Added to Cart</h1>
            </div>
        )
    }

    return (
        <div id={style.cart}>
            <div>
                <h3 id={style.cartCount}>Items in Cart {cartData.length}</h3>
                <div id={style.cartItems}>
                    {cartData.map((item) => (
                        <div key={item.id}>
                            <h2>{item.name}</h2>
                            <p>Price: {item.price}/- Rs.</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};
