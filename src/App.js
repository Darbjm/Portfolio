import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Software from './components/Software'
import './styles/normal.scss'



function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Switch>
        <Route path="/software" component={Software} />
      </Switch>
  </BrowserRouter>
  );
}

export default App;
