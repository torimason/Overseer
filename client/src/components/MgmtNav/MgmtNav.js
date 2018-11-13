import React from "react";

const styles = {
    navBar : {
        backgroundColor: "#303440ff",
        borderBottomStyle: "solid",
        borderBottomWidth: "8px",
        borderBottomColor: "#d9d9d9ff"
    }
}

const MgmtNav = () => <div className="navbar" style={styles.navBar}>
<a className="navbar-brand" href="/">
  <img src="./images/darkLogo.png" width="300" height="90" className="d-inline-block align-top" alt="Overseer"/>
  <h4 style={{color: "white" , marginLeft: "190px", fontFamily: "'Exo 2', sans-serif"}}>Management</h4>
</a>
<div style={{marginTop: "90px", marginRight: "20px"}}>
<a href="/createuser" target="_blank" style={{marginTop: "70px", color: "white", fontSize: "18px", fontWeight: "bold", fontFamily: "'Exo 2', sans-serif"}}>Create User </a>
<a href="/createticket" target="_blank" style={{marginTop: "70px", color: "white", fontSize: "18px", fontWeight: "bold", fontFamily: "'Exo 2', sans-serif"}}>| Create Ticket</a>
<a href="/users" target="_blank" style={{marginTop: "70px", color: "white", fontSize: "18px", fontWeight: "bold", fontFamily: "'Exo 2', sans-serif"}}>| View Users</a>
</div>

</div>

export default MgmtNav;