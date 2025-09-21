import React, { Component } from 'react';
import './Card.css'
import {Link} from 'react-router-dom'


class Card extends Component {
    constructor(props) {
        super(props);
        this.state = { //estado inicial del estado, priemra vez que el componente se carga
            mostrarDescripcion: false,
            mensajeBoton: 'Mostrar descripción',
            esFavorito: false,
            mensajeFav: ''
        }
    }
    switchDescripcion(){
        if(this.state.mostrarDescripcion == true){
            this.setState({mostrarDescripcion: false, mensajeBoton: 'Mostrar descripción'})
        } else{
            this.setState({mostrarDescripcion:true, mensajeBoton: 'Ocultar descripción'})
        }
    }

    switchFavorito() {
        let elementosFavoritos = []

        if (this.props.categoria == 'movie') {
            elementosFavoritos = JSON.parse(localStorage.getItem('peliculasFavs'))
        } else {
            elementosFavoritos = JSON.parse(localStorage.getItem('seriesFavs'))
        }

        let elementosNuevos = []

        if (elementosFavoritos != null) {
            elementosNuevos = elementosFavoritos
        }

        if(elementosNuevos.includes(this.props.data.id)){
            elementosNuevos = elementosFavoritos.filter(id => {
                return id != this.props.data.id
            })
            this.setState({esFavorito: false, mensajeFav: 'Añadir como favorito'})
        } else{
            elementosNuevos.push(this.props.data.id)
            this.setState({esFavorito:true, mensajeFav: 'Quitar favorito'})
        }
         if (this.props.categoria == 'movie') {
            localStorage.setItem('peliculasFavs', JSON.stringify(elementosNuevos))
        } else {
            localStorage.setItem('seriesFavs', JSON.stringify(elementosNuevos))

        }
        console.log(localStorage)
    }


    componentDidMount() {
     let elementosFavoritos = []

        if (this.props.categoria == 'movie') {
            elementosFavoritos = JSON.parse(localStorage.getItem('peliculasFavs'))
        } else {
            elementosFavoritos = JSON.parse(localStorage.getItem('seriesFavs'))
        }
        if(elementosFavoritos == null){
            elementosFavoritos = []
        }
        if(elementosFavoritos.includes(this.props.data.id)){
            this.setState({esFavorito: false, mensajeFav: 'Quitar favorito'})
        } else{
            this.setState({esFavorito:true, mensajeFav: 'Añadir como favorito'})
        }


    }
    
    render() {
        const ocultarAcciones = this.props.ocultarAcciones === true;
        const tipo = this.props.categoria
        return (
            <div>
                <div>
                    <p>{this.props.data.title || this.props.data.name}</p>
                    <img src={`https://image.tmdb.org/t/p/w342${this.props.data.poster_path}`}
                    alt={this.props.data.title || this.props.data.name} />

                    <button onClick = {() => this.switchDescripcion()}>
                        {this.state.mensajeBoton}
                    </button>
                    {this.state.mostrarDescripcion ? <p> {this.props.data.overview} </p> : ''}
                    <Link to = {`/detalle/${tipo}/${this.props.data.id}`}> Ir al detalle </Link>
                    <button onClick = {() => this.switchFavorito()}>
                        {this.state.mensajeFav}
                    </button>
                </div>
            
 
            </div>
        )
    }
}





export default Card;
