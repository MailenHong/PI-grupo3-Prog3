import React from 'react'
import Header from '../src/Components/Header/Header'
import Footer from '../src/Components/Footer/Footer';
import {Switch, Route} from 'react-router-dom'
import './css/styles.css';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
