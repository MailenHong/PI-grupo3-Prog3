import React from 'react'
import Header from '../src/Components/Header/Header'
import Footer from '../src/Components/Footer/Footer';
import {Switch, Route} from 'react-router-dom'
import Home from './Screens/Home/Home';
import Detalle from './Screens/Detalle/Detalle';
import NotFound from './Screens/NotFound/NotFound';
import PaginaListado from './Screens/ListadoPeliculas/PaginaListado'
import Favoritas from './Screens/Favoritos/Favoritos'
import './css/styles.css';

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path= '/' component = {Home} exact = {true} />
        <Route path= '/detalle/:tipo/:id' component = {Detalle} exact = {true}/>
        <Route path = '/peliculas/:tipo' component = {PaginaListado} exact = {true}/>
        <Route path = '/series/:tipo' component = {PaginaListado} exact = {true}/>
        <Route path = '/favoritas' component= {Favoritas} exact = {true}/>
        <Route path = '' component= {NotFound}/>
      </Switch>
    </React.Fragment>
  );
}

export default App;
