import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import { connect } from 'react-redux';
import Snackbar from 'material-ui/Snackbar';

import './App.css';

import Ranking from './components/Ranking';
import Score from './components/Score';
import Navigation from './components/Navigation';
import ENDPOINT from './endpoint';

const mapStateToProps = state => ({ snackbar: state.snackbar });
const mapDispatchToProps = (dispatch) => {
  return {
    updateRanking: json => dispatch({ type: 'UPDATE_RANKINGS', payload: json }),
    updatePeople: json => dispatch({ type: 'UPDATE_PEOPLE', payload: json }),
    updateWords: json => dispatch({ type: 'UPDATE_WORDS', payload: json }),
    closeSnackbar: () => dispatch({ type: 'CLOSE_SNACKBAR' })
  };
};

class App extends Component {
  componentWillMount() {
    // fai il fetch
    // quando torni, aggiorna lo stato di redux
    fetch(`${ENDPOINT}/people/ranking`)
      .then(response => response.json())
      .then((json) => {
        console.log('json', json);
        this.props.updateRanking(json);
      })
      .catch(what => console.log('what', what));

    fetch(`${ENDPOINT}/people`)
      .then(response => response.json())
      .then((json) => {
        console.log('json', json);
        this.props.updatePeople(json);
      })
      .catch(what => console.log('what', what));

    fetch(`${ENDPOINT}/words`)
      .then(response => response.json())
      .then((json) => {
        console.log('json', json);
        this.props.updateWords(json);
      })
      .catch(what => console.log('what', what));
  }

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
        <Snackbar
          open={!!this.props.snackbar.message}
          message={this.props.snackbar.message}
          autoHideDuration={4000}
          onRequestClose={this.props.closeSnackbar}
        />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

