import React, { Component } from 'react';
import Card from '../../Components/Card/Card';

class Resultados extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cargando: true,
      resultados: []
    };
  }

  componentDidMount() {
    const params = this.props.match.params;
    const tipo = params.tipo;
    let busqueda = '';
    if (params.busqueda) {
      busqueda = params.busqueda
    }

    const url = `https://api.themoviedb.org/3/search/${tipo}?api_key=TU_API_KEY&query=${busqueda}`;

    fetch(url)
      .then(function(res) { return res.json(); })
      .then((data) => {
        let lista = [];
        if (data) {
          if (data.results) {
            lista = data.results;
          }
        }
        this.setState({ resultados: lista, cargando: false });
      })
      .catch(() => {
        this.setState({ resultados: [], cargando: false });
      });
  }

  render() {
    const tipo = this.props.match.params.tipo;

    if (this.state.cargando === true) {
      return (
        <main className="container">
          <h1>UdeSA Movies</h1>
          <h1>Cargando...</h1>
        </main>
      );
    }

    if (this.state.resultados.length === 0) {
      return (
        <main className="container">
          <h1>UdeSA Movies</h1>
          <p>No hay resultados.</p>
        </main>
      );
    }

    return (
      <main className="container">
        <h1>UdeSA Movies</h1>
        {this.state.resultados.map(function(item) {
          return <Card key={item.id} data={item} categoria={tipo} />;
        })}
      </main>
    );
  }
}

export default Resultados;
