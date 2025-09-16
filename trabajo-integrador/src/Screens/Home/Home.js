import React, { Component } from 'react';
import Card from '../../Components/Card/Card';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';


//componente con estado

class Home extends Component{
    constructor(props){
        super(props);
        this.state = { //estado inicial del estado, priemra vez que el componente se carga
            peliculasPopulares : [],
            peliculasTop : [],
            loadingPopulares: true,
            loadingTop: true,
            

        }
    }
    componentDidMount(){
        //fetch para las pelis mas populares
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=f9fc64e9649ab6801db9ea49129b2146&language=en-US&page=1')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.setState({peliculasPopulares: data.results, loadingPopulares: false})
        })
        //fetch para las pelis en top rated
        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=f9fc64e9649ab6801db9ea49129b2146&language=en-US&page=1')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.setState({peliculasTop: data.results, loadingTop: false})
        })

    }

    //funcion cargar mas (mai)
    render(){
        return(
            <React.Fragment>
                 <Header />
                <h2> Peliculas más populares </h2>
                {
                ( this.state.loadingPopulares ==true) ? <h3> Cargando... </h3> :
                this.state.peliculasPopulares.slice(0,4).map(pelicula => <Card data = {pelicula}/>)}
                <h2> Top rated </h2>
                <Link to= '/peliculas/populares'> Ver todas</Link>
                {
                ( this.state.loadingTop ==true) ? <h3> Cargando... </h3> :
                this.state.peliculasTop.slice(0,4).map(pelicula => <Card data = {pelicula}/>)}
                 <Link to= '/peliculas/toprated'> Ver todas</Link>
                 


                 <Footer />
            </React.Fragment> //falta boton de agregar y quitar de favoritos, crear pagina asi agregamos el componente
        )
    }


}
export default Home;

