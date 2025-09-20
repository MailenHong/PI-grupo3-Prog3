import React,{Component} from "react";
import Card from '../../Components/Card/Card';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

class Peliculas extends Component {
  constructor(props){
    super(props);
    this.state = {
      peliculasPopulares : [],
      seriesTop : [],
      loadingPopulares: true,
      loadingTop: true,
      page: 2,
      dataFiltrada: [],
      valorInput:'',
    };
  }
  
  componentDidMount(){
    // fetch para las pelis más populares
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=f9fc64e9649ab6801db9ea49129b2146&language=en-US&page=1')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ peliculasPopulares: data.results, loadingPopulares: false });
      });
      }

  cargarMas(){
    //fetch para las pelis mas populares
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=f9fc64e9649ab6801db9ea49129b2146&language=en-US&page=${this.state.page}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({
          peliculasPopulares: this.state.peliculasPopulares.concat(data.results), 
          page: this.state.page + 1
        });
      });
  };

  filtro(e){
    console.log(e)
    let valorEscrito = e.target.value.toLowerCase();
    let dataFiltrada = this.state.peliculasPopulares.filter(unaPelicula => 
    unaPelicula.title ? unaPelicula.title.toLowerCase().includes(valorEscrito) : false
    );
    this.setState({
      dataFiltrada, valorInput: e.target.value
    });
  }

  render() {
    const { peliculasPopulares, dataFiltrada, valorInput, loadingPopulares } = this.state;
    const lista = valorInput ? dataFiltrada : peliculasPopulares;

    return (
      <React.Fragment>
        <Header />

        <h2> Peliculas más populares </h2>
        <h3> Cargando... </h3>
        <form onSubmit={(e)=> e.preventDefault()} className="formulario-busqueda">
          <input
            type="text"
            placeholder="Filtrar por título..."
            value={valorInput}
            onChange={this.filtro}
            className="campo-busqueda"
          />
        </form>

        {this.state.loadingPopulares === true ? (
          <h3>Cargando...</h3>
        ) : (
          <section className="lista-peliculas">
            {lista.length === 0 ? (
              <p> No hay resultados{valorInput ? ` para “${valorInput}”` : ''}.</p>
            ) : (
              lista.slice(0, 12).map(Peliculas => (
                <Card key={Peliculas.id} data={Peliculas} categoria="movie" />
              ))
            )}
          </section>
        )}

        <div className="contenedor-boton">
          <button type="button" onClick={this.cargarMas} className="boton-cargar">
            Cargar más
          </button>
        </div>

        <Link to="/peliculas/populares" className="link-ver-todas">
          Ver todas
        </Link>

        <Footer />
      </React.Fragment>
    );
  }
}

export default Peliculas;
