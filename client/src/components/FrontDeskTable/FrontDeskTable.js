import React from "react";

const FrontDeskTable = (props) => <div>
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
      {props.children}
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
            
          </tr>
      </tbody>
    </table>
    </div>
    </div>
</div>

export default FrontDeskTable;