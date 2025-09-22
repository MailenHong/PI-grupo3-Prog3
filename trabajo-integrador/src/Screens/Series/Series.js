import React,{Component} from "react";
import Card from '../../Components/Card/Card';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import './Series.css'

class Series extends Component {
  constructor(props){
    super(props);
    this.state = {
      seriesPopulares : [],
      loadingTop: true,
      page: 2,
      dataFiltrada: [],
      valorInput:'',
    };
  }
  
  componentDidMount(){
    fetch('https://api.themoviedb.org/3/tv/top_rated?api_key=f9fc64e9649ab6801db9ea49129b2146&language=en-US&page=1')
      .then(res => res.json())
      .then(seriesData => {
this.setState({
  seriesPopulares: (seriesData && seriesData.results) ? seriesData.results : [],
  loadingTop: false});      
})
      .catch(() => this.setState({ loadingTop: false }));
  }

  cargarMas(){
    fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=f9fc64e9649ab6801db9ea49129b2146&language=en-US&page=${this.state.page}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          seriesPopulares: this.state.seriesPopulares.concat(data.results), 
          page: this.state.page + 1
        });
      });
  };

  filtro(e){
    const valorEscrito = e.target.value.toLowerCase();
    const dataFiltrada = this.state.seriesPopulares.filter(unaSerie => 
    unaSerie.name ? unaSerie.name.toLowerCase().includes(valorEscrito) : false
    );
    this.setState({ dataFiltrada, valorInput: e.target.value });
  }

  render() {
    const { seriesPopulares, dataFiltrada, valorInput, loadingTop } = this.state;
    const lista = valorInput ? dataFiltrada : seriesPopulares;

    return (
      <React.Fragment>
        <Header />
        <main className= "container">

        <h2 className='alert-warning'> Todas las series </h2>

        <form onSubmit={(e)=> e.preventDefault()} className="formulario-busqueda">
          <input
            type="text"
            placeholder="Filtrar por nombre..."
            value={valorInput}
            onChange={(e)=> this.filtro(e)}
            className="campo-busqueda"
          />
        </form>

        {loadingTop === true ? (
          <h3>Cargando...</h3>
        ) : (
          <section className="lista-peliculas">
            {lista.length === 0 ? (
              <p>No hay resultados{valorInput ? ` para “${valorInput}”` : ''}.</p>
            ) : (
              lista.map(serie => (
                <div className= "data-detail">
                <Card key={serie.id} data={serie} categoria="tv" />
                </div>
              ))
            )}
          </section>
        )}

        <div className="contenedor-boton">
          <button type="button" onClick={()=> this.cargarMas()} className="boton-cargar">
            Cargar más
          </button>
        </div>
        </main>

        <Footer />
      </React.Fragment>
    );
  }
}

export default Series;
