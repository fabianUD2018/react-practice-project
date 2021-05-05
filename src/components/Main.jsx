import React from 'react';
import AboutMe from './AboutMe';
import Proyectos from './Proyectos';
import Estudios from './Estudios';
class Main extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <AboutMe></AboutMe>
                <Proyectos proyectos ={this.obtenerProyectos()}></Proyectos>
                <Estudios />
            </div>
            
        )
    }

 obtenerProyectos =()=>{
        return [{
            nombreCliente :"Itau",
            descripcion: "Desarrollo en la herramienta oracle data integrator. Extraccion, Transformacion y carga de datos para la bodega de datos del banco itau."
        }, 
        {
            nombreCliente :"Accion fiduciaria",
            descripcion: "Desarrollo de una aplicacion Spring boot, Angular y PL/Sql."
        },
        {
            nombreCliente :"Fiduprevisora",
            descripcion: "Desarrollo de una aplicación de liquidacion de fallos judiciales en Angular 8 y Spring boot."
        },
        {
            nombreCliente :"Nueva Eps",
            descripcion: "Desarrollo Spring boot, Angular, Migracion de aplicaciones a Jboss EAP, Desarrollo React. "
        },]
    }

}

export default Main;