import {useEffect, useState} from "react";
import LoginForm from "../components/forms/LoginForm";
import {Button} from "reactstrap";
import '../styles/pages/Login.css'

export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [requestObject, setRequestObject] = useState(null)

    useEffect(() => {
        console.log("We ARE In HERE")
        setRequestObject(
            {
                "email" : email,
                "password" : password
            }
        )
    }, [email, password])

    function login() {
        console.log(requestObject)
    }

    return (
        <>
            <div className="loginDiv">
                <LoginForm setEmail={setEmail} setPassword={setPassword} />
                <Button className="loginButton" color="success" onClick={() => login()}>Login</Button>
            </div>

        </>
    )
}