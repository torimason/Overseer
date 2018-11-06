import React, { Component } from 'react';
import API from "../../api/auth";
import Swal from 'sweetalert2';

export default class CreateUserForm extends Component {
    state = {
        firstName: "",
        lastName: "",
        username: "",
        department: "",
        password: ""
    }
    handleSignUp = (event) => {
        event.preventDefault();
        console.log("Sign Up", this.state);
        API.signup(this.state).then(function (response) {
            console.log(response);
            Swal({
                title: "User Created!",
                type: "success"
            })
        })
    }
  
    captureInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        return (
            <form>
                <div className="row" style={{ fontFamily: "'Exo 2', sans-serif", color: "white", paddingTop: "20px", paddingLeft: "20px", paddingRight: "30px" }}>
                    <div className="col-md-12">
                        <h3>Create User</h3>
                    </div>
                </div>
                <div className="row" style={{ paddingTop: "20px", paddingLeft: "30px", paddingRight: "30px" }}>
                    <div className="col-md-6">
                        <label style={{ color: "white", fontFamily: "'Exo 2', sans-serif", fontSize: "20px" }}>Username</label>
                        <input onChange={this.captureInput} name="username" type="text" className="form-control" />
                    </div>
                    <div className="col-md-6">
                        <label style={{ color: "white", fontFamily: "'Exo 2', sans-serif", fontSize: "20px" }}>Password</label>
                        <input onChange={this.captureInput} name="password" type="password" className="form-control" />
                    </div>
                </div>
                <div className="row" style={{ paddingBottom: "20px", paddingTop: "20px", paddingLeft: "30px", paddingRight: "30px" }}>
                    <div className="col-md-4">
                        <label style={{ color: "white", fontFamily: "'Exo 2', sans-serif", fontSize: "20px" }}>First Name</label>
                        <input onChange={this.captureInput} name="firstName" type="text" className="form-control" />
                    </div>
                    <div className="col-md-4">
                        <label style={{ color: "white", fontFamily: "'Exo 2', sans-serif", fontSize: "20px" }}>Last Name</label>
                        <input onChange={this.captureInput} name="lastName" type="text" className="form-control" />
                    </div>
                    <div className="col-md-4">
                        <label style={{ color: "white", fontFamily: "'Exo 2', sans-serif", fontSize: "20px" }}>Department</label>
                        <select onChange={this.captureInput} name="department" className="custom-select">
                            <option>Select One ...</option>
                            <option value="ENG">Engineering</option>
                            <option value="FD">Front Desk</option>
                            <option value="HSKP">House Keeping</option>
                            <option value="IRD">In Room Dining</option>
                            <option value="MAN">Managment</option>
                            <option value="SEC">Security</option>
                        </select>
                    </div>
                </div>
                <div className="row" style={{ marginBottom: "30px", marginTop: "20px", paddingLeft: "30px" }}>

                    <div className="col-md-9"></div>
                    <div className="col-md-3">
                        <button onClick={this.handleSignUp} style={{ color: "#303440ff", backgroundColor: "#d9d9d9ff", color: "#303440ff", fontFamily: "'Exo 2', sans-serif", fontSize: "20px" }} className="btn">Sign Up</button>
                    </div>
                </div>

            </form>
        )
    }
}