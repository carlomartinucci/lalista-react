import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Route, Switch, withRouter } from 'react-router-dom';

import { connect } from 'react-redux';

import AppBar from 'material-ui/AppBar';
import Snackbar from 'material-ui/Snackbar';

// import ENDPOINT from './endpoint';
import { updateAll } from './actions';

import './App.css';
import Ranking from './components/Ranking';
import Score from './components/Score';
import Navigation from './components/Navigation';


const mapStateToProps = state => ({ snackbar: state.snackbar });
const mapDispatchToProps = (dispatch) => {
  return {
    updateAll: () => dispatch(updateAll()),
    closeSnackbar: () => dispatch({ type: 'CLOSE_SNACKBAR' })
  };
};

class App extends Component {
  static propTypes = {
    updateAll: PropTypes.func.isRequired,
    closeSnackbar: PropTypes.func.isRequired,
    snackbar: PropTypes.any,
  }

  componentDidMount() {
    this.props.updateAll();
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <AppBar
            title="LaLista"
            showMenuIconButton={false}
          />
        </div>

        <div className="main">
          <Switch>
            <Route path="/ranking" component={Ranking}/>
            <Route path="/score" component={Score}/>
            <Route component={Ranking}/>
          </Switch>
        </div>

        <div className="footer">
          <Navigation />
        </div>
        <Snackbar
          open={this.props.snackbar.open}
          message={this.props.snackbar.message}
          autoHideDuration={4000}
          onRequestClose={this.props.closeSnackbar}
        />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

