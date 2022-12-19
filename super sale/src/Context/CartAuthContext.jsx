import { createContext, useState } from "react";

export const CartAuthContext = createContext();

export default function CartAuthContextProvider({ children }) {

    const [cartData, setCartData] = useState([])
    const [isAuth, setIsAuth] = useState(false)
    const [authName, setAuthName] = useState("")
    const ToggleAuth = () => {
        setIsAuth(!isAuth)
    }

    const HandleCart = (id, name, image, price) => {
        let newData = {
            id: id,
            name: name,
            image: image,
            price: price
        }
        setCartData([...cartData, newData])
        alert("Item Added to Cart")
    }

    return (
        <CartAuthContext.Provider value={{ cartData, HandleCart, isAuth, ToggleAuth, authName, setAuthName }}>
            {children}
        </CartAuthContext.Provider>
    )
}