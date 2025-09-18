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
            seriesTop : [],
            loadingPopulares: true,
            loadingTop: true,
            page: 2,
            dataFiltrada: [],
            valorInput:''
            

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
        //fetch para las series en top rated
        fetch('https://api.themoviedb.org/3/tv/top_rated?api_key=f9fc64e9649ab6801db9ea49129b2146&language=en-US&page=1') 
        .then(res => res.json())
        .then(seriesData => {
            console.log(seriesData)
            this.setState({seriesTop: seriesData.results, loadingTop: false})
        })

    }

    cargarMas(){
        //fetch para las pelis mas populares
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=f9fc64e9649ab6801db9ea49129b2146&language=en-US&page=${this.state.page}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.setState({peliculasPopulares:this.state.peliculasPopulares.concat (data.results), page: this.state.page + 1});
        })
    }

    filtro(e){
        console.log(e)
        let valorEscrito = e.target.value.toLowerCase();

        let dataFiltrada = this.state.peliculasPopulares.filter(unaPelicula => {    return unaPelicula.title.toLowerCase().includes(valorEscrito.toLowerCase())}
    )
          console.log(dataFiltrada);

        this.setState({dataFiltrada: dataFiltrada, valorInput: e.target.value})
    }


    render(){
        return(
            <React.Fragment>
                 <Header />
                <h2> Peliculas más populares </h2>
                <form>
                    <input placeholder='filtrar' onChange={(e) => this.filtro(e)}/>
                </form>
                {
                ( this.state.loadingPopulares ==true) ? <h3> Cargando... </h3> :
                this.state.loading == '' ? this.state.peliculasPopulares.slice(0,4).map(pelicula => <Card key = {pelicula.id} data = {pelicula} categoria = "movie"/>): this.state.dataFiltrada.map(unaPelicula=> <Card data={unaPelicula}/>)}
                <Link to= '/peliculas/populares'> Ver todas</Link>
                <button onClick={()=> this.cargarMas()}>Cargar mas</button>
                
                <h2> Top rated Series! </h2>
                {
                ( this.state.loadingTop ==true) ? <h3> Cargando... </h3> :
                this.state.seriesTop.slice(0,4).map(serie => <Card key = {serie.id} data = {serie} categoria = "tv"/>)}
                 <Link to= '/series/toprated'> Ver todas</Link>
                 <button onClick={()=> this.cargarMas()}>Cargar mas</button>


                 <Footer />
            </React.Fragment> //falta boton de agregar y quitar de favoritos, crear pagina asi agregamos el componente
        )
    }


}
export default Home;

