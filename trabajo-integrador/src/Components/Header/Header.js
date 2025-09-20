import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom'

class Header extends Component{
    constructor(props){
        super(props);
        this.state ={
            busqueda: ""
        };
    }
    filtro(e){
        this.setState({busqueda: e.target.value});
    }

    handleSubmit(e){
        e.preventDefault();
        console.log('Buscaste:', this.state.busqueda);
        //this.props.history.push(`/resultados/${this.state.busqueda}`)
    }

render(){
    return (
        <div className="container">
            <h1>UdeSA Movies</h1>
            <nav>
                <ul className="nav nav-tabs my-4">
                    <li className="nav-item"><Link to='/' className='nav-link' >Home</Link></li>
                    <li className="nav-item"><Link to='/peliculas' className='nav-link' >Películas</Link></li>
                    <li className="nav-item"><Link to='/series' className='nav-link' >Series</Link></li>
                    <li className="nav-item"><Link to='/favoritas' className='nav-link' >Favoritas</Link></li>
                </ul>

                <form className='search-form' onSubmit={(e) => this.handleSubmit(e)}>
                    <input
                        type="text"
                        name="busqueda"
                        placeholder="Buscar..."
                        value={this.state.busqueda}
                        onChange={(e) => this.filtro(e)}
                    />
                    <button type='submit'>
                        Buscar
                    </button>

                </form>
            </nav>
        </div>
    )
}

}

export default Header;

/* clase coreccta, corregir!! class="nav-link" 
<!-- Buscador -->
<form class="search-form" action="results.html" method="get">
<input type="text" class="" name="searchData" placeholder="Buscar..." value="">
<button type="submit" class="btn btn-success btn-sm">Buscar</button>
</form>
</nav>
*/