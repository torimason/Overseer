import React, {Component} from "react";
import API from "../../api/tickets";

class TicketData extends Component {
    state = {
        ticket: [],
    };

    componentDidMount() {
        this.loadTicketData();
    };

    loadTicketData = () => {
        API.getTickets(this.state)
        .then(res => 
        this.setState({
            ticket: res.data
        })
    )
    console.log(this.state)
    }
    

    render() {
        return(
            <tbody>
                {this.state.ticket.map(ticket => (
                    <tr>
                        <td>{ticket.date}</td>
                        <td>{ticket.time}</td>
                        <td>{ticket.roomNumber}</td>
                        <td>{ticket.guestsLastName}</td>
                        <td>{ticket.department}</td>
                        <td>{ticket.status}</td>
                        <td><button style={{backgroundColor: "transparent", border: "none"}}>+</button></td>
                    </tr>
                ))}
            </tbody>
        )
    }
}

export default TicketData;
