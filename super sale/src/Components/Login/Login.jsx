import { useContext } from "react"
import { useEffect } from "react"
import { useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { CartAuthContext } from "../../Context/CartAuthContext"
import FetchData from "../FetchData"
import style from "./Login.module.css"

const initialData = {
    email: "",
    password: ""
}

export default function Login() {

    const value = useContext(CartAuthContext)
    const { isAuth, ToggleAuth, setAuthName } = value
    const url = `https://khalidproducts.herokuapp.com/Auth`
    const [signupData, setSignupData] = useState()
    const [data, setData] = useState(initialData)

    useEffect(() => {
        FetchData(url).then(res => setSignupData(res))
    }, [url])

    const HandleChange = (e) => {
        const { name: key, value } = e.target
        setData({
            ...data, [key]: value
        })
    }

    let count1 = 0
    let count2 = 0
    const HandleLogin = (e) => {
        e.preventDefault();
        setData(initialData)

        if (data.email === "" || data.password === "") {
            alert("Please fill All the Details")
        }
        else {
            signupData.map((pers) => {
                if (pers.email === data.email && pers.password === data.password) {
                    setAuthName(pers.name)
                    return count1++
                }
                else if (pers.email === data.email && pers.password !== data.password) {
                    return count2++
                }
                return 0
            })
            if (count1 > 0) {
                alert("Login Successfull")
                ToggleAuth()
            }
            else if (count2 > 0) {
                alert("Wrong Password")
            }
            else {
                alert("User Not Found | Create an Account")
            }
        }
    }

    if (isAuth) {
        return <Navigate to='/' />
    }

    return (
        <div>
            <div id={style.formDiv}>
                <form id={style.form} action="" onSubmit={HandleLogin}>
                    <input className={style.input} onChange={HandleChange} value={data.email} name="email" type="text" placeholder="Enter your Email" />
                    <input className={style.input} onChange={HandleChange} value={data.password} name="password" type="password" placeholder="Enter your Password" />
                    <button id={style.submit}>Login</button>

                    <p id={style.create}>
                        Don't Have Account?
                        <Link id={style.createLink} to="/signup"> Create Account Now</Link>
                    </p>

                </form>
            </div>
        </div>
    )
};
