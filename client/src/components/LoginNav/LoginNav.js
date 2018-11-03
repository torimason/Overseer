import React from "react";

const styles = {
    navBar : {
        backgroundColor: "#303440ff",
        borderBottomStyle: "solid",
        borderBottomWidth: "8px",
        borderBottomColor: "#d9d9d9ff"
    }
}

const NavLogin = () => <div className="navbar" style={styles.navBar}>
<a className="navbar-brand" href="/">
  <img src="./images/darkLogo.png" width="300" height="90" className="d-inline-block align-top" alt="Overseer"/>
</a>
</div>

export default NavLogin;