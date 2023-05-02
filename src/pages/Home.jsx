import {Button, Col, Container, Row} from "reactstrap";
import "../styles/pages/Home.css"
import CustomCarousel from "../components/CustomCarousel";
import {googleLogin} from "../API/calls";
import {useNavigate} from "react-router-dom";
import {useCookies} from "react-cookie";
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";

export default function Home() {
    const navigate = useNavigate();
    const [cookies, setCookie] = useCookies(['loggedIn', 'userInfo']);
    function responseMessage(googleResponse) {
        const userObject = jwt_decode(googleResponse.credential)
        googleLogin(userObject).then(response =>{
            //console.log(response)
            setCookie('loggedIn', true)
            setCookie('userInfo', {'email': response.userInformation.email, 'role': response.userInformation.role})
        })
        navigate("/LoggedIn")
    }
    const errorMessage = (error) => {
        console.log(error)
    };

    return (
        <>
            <div className="main">
                <Container className="mainContainer">
                    <Row>
                        <Col>
                            <CustomCarousel fade={true} slide={true} />
                        </Col>
                        <Col className="rightHomeCol">
                            <Row className="titleRow">
                                <Col>
                                    <h2 className="homeTitle">Welcome To The Fusion Internship Project</h2>
                                </Col>
                            </Row>
                            <Row>
                                {!cookies.loggedIn ?
                                    <>
                                        <Col>
                                            <Button color="success" onClick={()=>navigate("/LoggedIn")}>Login</Button>
                                        </Col>
                                        <Col>
                                            <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
                                        </Col>
                                    </>
                                    :
                                    <Col>
                                        <Button color="success" onClick={()=>navigate("/LoggedIn")}>Dashboard</Button>
                                    </Col>
                                }

                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}