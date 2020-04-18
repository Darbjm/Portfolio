import React from 'react';
import 'bulma'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import './styles/style.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './components/Common/Footer'

import Software from './components/Software/Software'
import Design from './components/Design/Design'

function App() {
  AOS.init()
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/design' component={Design} />
        <Route exact path='/' component={Software} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
