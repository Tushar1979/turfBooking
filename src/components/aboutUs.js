import { Col, Container, Row } from "react-bootstrap";
import AboutImg from "../images/about/aboutus_img.png";


export default function AboutUs(props){
    return(
        <>
            <div className="main_Aboutus">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <img src={AboutImg} className="img-fluid"/>
                        </Col>
                        <Col lg={6}>
                            <div className="aboutUS_content">
                                <div className="heading">
                                    <h2>TURF</h2>
                                    <h4>About Us</h4>
                                </div>
                                <p>Hudle is a digital platform for sports enthusiasts to find and book a curated list of sports events & sports venues on The Hudle App.</p>

                                <p>We also aim to bring people closer to their sport of choice through unique events for companies and individuals!</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}