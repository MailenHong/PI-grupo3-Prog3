import React, { Component } from 'react';
import Card from '../../Components/Card/Card';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import './Buscador.css'

class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cargando: true,
      resultados: []
    };
  }

  componentDidMount() {
    const params = this.props.match.params;
    let tipo = params.tipo;
    let busqueda = params.busqueda;

    fetch(`https://api.themoviedb.org/3/search/${tipo}?api_key=f9fc64e9649ab6801db9ea49129b2146&query=${busqueda}`)
      .then((res) => res.json())
      .then((data) => {
        let lista = [];
        if (data && data.results) {
          lista = data.results;
        }
        this.setState({ resultados: lista, cargando: false });
      })
      .catch(() => {
        this.setState({ resultados: [], cargando: false });
      });
  }

  render() {
    const tipo = this.props.match.params.tipo;

    if (this.state.cargando) {
      return (
        <main className="container">
          <h1>UdeSA Movies</h1>
          <p>Cargando...</p>
        </main>
      );
    }

    if (this.state.resultados.length === 0) {
      return (
        <main className="container">
          <h1>UdeSA Movies</h1>
          <p>No hay resultados....</p>
        </main>
      );
    }

    return (
      <React.Fragment>
        <Header/>
      <main className="container">
        <h1>UdeSA Movies</h1>
        <div className='top-data'>
        {this.state.resultados.map((item) => (
          <div className='data-detail'>
          <Card key={item.id} data={item} categoria={tipo} />
          </div>
        ))}
        </div>
      </main>
      <Footer/>
      </React.Fragment>
    );
    
  }
}

export default Buscador;
