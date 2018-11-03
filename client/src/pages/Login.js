import React from "react";
import LoginNav from "../components/LoginNav";
import LoginForm from "../components/LoginForm";
import Container from "../components/Container";
import Col from "../components/Col";
import Row from "../components/Row";
import Footer from "../components/Footer";

const Login = () => <div>
    <LoginNav />
    <Container>
        <Row style={{backgroundColor: "#303440ff", marginTop: "100px", width: "40%", marginLeft: "auto", marginRight: "auto", borderWidth: "8px", borderColor: "#d9d9d9ff", borderStyle: "solid"}}>
            <Col size="md-12">
                <LoginForm />
            </Col>
        </Row>
    </Container>
    <Footer/>
</div>

export default Login;