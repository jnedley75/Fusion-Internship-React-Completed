import { useEffect, useState } from "react";
import {Col, Container, Input, Row} from "reactstrap";
import '../../styles/components/forms/LoginForm.css'

export default function LoginForm({setEmail, setPassword}) {

    const [emailInput, setEmailInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')

    useEffect(() => {
        function validate(emailInput, passwordInput) {
            if(emailInput !== '' && passwordInput !== '') {
                setEmail(emailInput)
                setPassword(passwordInput)
            }
        }

        validate(emailInput, passwordInput)
    }, [emailInput, passwordInput])

    return (
        <>
            <Container className="loginForm">
                <Row className="inputs">
                    <Col>
                        <h3 className="logintitle">Login</h3>
                    </Col>
                </Row>
                <Row className="inputs">
                    <Col md="4">
                        <Input
                            className="emailInput"
                            type="email"
                            placeholder="Enter Email"
                            onChange={(e) => setEmailInput(e.target.value)}
                        />
                    </Col>
                </Row>
                <Row className="inputs">
                    <Col md="4">
                        <Input
                            className="passwordInput"
                            type="password"
                            placeholder="Enter Password"
                            onChange={(e) => setPasswordInput(e.target.value)}
                        />
                    </Col>
                </Row>
            </Container>
        </>
    )
}