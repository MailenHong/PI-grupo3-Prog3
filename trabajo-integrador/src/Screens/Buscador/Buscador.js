import React, { Component } from 'react';
import Card from '../../Components/Card/Card';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';


class Buscador extends Component{
  constructor(props){
    super(props);
    this.state = {
      peliculas: [],
      loadingPopulares: true
    };
  } 

  componentDidMount(){
    let urlSearchParams = new URLSearchParams(this.props.location.search)
    let busqueda = urlSearchParams.get('busqueda')

    fetch(`https://api.themoviedb.org/3/search/${busqueda}`)// no anda
      .then(res => res.json())
      .then(data => {
        this.setState({peliculasPopulares: data.results, loadingPopulares,seriesTop: seriesData.results, loadingTop: false})
        console.log(data)
      })
  }

  render(){
    return(
      <React.Fragment>
        <Header/>
        {
          (this.state.loadingPopulares == true)
            ? <p>Cargando...</p>
            : this.state.peliculas.map(unaPelicula => (
                <Card data={unaPelicula}/>
              ))
        }
        <Footer/>
      </React.Fragment>
    )
  }
}

export default Buscador;
