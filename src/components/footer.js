import { faClock, faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Col, Container, Row } from "react-bootstrap";
import Icon from "../utils/icons";

export default function Footer(props) {
    return(
        <>
            <footer>
                <Container fluid> 
                    <Row>
                        <Col lg={3} md={6} xs={12}>
                            <div className="footer_content">
                                <h4>OUR CLUB</h4>
                                <p>Sed sit amet nisl in velit viverra bibendum in ac nisi. Etiam efficitur dui vitae sem rutrum, id pretium nunc varius. Vestibulum hendrerit malesuada .</p>
                            </div>
                        </Col>
                        <Col lg={3} md={6} xs={12}>
                            <div className="footer_content">
                                <h4>ALL CONTACTS</h4>
                                <ul className="list">
                                    <li>
                                        <span className="icon"><Icon icon={faLocationDot}/></span>
                                        <span className="text">111 8th Ave, New York U.S.A.</span>
                                    </li>
                                    <li>
                                        <span className="icon"><Icon icon={faPhone}/></span>
                                        <span className="text">Office +1-202-555-0153</span>
                                    </li>
                                    <li>
                                        <span className="icon"><Icon icon={faEnvelope}/></span>
                                        <span className="text">info@tennisclub.com</span>
                                    </li>
                                    <li>
                                        <span className="icon"><Icon icon={faClock}/></span>
                                        <span className="text">08 am - 06 pm Sunday closed</span>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={3} md={6} xs={12}>
                            <div className="footer_content">
                                <h4>SUBSCRIBE</h4>
                                <p>Sed sit amet nisl in velit viverra bibendum in ac nisi. Etiam efficitur dui vitae sem</p>
                                <div className="inputType">
                                    <input type="email" name="email" placeholder="Insert Your Email"/>
                                    <div className="FooterBtn">
                                        <button className="main_btn">SEND</button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={6} xs={12}>
                            <div className="footer_content">
                                <h4>GALLERY</h4>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
            <div className="bottom_Footer text-center">
                <span className="bottom_text">© 2022 CubexO Software Solutions LLP All right reserved.</span>
            </div>
        </>
    );
}