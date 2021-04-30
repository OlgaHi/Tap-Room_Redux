import React from "react";

function Header(){
  const headerStyles = {
    opacity: "0.7",
    marginBottom: "2%",
  
  };
  return (
    <React.Fragment>
      <div style={headerStyles}>
        <nav className="nav bar navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <strong>Tap Room</strong>
            </a>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
}

export default Header;