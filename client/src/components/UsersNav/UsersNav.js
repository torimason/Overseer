import React from "react";

const styles = {
    navBar : {
        backgroundColor: "#303440ff",
        borderBottomStyle: "solid",
        borderBottomWidth: "8px",
        borderBottomColor: "#d9d9d9ff"
    }
}

const UsersNav = () => <div className="navbar" style={styles.navBar}>
<a className="navbar-brand" href="/">
  <img src="./images/darkLogo.png" width="300" height="90" className="d-inline-block align-top" alt="Overseer"/>
  <h4 style={{color: "white" , marginLeft: "190px", fontFamily: "'Exo 2', sans-serif"}}>Management</h4>
</a>
<div style={{marginTop: "90px", marginRight: "20px"}}>
<a href="/mgmt" target="_blank" style={{marginTop: "70px", color: "white", fontSize: "18px", fontWeight: "bold", fontFamily: "'Exo 2', sans-serif"}}>Back</a>
</div>

</div>

export default UsersNav;