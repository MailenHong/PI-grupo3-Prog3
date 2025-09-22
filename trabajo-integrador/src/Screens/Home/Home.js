import React, { Component } from 'react';
import Card from '../../Components/Card/Card';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import './Home.css'

//componente con estado
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { //estado inicial del estado, priemra vez que el componente se carga
      peliculasPopulares: [],
      seriesTop: [],
      loadingPopulares: true,
      loadingTop: true,
    }
  }
  componentDidMount() {
    //fetch para las pelis mas populares
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=f9fc64e9649ab6801db9ea49129b2146&language=en-US&page=1')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({ peliculasPopulares: data.results, loadingPopulares: false })
      })
    //fetch para las series en top rated
    fetch('https://api.themoviedb.org/3/tv/top_rated?api_key=f9fc64e9649ab6801db9ea49129b2146&language=en-US&page=1')
      .then(res => res.json())
      .then(seriesData => {
        console.log(seriesData)
        this.setState({ seriesTop: seriesData.results, loadingTop: false })
      })
  }

  //funcion cargar mas (mai)
  render() {
    return (
      <React.Fragment>
        <Header />
        <h2 className="peliculasTitulo"> Peliculas más populares </h2>
        {
          (this.state.loadingPopulares == true)
            ? (<h3> Cargando... </h3>)
            : (
              <div className="top-data">
                {this.state.peliculasPopulares.slice(0, 4).map(pelicula => (
                  <div className="data-detail">
                    <Card key={pelicula.id} data={pelicula} categoria='movie' />
                  </div>
                ))}
              </div>
            )}
        <Link to='/peliculas/populares' className="verTodas"> Ver todas</Link>

        <h2 className= "seriesTitulo"> Top rated Series! </h2>
        {
          (this.state.loadingTop == true)
            ? (<h3> Cargando... </h3>)
            : (
              <div className="top-data">
                {this.state.seriesTop.slice(0, 4).map(serie => (
                  <div className="data-detail">
                    <Card key={serie.id} data={serie} categoria='tv' />
                  </div>
                ))}
              </div>
            )}
            <div>
        <Link to='/series/toprated' className="verTodas"> Ver todas</Link>
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}
export default Home;
