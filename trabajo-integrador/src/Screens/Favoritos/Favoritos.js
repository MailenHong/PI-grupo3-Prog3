import React, { Component } from 'react';
import Card from '../../Components/Card/Card';

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


        idpeliculasFavoritas.map(id => {
            fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=f9fc64e9649ab6801db9ea49129b2146&language=en-US&page=1`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    let elementos = this.state.movies
                    elementos.push(data)
                    this.setState({ movies: elementos })
                })

        })

        idSeriesFavoritas.map(id => {
            fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=f9fc64e9649ab6801db9ea49129b2146&language=en-US&page=1`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    let elementos = this.state.series
                    elementos.push(data)
                    this.setState({ series: elementos })
                })

        })



    }

    render() {
        return (
            <React.Fragment>
                <h2> Peliculas favoritas </h2>
                {
                    <div className="top-data">
                        {this.state.movies.map(serie => (
                            <div className="data-detail">
                                <Card key={serie.id} data={serie} categoria='movie' />
                            </div>
                        ))}
                    </div>
                }

                <h2> Series favoritas </h2>
                {
                    <div className="top-data">
                        {this.state.series.map(serie => (
                            <div className="data-detail">
                                <Card key={serie.id} data={serie} categoria='tv' />
                            </div>
                        ))}
                    </div>
                }
            </React.Fragment>
        )

    }

}


export default Favoritas;
