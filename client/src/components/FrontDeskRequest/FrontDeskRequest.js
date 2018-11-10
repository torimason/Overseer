import React, {Component} from "react";
import API from "../../api/tickets";

class FrontDeskRequest extends Component {
    state = {
        ticket: [],
        ticketDetails: []
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
    }

    getTicketId = (event) => {
        console.log(event.target.value);
        console.log(this.state.ticket);
        this.setState({
            request: event.target.value,
        });
    }

    render() {
        return(
<div>
<div className="row">
<div className = "col-md-8">
    <table className = "table" style={{marginTop: "20px", textAlign: "center"}}>
        <thead style={{backgroundColor: "#303440ff", color: "white",borderBottomStyle: "solid",borderBottomWidth: "5px",borderBottomColor: "#d9d9d9ff"}}>
            <tr>
                <th scope="col">Date</th>
                <th scope="col">Time</th>
                <th scope="col">Room #</th>
                <th scope="col">Last Name</th>
                <th scope="col">Department</th>
                <th scope="col">Status</th>
                <th scope="col">View Details</th>
            </tr>
        </thead>
        <tbody>
                {this.state.ticket.map(ticket => (
                    <tr key={ticket._id} style={{textAlign: "center"}}>
                        <td>{ticket.date}</td>
                        <td>{ticket.time}</td>
                        <td>{ticket.roomNumber}</td>
                        <td>{ticket.guestsLastName}</td>
                        <td>{ticket.department}</td>
                        <td>{ticket.status}</td>
                        <td><button value={[ticket.request, ticket._id, ticket.comments, ticket.status]} onClick= {this.getTicketId} style={{backgroundColor: "transparent", border: "none"}}>+</button></td>
                    </tr>
                ))}
            </tbody>
    </table>
    </div>
    <div className = "col-md-4">
    <table className = "table" style={{marginTop: "20px", textAlign: "center"}}>
        <thead style={{backgroundColor: "#303440ff", color: "white",borderBottomStyle: "solid",borderBottomWidth: "5px",borderBottomColor: "#d9d9d9ff"}}>
            <tr>
                <th scope="col">Request Details</th>
            </tr>
        </thead>
      <tbody>
          <tr>
              <td>
                  {this.state.ticketDetails}
              </td>
          </tr>
          <tr>
              <td><label style={{ color: "white", fontFamily: "'Exo 2', sans-serif", fontSize: "20px" }}>Comment</label>
                        <textarea onChange={this.captureInput} name= "request" type="text" className="form-control" /></td>
          </tr>
      </tbody>
    </table>
    </div>
    </div>
</div>
        )
    }
}

export default FrontDeskRequest;
