import {Container, Row, Col} from "react-bootstrap"
import { MailchimpForm } from "./MailchimpForm"
import logo from "../assets/img/logo.png"
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'

export const Footer = () => {
    return (
    <footer className="footer">
        <Container>
            <Row>
                <br></br>
                <br></br>
                <br></br>
            </Row>
            <Row className="align-item-center">
                {/* <MailchimpForm/> */}
                <Col sm={6}>
                    <img src={logo} alt="Logo"/>
                </Col>
                <Col sm={6} className="text-center text-sm-end">
                    <div className="social-icon">
                        <a href=""><img src={navIcon1}/></a>
                        <a href=""><img src={navIcon2}/></a>
                        <a href=""><img src={navIcon3}/></a>
                    </div>
                    <p>CopyRight 2023. All Rights Reserved</p>
                </Col>
            </Row>
        </Container>
    </footer>
    )
}