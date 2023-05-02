import {useCookies} from "react-cookie";
import {useEffect, useState} from "react";
import {Button} from "reactstrap";
import RegistrationForm from "../components/forms/RegistrationForm";
import {registration} from "../API/calls";
import '../styles/pages/Registration.css'
import {useNavigate} from "react-router-dom";


export function Registration() {

    const navigate = useNavigate();
    const [cookies, setCookie] = useCookies(['userInfo', "loggedIn"]);

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [age, setAge] = useState(null)
    const [gender, setGender] = useState('')

    const [showError, setShowError] = useState(false)

    const [requestObject, setRequestObject] = useState(null)

    useEffect(() => {
        setRequestObject(
            {
                "email" : email,
                "password" : password,
                "age": age,
                "gender": gender
            }
        )
    }, [email, password, age, gender])

    async function register() {
       const responseJson = await registration(requestObject)

        setCookie("loggedIn", responseJson.loggedIn)
        setCookie("userInfo", responseJson.userInformation)
        navigate("/LoggedIn")
    }

    return (
        <>
            <div className="registrationDiv">
                <RegistrationForm setEmail={setEmail} setPassword={setPassword} setAge={setAge} setGender={setGender} />
                {showError &&
                    <strong className="errorText">Invalid Email or Passwords do not match. Please try again</strong>
                }
                <Button className="registerButton" color="success" onClick={() => register()}>Register</Button>
            </div>
        </>
    )
}