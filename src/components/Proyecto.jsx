import React from "react";
import './styles/proyecto.css';
function Proyecto(props) {
  return (
    <React.Fragment>
      <div className="item">
        <div className="item-header">
          <h3>Cliente</h3>
          <p>{props.nombreCliente}</p>
        </div>
        <div className="item-descripcion">
          <h3>Descripcion</h3>
          <p>{props.descripcion}</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Proyecto;
