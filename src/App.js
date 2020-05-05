import React from 'react';
import 'bulma'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import './styles/style.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './components/Common/Footer'

import Software from './components/Software/Software'
import Design from './components/Design/Design'
import Photography from './components/Photography/Photography';
import Art from './components/Art/Art';
const writing = `
░░░░░██╗░█████╗░███╗░░░███╗███████╗░██████╗  ██████╗░░█████╗░██████╗░██████╗░██╗░░░██╗
░░░░░██║██╔══██╗████╗░████║██╔════╝██╔════╝  ██╔══██╗██╔══██╗██╔══██╗██╔══██╗╚██╗░██╔╝
░░░░░██║███████║██╔████╔██║█████╗░░╚█████╗░  ██║░░██║███████║██████╔╝██████╦╝░╚████╔╝░
██╗░░██║██╔══██║██║╚██╔╝██║██╔══╝░░░╚═══██╗  ██║░░██║██╔══██║██╔══██╗██╔══██╗░░╚██╔╝░░
╚█████╔╝██║░░██║██║░╚═╝░██║███████╗██████╔╝  ██████╔╝██║░░██║██║░░██║██████╦╝░░░██║░░░
░╚════╝░╚═╝░░╚═╝╚═╝░░░░░╚═╝╚══════╝╚═════╝░  ╚═════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚═════╝░░░░╚═╝░░░`

const quote = `

"All right," said Deep Thought. "The Answer to the Great Question..."
"Yes..!"
"Of Life, the Universe and Everything..." said Deep Thought.
"Yes...!"
"Is..." said Deep Thought, and paused.
"Yes...!"
"Is..."
"Yes...!!!...?"
"Forty-two," said Deep Thought, with infinite majesty and calm.”
    ― Douglas Adams, The Hitchhiker's Guide to the Galaxy`

function App() {
  console.log(writing)
  console.log(quote)
  AOS.init()
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/fineart' component={Art} />
        <Route path='/photography' component={Photography} />
        <Route path='/design' component={Design} />
        <Route exact path='/' component={Software} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
