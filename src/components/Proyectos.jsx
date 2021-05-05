import React from 'react';
import Proyecto from './Proyecto';
import './styles/proyectos.css'
class Proyectos extends React.Component{

    constructor(props){
        super(props);
        this.state={
            proyectos:[]

        }
       
    }

    render (){
        
        return (
            <div className ="flex section-background" >
                {this.props.proyectos.map((p)=><Proyecto key ={p.nombreCliente} nombreCliente={p.nombreCliente} descripcion={p.descripcion}/>)}
            </div>
        )
    }

}

export default Proyectos;