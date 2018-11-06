import React from "react";
import LoginNav from "../components/LoginNav";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Col from "../components/Col";
import Row from "../components/Row";
import CreateTicketForm from "../components/CreateTicketForm";

const CreateTicket = () => <div>
    <LoginNav />
    <Container>
                <Row style={{backgroundColor: "#303440ff", marginTop: "70px", width: "70%", marginLeft: "auto", marginRight: "auto", borderWidth: "8px", borderColor: "#d9d9d9ff", borderStyle: "solid"}}>
                     <Col size="md-12">
                        <CreateTicketForm/>
                     </Col>   
                </Row>
        </Container>
    <Footer />
</div>

export default CreateTicket;