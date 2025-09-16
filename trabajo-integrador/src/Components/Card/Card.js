import React, { Component } from 'react';
import './Card.css'
import {Link} from 'react-router-dom'


class Card extends Component {
    constructor(props) {
        super(props);
        this.state = { //estado inicial del estado, priemra vez que el componente se carga
            mostrarDescripcion: false,
            mensajeBoton: 'Mostrar descripción',
            esFavorito: false
            


        }
    }
    switchDescripcion(){
        if(this.state.mostrarDescripcion == true){
            this.setState({mostrarDescripcion: false, mensajeBoton: 'Mostrar descripción'})
        } else{
            this.setState({mostrarDescripcion:true, mensajeBoton: 'Ocultar descripción'})
        }

    }
    render() {
        return (
            <div>
                <p> {this.props.data.title}</p>
                <img
                    src={`https://image.tmdb.org/t/p/w342${this.props.data.poster_path}`}
                    alt={this.props.data.title}
                />
                <button onClick = {()=>this.switchDescripcion()}> {this.state.mensajeBoton} </button>
                {this.state.mostrarDescripcion ? <p> {this.props.data.overview}</p> : ''}
                <Link to= {`/detalle/${this.props.data.id}`}> Ir al detalle </Link>
           
            </div>
        )
    }
}





export default Card;