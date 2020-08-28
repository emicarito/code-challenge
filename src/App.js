import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import './App.scss';
import { Navbar } from './app/components/navbar/Navbar';
import { Home } from './app/components/home/Home'
import GistDetail from './app/components/gist/GistDetail'


function App() {
  return (
    <React.Fragment>
      <Router Router >
        <header className="header">
          <Navbar />
        </header>
        <div className="App">
          <Switch>
            <Route
              exact
              path="/"
              component={Home}
            />
            <Route
              exact
              path="/:id"
              component={GistDetail}
            />
          </Switch>
        </div>
      </Router >

    </React.Fragment>
  );
}

export default App;
