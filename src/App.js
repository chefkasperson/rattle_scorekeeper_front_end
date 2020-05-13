import React from 'react';
import Navbar from './components/layout/Navbar'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import About from './components/about/About'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path='/about' component={About} />
        </Switch>
        <h1 className="container grey-text">Hello World</h1>
      </div>
    </BrowserRouter>
  );
}

export default App;
