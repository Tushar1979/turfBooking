import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Col, Container, Row } from "react-bootstrap";
import Icon from "../utils/icons";

export default function ContactUs(props){
    return(
        <>
            <section className="contactMain">
                <Container>
                    <Row className="align-items-center">
                        <Col md={6} sm={12}>
                            <div className="pe-5">
                                <div className="heading">
                                    <h2>TURF</h2>
                                    <h4>Contact Us</h4>
                                </div>
                                <p className="subtext">The easiest way to get in touch with us is via phone or email.</p>
                                <Row className="mt-3 info">
                                    <Col lg={6} md={12}>
                                        <Icon icon={faPhone}/>
                                        <h3 className="subtitle">Phone</h3>
                                        <a href="tel:+911141185700" className="link phone"><h4 className="subinfo">+911141185700</h4></a>
                                    </Col>
                                    <Col lg={6} md={12}>
                                        <Icon icon={faEnvelope}/>
                                        <h3 className="subtitle">Email</h3>
                                        <a href="mailto:contact@hudle.in" className="link mail"><h4 className="subinfo">contact@hudle.in</h4></a>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col  md={6} sm={12} className="right-sec side-form-sec">
                            <div className="side-form-wrapper">
                                <div className="side-form-header">
                                    <h3 className="title">Drop us a line</h3>
                                    <p className="subtext">If you have any queries or suggestions, you can send them to us and we’ll
                                    make sure to reply back at the earliest.</p>
                                </div>
                                <div className="side-form-body">
                                    <form className="form-content">
                                        <div className="field">
                                            <input type="text" id="name" name="name" placeholder="Full name" required />
                                            <label htmlFor="name">Your name</label>
                                        </div>
                                        <div className="field">
                                            <input type="number" minLength={10} maxLength={10} id="mobile" name="mobile" placeholder="123-456-7890" required />
                                            <label htmlFor="mobile">Your phone</label>
                                        </div>
                                        <div className="field">
                                            <input type="email" id="email" name="email" placeholder="youremail@gmail.com" required />
                                            <label htmlFor="email">Your email</label>
                                        </div>
                                        <div className="field">
                                            <textarea rows={10} id="message" name="message" placeholder="Leave your message here" required defaultValue={""} />
                                            <label htmlFor="message">Message</label>
                                        </div>
                                        <div className="form-footer">
                                            <button type="submit" className="btn btn-default send-btn">
                                                <img src="assets/images/icon/loader.svg" className="icon loader-icon" />
                                                <img src="assets/images/icon/right.svg" className="icon right-icon" style={{display: 'none'}} />
                                                <span className="btn-text">Send</span>
                                            </button>
                                            <div className="mt--10"><small className="msg-box" /></div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}