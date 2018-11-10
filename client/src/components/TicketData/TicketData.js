import React, {Component} from "react";
import API from "../../api/tickets";

class TicketData extends Component {
    state = {
        ticket: [],
        ticketID: ""
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

    getTicketId = (event) => {
        console.log(event.target.value);
        this.setState({
            ticketID: event.target.value
        });
    }
    

    render() {
        return(
            <tbody>
                {this.state.ticket.map(ticket => (
                    <tr key={ticket._id} style={{textAlign: "center"}}>
                        <td>{ticket.date}</td>
                        <td>{ticket.time}</td>
                        <td>{ticket.roomNumber}</td>
                        <td>{ticket.guestsLastName}</td>
                        <td>{ticket.department}</td>
                        <td>{ticket.status}</td>
                        <td><button value={ticket._id} onClick= {this.getTicketId} style={{backgroundColor: "transparent", border: "none"}}>+</button></td>
                    </tr>
                ))}
            </tbody>
        )
    }
}

export default TicketData;
