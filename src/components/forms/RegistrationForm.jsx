import {useEffect, useState} from "react";
import {Col, Container, Input, Row} from "reactstrap";
import '../../styles/components/forms/RegistrationForm.css'

export default function RegistrationForm({setEmail, setPassword, setAge, setGender}) {

    const [emailInput, setEmailInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')
    const [passwordConfirmInput, setPasswordConfirmInput] = useState('')
    const [ageInput, setAgeInput] = useState(null)
    const [genderInput, setGenderInput] = useState('')

    useEffect(() => {
        function validate(emailInput, passwordInput, passwordConfirmInput, ageInput, genderInput) {
            if(emailInput !== '' && passwordInput !== '' &&
                passwordInput === passwordConfirmInput &&
                ageInput !== null && genderInput !== '') {

                setEmail(emailInput)
                setPassword(passwordInput)
                setAge(ageInput)
                setGender(genderInput)
            }
        }

        validate(emailInput, passwordInput, passwordConfirmInput, ageInput, genderInput)
    }, [emailInput, passwordInput, passwordConfirmInput, ageInput, genderInput])

    return (
        <>
            <Container className="registrationForm">
                <Row className="inputs">
                    <Col>
                        <h3 className="registerTitle">Register</h3>
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
                    <Col md="4">
                        <Input
                            className="passwordInput"
                            type="password"
                            placeholder="Confirm Password"
                            onChange={(e) => setPasswordConfirmInput(e.target.value)}
                        />
                    </Col>
                </Row>
                <Row className="inputs">
                    <Col md="4">
                        <Input
                            className="ageInput"
                            type="number"
                            placeholder="Enter Age"
                            onChange={(e) => setAgeInput(e.target.value)}
                        />
                    </Col>
                </Row>
                <Row className="inputs">
                    <Col md="4">
                        <Input
                            className="genderInput"
                            type="text"
                            placeholder="Enter Gender"
                            onChange={(e) => setGenderInput(e.target.value)}
                        />
                    </Col>
                </Row>
            </Container>
        </>
    )
}