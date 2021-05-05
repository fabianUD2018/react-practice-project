import React from "react";
import './styles/header.css'

function Header (props) {
  
    return (
      <React.Fragment>
      <nav className="header_background">
        <ul className ="flex-header flex-row">
          <li>Home</li>
          <li>Proyectos en los que he trabajado</li>
          <li>About</li>
        </ul>
      </nav>
      </React.Fragment>
    );
  
}

export default Header;
