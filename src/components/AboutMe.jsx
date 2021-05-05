
import icono from '../assets/perfil.svg';
import  '../components/styles/aboutMe.css'
let AboutMe =(props)=>   {
    return (
        <div className="container">
        <img className="logo" src ={icono} alt="avatar"></img>
        <p className ="descripcion">
            Ingeniero de sistemas. Egresado de la universidad distrital, con conocimientos en lenguajes de programacion java, python, javascript,
            html, css.
            He trabajado en proyectos que involucran Java, Angular y lenguaje PL/SQL.

            En estos he tenido la oportunidad de trabajar con los siguientes frameworks y/o librerias.

            Spring boot.
            Spring Data JPA.
            Spring Security.
            JUnit.
            Mockito.
            Swagger.
            Angular V 8+.
            React.
            Bootstrap.
            MaterialDesign.  
        </p>
        </div>

    )
}



export default AboutMe;