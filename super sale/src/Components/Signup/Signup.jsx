import { useState } from "react"
import { Link, Navigate } from "react-router-dom"
import style from "./Signup.module.css"

const HandlePost = (data) => {
    return fetch(`https://khalidproducts.herokuapp.com/Auth`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    })
}

export default function Signup() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [users, setUsers] = useState({})
    const [count, setCount] = useState(0)

    const HandleSignup = (e) => {
        e.preventDefault();
        setCount(prev => prev + 1)
        let data = {
            name,
            email,
            password
        }
        if (name !== "" && email !== "" && password !== "") {
            setUsers(data)
            HandlePost(users)
        }
        else {
            alert("Please fill All the Details")
        }
        if (count === 0) {
            alert("Confirm Details")
        }
        if (count === 1) {
            alert("Signup Successful")
            // setCount(0)
        }
    }

    if(count === 2){
        return <Navigate to="/login" />
    }

    return (
        <div >
            <div id={style.formDiv}>
                <form id={style.form} onSubmit={HandleSignup}>
                    <input className={style.input} onChange={(e) => setName(e.target.value)} value={name} name="name" type="text" placeholder="Enter your Name" />
                    <input className={style.input} onChange={(e) => setEmail(e.target.value)} value={email} name="email" type="text" placeholder="Enter your Email" />
                    <input className={style.input} onChange={(e) => setPassword(e.target.value)} value={password} name="password" type="password" placeholder="Enter your Password" />
                    <button id={style.submit}>Signup</button>

                    <p id={style.create}>
                        Already Have Account?
                        <Link id={style.createLink} to="/login"> Login Now</Link>
                    </p>

                </form>
            </div>
        </div>
    )
};
