import { faClock,faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Container , Row,Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import Icon from "../utils/icons";
import LogImg from "../images/logo.png"
import { useState } from 'react';

export default function Header(porps){
    const [toggle , setToggle] = useState(false)
    const mobileMwnu =()=>{
        setToggle(!toggle)
    }
    return (
        <>
            <header>
                <div className="top_header d-lg-block d-none">
                    <Container fluid>
                        <div className="top_row">
                            <div className="Column">
                                <ul>
                                    <li>
                                        <span className="icon">
                                            <Icon icon={faEnvelope} />
                                        </span>
                                        <span className="text">info@turf.com</span>
                                    </li>
                                    <li>
                                        <span className="icon">
                                            <Icon icon={faClock}/>
                                        </span>
                                        <span className="text">Mon - Sat: 08.00 - 22:00 </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="Column">

                            </div>
                            <div className="Column">
                                <ul>
                                    <li>
                                        {/* <Link to="singIn"> */}
                                            Sing Up
                                        {/* </Link> */}
                                    </li>
                                    <li>
                                        {/* <Link to="singIn"> */}
                                            Log In
                                        {/* </Link> */}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Container>
                </div>
                <div className="main_header">
                    <Container fluid>
                        <Row className='align-items-center'>
                            <Col lg={2} xs={3}>
                                <Link to="/">
                                    <img src={LogImg} className="img-fluid" style={{maxWidth:'150px'}}/>
                                </Link>
                            </Col>
                            <Col lg={8} xs={9}>
                                <ul className={toggle?"main_nav on":"main_nav"}>
                                    <li><a href='javascript:;'>Home</a></li>
                                    <li><a href='javascript:;'>About Us</a></li>                                    
                                    <li><a href='javascript:;'>Events</a></li>
                                    <li><a href='javascript:;'>News</a></li>
                                    <li><a href='javascript:;'>Contact Us</a></li>
                                </ul>
                                <button id="toggle" className={toggle?"d-lg-none d-block on":"d-lg-none d-block"} onClick={()=> mobileMwnu()}>
                                    <span></span>
                                </button>
                            </Col>
                            <Col lg={2} className="d-lg-block d-none">
                                <button className='main_btn'>Book A Turf</button>
                            </Col>
                        </Row>
                    </Container>
                </div>
                    
            </header>
        </>
    );
}