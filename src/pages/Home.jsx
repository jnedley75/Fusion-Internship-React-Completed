import {Button, Col, Container, Row} from "reactstrap";
import "../styles/pages/Home.css"
import CustomCarousel from "../components/CustomCarousel";
import {useNavigate} from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
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
                                <Col>
                                    <Button color="success" onClick={()=>navigate("/Login")}>Login</Button>
                                </Col>
                                <Col>
                                    <a className="googleButton" onClick={()=>navigate("/")}></a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}