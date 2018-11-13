import React, {Component} from 'react';
import API from "../../api/auth";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Swal from 'sweetalert2';

export default class LoginForm extends Component {
    state = {
        username:"",
        password:"",
        department:""
    }
    handleLogin = (event) => {
        event.preventDefault();
        API.login(this.state).then(function(response){
            if(response.data.success === true){
                if(response.data.department === "FD"){
                    window.location.assign("/frontdesk")
                }
                else if(response.data.department === "HSKP"){
                    console.log("Route to '/housekeeping'");
                }
                else if(response.data.department === "ENG"){
                    console.log("Route to '/engineering'");
                }
                else if(response.data.department === "IRD"){
                    console.log("Route to '/dining'");
                }
                else if(response.data.department === "SEC"){
                    console.log("Route to '/security'");
                }
                else if(response.data.department === "MAN"){
                    window.location.assign("/mgmt")
                }
            }
            else{
                const toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                });
                toast({
                    type: 'error',
                    title: 'Invalid login'
                });
                setTimeout(function() {
                    window.location.reload();
                  }, 3000);
            }
        });
    }
    captureInput = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    
    render(){
        return(
            <form style={{marginTop: "40px", marginBottom: "40px", marginLeft: "30px" , marginRight: "30px"}}>
            <div className="form-group">
              <label style={{color: "white", fontFamily: "'Exo 2', sans-serif", fontSize: "20px"}}>Username</label>
              <input name="username" onChange={this.captureInput} type="text" className="form-control" id="usernameInput" aria-describedby="emailHelp"/>
            </div>
            <div className="form-group">
              <label style={{color: "white", fontFamily: "'Exo 2', sans-serif", fontSize: "20px"}}>Password</label>
              <input name="password" onChange={this.captureInput} type="password" className="form-control" id="passwordInput"/>
            </div>
            <button onClick={this.handleLogin} style={{color: "#303440ff", backgroundColor: "#d9d9d9ff", color: "#303440ff", fontFamily: "'Exo 2', sans-serif", fontSize: "20px"}} className="btn">Login</button>
          </form>
        )
    }
}