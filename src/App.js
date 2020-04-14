import React from 'react';
import 'bulma'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import './styles/style.scss'

import Software from './components/Software/Software'
import Navbar from './components/Navbar'
import Design from './components/Design/Design'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path='/design' component={Design} />
        <Route exact path='/' component={Software} />
      </Switch>
  </BrowserRouter>
  );
}

export default App;
