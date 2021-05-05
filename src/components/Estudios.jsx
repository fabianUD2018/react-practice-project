import react from "react";
import Curso from "./Curso";
class Estudios extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      cursos: [
        {
          nombre: "Pregrado en ingenieria de sistemas",
          entidad: "Universidad distrital francisco jose de caldas.",
          inicio: 2014,
          fin: 2020,
        },

        {
          nombre: "Curso Práctico de Django: Aprende Creando 3 Webs",
          entidad: "Udemy",
          inicio: 2019,
          fin: 2019,
        },

        {
          nombre: "Curso de React.js",
          entidad: "Platzi",
          inicio: 2020,
          fin: 2020,
        },

        {
          nombre: "Front-End JavaScript Frameworks: Angular",
          entidad: "Coursera",
          inicio: 2020,
          fin: 2020,
        },

        {
          nombre: "Full Stack: Angular and Spring Boot",
          entidad: "Udemy",
          inicio: 2020,
          fin: 2020,
        },
      ],
    };
  }

  render() {
    return (
      <div>
        {this.state.cursos.map((c) => (
          <Curso
            key={c.nombre}
            nombre={c.nombre}
            entidad={c.entidad} 
            inicio={c.inicio}
            fin={c.fin}
          />
        ))}
      </div>
    );
  }
}

export default Estudios;
