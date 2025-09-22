import React, { Component } from 'react';
import Card from '../../Components/Card/Card';
import Header from '../../Components/Header/Header'

class Favoritas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            series: []
        }
    }

    componentDidMount() {
        let idpeliculasFavoritas = JSON.parse(localStorage.getItem('peliculasFavs'))

        let idSeriesFavoritas = JSON.parse(localStorage.getItem('seriesFavs'))

        if (idSeriesFavoritas !== null) {
            let elementos = this.state.series
            idSeriesFavoritas.map(id => {
                fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=f9fc64e9649ab6801db9ea49129b2146&language=en-US&page=1`)
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        elementos.push(data)
                        this.setState({ series: elementos })
                    })

            })
        }

        if (idpeliculasFavoritas !== null) {
            let elementos = this.state.movies
            idpeliculasFavoritas.map(id => {
                fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=f9fc64e9649ab6801db9ea49129b2146&language=en-US&page=1`)
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        elementos.push(data)
                        this.setState({ movies: elementos })
                    })

            })

        }





    }

    render() {
        return (
            <React.Fragment>
                <Header></Header>
                <h2> Peliculas favoritas </h2>
                { this.state.movies.length > 0 ? 
                <div className="top-data">
                        {this.state.movies.map(serie => (
                            <div className="data-detail">
                                <Card key={serie.id} data={serie} categoria='movie' />
                            </div>
                        ))}
                    </div>

                    : <p>Sin pelis favoritas</p>
                }

                <h2> Series favoritas </h2>
                { this.state.series.length > 0 ? 
                    <div className="top-data">
                        {this.state.series.map(serie => (
                            <div className="data-detail">
                                <Card key={serie.id} data={serie} categoria='tv' />
                            </div>
                        ))}
                    </div>

                    :<p>Sin series favoritas</p>
                }
            </React.Fragment>
        )

    }

}


export default Favoritas;