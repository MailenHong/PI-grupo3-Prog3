import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="container">
            <h1>Nombre de la aplicacion</h1>
            <nav>
                <ul className="nav nav-tabs my-4">
                    <li className="nav-item"><Link to='/' className='nav-link' >Home</Link></li>
                    <li className="nav-item"><Link to='/peliculas' className='nav-link' >Películas</Link></li>
                    <li className="nav-item"><Link to='/series' className='nav-link' >Series</Link></li>
                    <li className="nav-item"><Link to='/favoritas' className='nav-link' >Favoritas</Link></li>


            
                </ul>
            </nav>
        </div>
    )
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