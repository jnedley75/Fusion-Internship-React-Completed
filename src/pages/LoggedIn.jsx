import {useEffect, useState} from "react";
import LoginForm from "../components/forms/LoginForm";
import {Button, Col, Container, Row} from "reactstrap";
import {useCookies} from "react-cookie";
import dbLogin, {getAllUsers} from '../API/calls'
import '../styles/pages/Login.css'
import ViewUsersModal from "../components/ViewUsersModal";


export default function LoggedIn() {

    const [cookies, setCookie] = useCookies(['userInfo', "loggedIn", "allUsers"]);

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
        const allUsers = await getAllUsers()
        if(responseJson.loggedIn === true) {
            setCookie("userInfo", responseJson.userInformation)
            setCookie("loggedIn", responseJson.loggedIn)
            if(responseJson.userInformation.role === "Admin"){
                setCookie("allUsers", allUsers)
            }
            setShowError(false)
        } else {
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
                    <Container className="loggedInContainer">
                        <Row>
                            <Col>
                                <h2>Welcome back {cookies.userInfo.email}!</h2>
                            </Col>
                        </Row>
                        {cookies.userInfo.role !== "Admin" ?
                            ""
                            :
                            <Row>
                                <Col>
                                    <ViewUsersModal />
                                </Col>
                            </Row>
                        }
                    </Container>
                </div>
            }
        </>
    )
}