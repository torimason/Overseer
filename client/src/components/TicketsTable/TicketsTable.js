import React from "react";

const TicketsTable = (props) => <div>
    <table className = "table" style={{marginTop: "20px"}}>
        <thead>
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

export default TicketsTable;