import React from 'react';
import Navbar from './components/layout/Navbar'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import About from './components/about/About'
import NewGame from './components/game/NewGame'
import Home from './components/home/Home'
import Dashboard from './components/dashboard/Dashboard'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/create' component={NewGame} />
          <Route path='/about' component={About} />
          <Route path='/games/:id' component={Dashboard} />
        </Switch>
        <h1 className="container grey-text">Hello World</h1>
      </div>
    </BrowserRouter>
  );
}

export default App;
