import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import "./Formulario.css"

class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = { busqueda: '', tipo: 'movie' };

    this.controlarForm = (e) => {
      e.preventDefault();
      const texto = this.state.busqueda;
      if (texto.length === 0) return;
      this.props.history.push('/buscar/' + this.state.tipo + '/' + texto);
    };

    this.controlarInput = (e) => {
      this.setState({ busqueda: e.target.value });
    };

    this.controlarRadio = (e) => {
      this.setState({ tipo: e.target.value });
    };
  }

  render() {
    return (
      <form className="search-form" onSubmit={this.controlarForm}>
        <input
          type="text"
          placeholder="Buscar…"
          value={this.state.busqueda}
          onChange={this.controlarInput}
          name="searchData"
          className="search"
        />
        <div className='pelse'>
        <label>
          <input
            type="radio"
            name="tipo"
            value="movie"
            onChange={this.controlarRadio}
            checked={this.state.tipo === 'movie'}
          />
          Películas
        </label>

        <label>
          <input
            type="radio"
            name="tipo"
            value="tv"
            onChange={this.controlarRadio}
            checked={this.state.tipo === 'tv'}
          />
          Series
        </label>
      </div>
        <button type="submit" className="boton">Buscar</button>
      </form>
    );
  }
}

export default withRouter(Formulario);
