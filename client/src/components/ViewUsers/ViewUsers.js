import React, {Component} from "react";
import API from "../../api/users";

class ViewUsers extends Component {
    state = {
        users: [],
    };

    componentDidMount() {
        this.loadUsersData();
    };

    loadUsersData = () => {
        API.getUsers(this.state)
        .then(res => 
        this.setState({
            users: res.data
        })
    )
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
<div className = "col-md-12">
    <table className = "table" style={{marginTop: "20px", textAlign: "center"}}>
        <thead style={{backgroundColor: "#303440ff", color: "white",borderBottomStyle: "solid",borderBottomWidth: "5px",borderBottomColor: "#d9d9d9ff",}}>
            <tr>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Username</th>
                <th scope="col">Department</th>
            </tr>
        </thead>
        <tbody>
                {this.state.users.map(users => (
                    <tr key={users._id} style={{textAlign: "center", color: "#303440ff"}}>
                        <td>{users.firstName}</td>
                        <td>{users.lastName}</td>
                        <td>{users.username}</td>
                        <td>{users.department}</td>
                    </tr>
                ))}
            </tbody>
    </table>
    </div>
    </div>
</div>
        )
    }
}

export default ViewUsers;
