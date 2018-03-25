import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';

import ENDPOINT from '../endpoint';

const mapStateToProps = state => ({ people: state.people, words: state.words });
const mapDispatchToProps = (dispatch) => {
  return {
    addPoint: (id) => dispatch({type: 'ADD_POINT', payload: id}),
    removePoint: (id) => dispatch({type: 'REMOVE_POINT', payload: id}),
    snackbarMessage: (message) => dispatch({type: 'UPDATE_SNACKBAR', payload: {message}}),
  };
};

class Score extends Component {
  state = {
    person: null,
    word: null,
  }

  handleClick = () => {
    if (!this.state.person || !this.state.word) return
    const personId = this.state.person.id
    this.props.addPoint(personId)
    this.props.snackbarMessage(`segnando...`);

    this.setState({
      person: null,
      word: null,
    })

    fetch(`${ENDPOINT}/points`, {
      body: JSON.stringify({person_id: this.state.person.id, word_id: this.state.word.id}),
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
    })
      .then(response => {
        console.log(response)
        if (!response.ok) {
          this.props.removePoint(personId)
          console.log("ERRORE!")
          this.props.snackbarMessage(`errore, riprova`);
        return
        }
        response.json()
      })
      .then((json) => {
        console.log(json)
        this.props.snackbarMessage(`segnato`);
      })
      .catch(what => {
        this.props.removePoint(personId)
        this.props.snackbarMessage(`errore, riprova`);
        console.log('what', what)
      });
  }

  render() {
    return (
      <React.Fragment>
        <Paper style={{margin: 30}}>
          <Menu style={{maxWidth: '100%', width: '100%'}}>
            {(this.props.people || []).map((person) => (
              <MenuItem
                checked={this.state.person && this.state.person.id === person.id}
                key={person.id}
                primaryText={person.name}
                onClick={() => this.setState({person})}
              />
            ))}
          </Menu>
        </Paper>

        <Paper style={{margin: 30}}>
          <Menu style={{maxWidth: '100%', width: '100%'}}>
            {(this.props.words || []).map((word) => (
              <MenuItem
                checked={this.state.word && this.state.word.id === word.id}
                key={word.id}
                primaryText={word.name}
                onClick={() => this.setState({word})}
              />
            ))}
          </Menu>
        </Paper>

        <RaisedButton label="Segna" primary onClick={this.handleClick} />
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Score);
