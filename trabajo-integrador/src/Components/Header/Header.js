import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div class="container">
            <h1>Nombre de la aplicacion</h1>
            <nav>
                <ul class="nav nav-tabs my-4">
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