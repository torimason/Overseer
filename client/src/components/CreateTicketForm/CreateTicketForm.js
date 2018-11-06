import React, { Component } from 'react';
import API from "../../api/tickets";
import moment from "moment";

export default class CreateTicketForm extends Component {
    state = {
        date: moment().format("MM DD YYYY"),
        time: moment().format("HH:mm"),
        department: "",
        roomNumber: "",
        guestsLastName: "",
        request: "",
        comments: "",
        status: "Submitted"
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log("Sign Up", this.state);
        API.createTickets(this.state).then(function(response){
            console.log(response);
        });
    }
    captureInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        return (
            <form>
                <div className = "row" style={{ fontFamily: "'Exo 2', sans-serif" ,color: "white", paddingTop: "20px", paddingLeft: "20px", paddingRight: "30px" }}>
                    
                    <div className = "col-md-12">
                        <h3>Create Ticket</h3>
                    </div>

                </div>

                <div className="row" style={{ paddingTop: "20px", paddingLeft: "30px", paddingRight: "30px" }}>
                   
                   <div className="col-md-3">
                        <label style={{ color: "white", fontFamily: "'Exo 2', sans-serif", fontSize: "20px" }}>Room</label>
                        <input onChange={this.captureInput} name= "roomNumber" type="text" className="form-control" />
                    </div>

                    <div className="col-md-6">
                        <label style={{ color: "white", fontFamily: "'Exo 2', sans-serif", fontSize: "20px" }}>Guest's Last Name</label>
                        <input onChange={this.captureInput} name= "guestsLastName" type="text" className="form-control" />
                    </div>

                    <div className="col-md-3">
                        <label style={{ color: "white", fontFamily: "'Exo 2', sans-serif", fontSize: "20px" }}>Department</label>
                        <select onChange={this.captureInput} name= "department" className="custom-select">
                            <option>Select One...</option>
                            <option value="ENG">Engineering</option>
                            <option value="FD">Front Desk</option>
                            <option value="HSKP">House Keeping</option>
                            <option value="IRD">In Room Dining</option>
                            <option value="MAN">Managment</option>
                            <option value="SEC">Security</option>
                        </select>
                    </div>

                </div>

                <div className="row" style={{ paddingBottom: "20px", paddingTop: "20px", paddingLeft: "30px", paddingRight: "30px" }}>
                    
                    
                   
                    <div className="col-md-12">
                        <label style={{ color: "white", fontFamily: "'Exo 2', sans-serif", fontSize: "20px" }}>Request</label>
                        <textarea onChange={this.captureInput} name= "request" type="text" className="form-control" />
                    </div>
                    
                </div>
                <div className = "row" style={{marginBottom: "30px", marginTop: "20px", paddingLeft: "30px"}}>
                    
                <div className = "col-md-9"></div>
                    <div className = "col-md-3">
                    <button onClick={this.handleSubmit} style={{color: "#303440ff", backgroundColor: "#d9d9d9ff", color: "#303440ff", fontFamily: "'Exo 2', sans-serif", fontSize: "20px"}} className="btn">Submit</button>
                    </div>
                </div>

            </form>
        )
    }
}