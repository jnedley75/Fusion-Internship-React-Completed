import {useEffect, useState} from "react";
import LoginForm from "../components/forms/LoginForm";
import {Button} from "reactstrap";
import {Cookies, useCookies} from "react-cookie";
import dbLogin from '../API/calls'
import '../styles/pages/Login.css'


export default function LoggedIn() {

    const [cookies, setCookie] = useCookies(['userInfo', "loggedIn"]);

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showError, setShowError] = useState(false)

    const [requestObject, setRequestObject] = useState(null)

    useEffect(() => {
        setRequestObject(
            {
                "email" : email,
                "password" : password
            }
        )
    }, [email, password])

    async function login() {
        const responseJson = await dbLogin(requestObject)
        if(responseJson.loggedIn === true) {
            setCookie("userInfo", responseJson.userInformation)
            setCookie("loggedIn", responseJson.loggedIn)
            setShowError(false)
        } else {
            console.log("in here")
            setShowError(true)
        }

    }

    return (
        <>
            {!cookies.loggedIn ?
                <div className="loginDiv">
                    <LoginForm setEmail={setEmail} setPassword={setPassword} />
                    {showError &&
                        <strong className="errorText">Invalid Email or Password. Please try again</strong>
                    }
                    <Button className="loginButton" color="success" onClick={() => login()}>Login</Button>
                </div>
            :
                <div className="greeting">
                    <h2>Welcome back {cookies.userInfo.email}!</h2>
                </div>
            }


        </>
    )
}