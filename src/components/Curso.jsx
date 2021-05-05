import icono from "../assets/notebook.svg";
import "./styles/curso.css";
const Curso = (props) => {
  return (
    <div>
      <div className="centered">
        <div className="dinblock">
          <img className="icono" src={icono} alt="icono" />
        </div>
        <div className="dinblock">
          <h3>{props.nombre}</h3>
          <p>{props.entidad}</p>
          <span>
            {props.inicio}-{props.fin}
          </span>
        </div>
      </div>
    </div>
  );
};
export default Curso;
