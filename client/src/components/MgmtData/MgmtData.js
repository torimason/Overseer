import React, {Component} from "react";
import API from "../../api/tickets";

class MgmtData extends Component {
    state = {
        ticket: [],
        ticketDetails: ["Empty", "", "", "Empty", "Ticket", "Details"],
        status: "",
        comments: "",
        id: ""
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
        let data = event.target.value;
        let res = data.split(",");
        console.log(res)
        this.setState({
            ticketDetails: res
        });
    }

    captureInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
            console.log("Updated")
    }

    render() {
        return(
<div style={{fontFamily: "'Exo 2', sans-serif"}}>
<div className="row">
<div className = "col-md-8">
    <table className = "table" style={{marginTop: "20px", textAlign: "center"}}>
        <thead style={{backgroundColor: "#303440ff", color: "white",borderBottomStyle: "solid",borderBottomWidth: "5px",borderBottomColor: "#d9d9d9ff",}}>
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
                    <tr key={ticket._id} style={{textAlign: "center", color: "#303440ff"}}>
                        <td>{ticket.date}</td>
                        <td>{ticket.time}</td>
                        <td>{ticket.roomNumber}</td>
                        <td>{ticket.guestsLastName}</td>
                        <td>{ticket.department}</td>
                        <td>{ticket.status}</td>
                        <td><button value={[ticket.request, ticket._id, ticket.comments, ticket.status, ticket.guestsLastName, ticket.roomNumber]} onClick= {this.getTicketId} style={{backgroundColor: "transparent", border: "none"}}>+</button></td>
                    </tr>
                ))}
            </tbody>
    </table>
    </div>
    <div className = "col-md-4">
    <table className = "table" style={{marginTop: "20px"}}>
        <thead style={{backgroundColor: "#303440ff", color: "white",borderBottomStyle: "solid",borderBottomWidth: "5px",borderBottomColor: "#d9d9d9ff"}}>
            <tr>
                <th scope="col" style={{ textAlign: "center"}}>{this.state.ticketDetails[4]} {this.state.ticketDetails[5]}</th>
            </tr>
        </thead>
    </table>
    <div className = "row" style={{marginLeft: "10px", marginRight: "10px"}}>
        <div className = "col-md-12">
        Request:
        </div>
        <div className="col-md-12" style={{textAlign: "center"}}>{this.state.ticketDetails[0]}</div>
    </div>
    <div className = "row" style={{marginLeft: "10px", marginRight: "10px"}}>
        <div className = "col-md-12">
        Status: 
        </div>
        <div className="col-md-12" style={{textAlign: "center"}}>{this.state.ticketDetails[3]}</div>
    </div>
    <div className = "row" style={{marginLeft: "10px", marginRight: "10px"}}>
        <div className = "col-md-12" style={{marginBottom: "10px"}}>
        Comments: 
        </div>
        <div className="col-md-12" style={{textAlign: "center"}}>
        <textarea onChange={this.captureInput} name= "comments" type="text" className="form-control">{this.state.ticketDetails[2]}</textarea>
        </div>
    </div>
    <div className = "row" style={{marginLeft: "10px", marginRight: "10px"}}>
        <div className = "col-md-12" style={{marginBottom: "10px"}}>
        Update Status:
        </div>
        <div className="col-md-12" style={{textAlign: "center"}}>
        <select onChange={this.captureInput} name= "status" className="custom-select">
                            <option>{this.state.ticketDetails[3]}</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                        </select>
        </div>
    </div>
    <div className = "row" style={{marginLeft: "10px", marginRight: "10px", marginTop: "20px"}}>
        <div className = "col-md-12">
        <button onClick={this.handleSubmit} style={{color: "#303440ff", backgroundColor: "#d9d9d9ff", color: "#303440ff", fontFamily: "'Exo 2', sans-serif", fontSize: "20px"}} className="btn">Update</button>
        </div>
    </div>
    </div>
    </div>
</div>
        )
    }
}

export default MgmtData;
