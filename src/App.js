import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';

import './App.css';

import Ranking from './components/Ranking';
import Score from './components/Score';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar
          title="LaLista"
          showMenuIconButton={false}
        />

        <Switch>
          <Route path="/ranking" component={Ranking}/>
          <Route path="/score" component={Score}/>
          <Route component={Ranking}/>
        </Switch>

        <Navigation/>
      </div>
    );
  }
}

export default App;
