import React, { Component } from 'react';
import './Detalle.css'


//componente con estado

class Detalle extends Component {
    constructor(props) {
        super(props);
        this.state = { //estado inicial del estado, priemra vez que el componente se carga
            data: [],
            loading: true,

        }
    }
    componentDidMount() {
        console.log(this.props)
        const { id } = this.props.match.params
        const query = new URLSearchParams(this.props.location.search)
        const tipo = query.get('tipo') || "movie" //default movie si falta, controlar bien 
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=f9fc64e9649ab6801db9ea49129b2146&language=en-US&page=1`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({ data: data, loading: false })
            })

    }
    render() {
        if (this.state.loading == true) {
            return <h3> Cargando...</h3>
        }
        return (
            <React.Fragment>
                <h2 className="alert alert-primary">{this.state.data.title || this.state.data.name}</h2>
                <section className="cards detalle">
                    <img
                        className="col-md-6"
                        src={`https://image.tmdb.org/t/p/w500${this.state.data.poster_path}`}
                        alt={this.state.data.title || this.state.data.name}
                    />
                    <section className="col-md-6 info">
                        <h3>Descripción</h3>
                        <p className="description">{this.state.data.overview}</p>
                        <p className="mt-0 mb-0" ><strong>Fecha de estreno:</strong> {this.state.data.release_date}</p>
                        {this.state.data.runtime ? (
                            <p className="mt-0 mb-0 length"><strong>Duración:</strong> {this.state.data.runtime} min</p>
                        ) : null}
                        <p className="mt-0" ><strong>Puntuación:</strong> {this.state.data.vote_average}</p>
                        <p className="mt-0 mb-0"><strong>Género: </strong> {this.state.data.genres.map(genre => genre.name).join(', ')}</p>
                    </section>
                </section>





            </React.Fragment>

        )
    }




}
export default Detalle;




