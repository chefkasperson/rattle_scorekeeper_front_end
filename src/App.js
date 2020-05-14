import React from 'react';
import Navbar from './components/layout/Navbar'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import About from './components/about/About'
import NewGame from './components/game/NewGame'
import Home from './components/home/Home'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/create' component={NewGame} />
          <Route path='/about' component={About} />
        </Switch>
        <h1 className="container grey-text">Hello World</h1>
      </div>
    </BrowserRouter>
  );
}

export default App;
