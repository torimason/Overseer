import React from "react";
import LoginNav from "../components/LoginNav";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Col from "../components/Col";
import Row from "../components/Row";
import TicketsTable from "../components/TicketsTable";
import TicketData from "../components/TicketData";

const FrontDesk = () => <div>
    <LoginNav />
        <TicketsTable>
            <TicketData/>
        </TicketsTable>
    <Footer />
</div>

export default FrontDesk;
