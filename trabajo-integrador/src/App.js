import React from 'react'
import Header from '../src/Components/Header/Header'
import Footer from '../src/Components/Footer/Footer';
import {Switch, Route} from 'react-router-dom'
import Home from './Screens/Home/Home';
import Detalle from './Screens/Detalle/Detalle';
import NotFound from './Screens/NotFound/NotFound';
import PaginaListado from './Screens/ListadoPeliculas/PaginaListado'
import './css/styles.css';
import Series from './Screens/Series/Series';
import Peliculas from './Screens/Peliculas/Peliculas';
function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path= '/' component = {Home} exact = {true} />
        <Route path= '/detalle/:id' component = {Detalle}/>
        <Route path = '/peliculas/:tipo' component = {PaginaListado}/>
        <Route path = '/series/:tipo' component = {PaginaListado}/>
        <Route path = '' component= {NotFound}/>
        <Route path="/peliculas/populares" element={<Peliculas />} />
        <Route path="/series/toprated" element={<Series />} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
