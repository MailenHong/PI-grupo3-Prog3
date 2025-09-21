import React from 'react'
import Header from '../src/Components/Header/Header'
import Footer from '../src/Components/Footer/Footer';
import {Switch, Route} from 'react-router-dom'
import Home from './Screens/Home/Home';
import Detalle from './Screens/Detalle/Detalle';
import NotFound from './Screens/NotFound/NotFound';
import Favoritas from './Screens/Favoritos/Favoritos'
import './css/styles.css';
import Series from './Screens/Series/Series';
import Peliculas from './Screens/Peliculas/Peliculas';

function App() {
  return (
    <React.Fragment>
      
      <Switch>
        <Route path= '/' component = {Home} exact = {true} />
        <Route path= '/detalle/:tipo/:id' component = {Detalle} exact = {true}/>
        <Route path = '/peliculas/:tipo' component = {Peliculas} exact = {true}/>
        <Route exact path="/peliculas" component={Peliculas} />
        <Route path = '/series/:tipo' component = {Series} exact = {true}/>
        <Route path = '/series' component = {Series} exact = {true}/>
        <Route path = '/favoritas' component= {Favoritas} exact = {true}/>
        <Route path = '' component= {NotFound}/>
      </Switch>
    </React.Fragment>
  );
}

export default App;
