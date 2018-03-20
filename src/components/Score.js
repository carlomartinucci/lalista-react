import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';

const mapStateToProps = state => {};
const mapDispatchToProps = (dispatch) => {
  return {
    addPoint: (id) => dispatch({type: 'ADD_POINT', payload: id}),
    removePoint: (id) => dispatch({type: 'REMOVE_POINT', payload: id})
  };
};

const ENDPOINT = 'http://192.168.1.70:3000';

class Score extends Component {
  state = {
    person: null,
    wordName: null,
  }

  handleClick = () => {
    if (!this.state.person || !this.state.wordName) return
    const personId = this.state.person.id
    this.props.addPoint(personId)

    this.setState( {
      person: null,
      wordName: null,
    })

    fetch(`${ENDPOINT}/points`, {
      body: JSON.stringify({person_id: this.state.person.id, word_id: 660}),
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
        return
        }
        response.json()
      })
      .then((json) => {
        console.log(json)
      })
      .catch(what => {
        this.props.removePoint(personId)
        console.log('what', what)
      });
  }

  render() {
    return (
      <React.Fragment>
        <Paper>
          <Menu>
            {[{name: 'Carlo', id: 112}, {name: 'Alberto', id: 109}, {name: 'Daniel', id: 110}].map((person) => (
              <MenuItem
                checked={this.state.person && this.state.person.id === person.id}
                key={person.id}
                primaryText={person.name}
                onClick={() => this.setState({person})}
              />
            ))}
          </Menu>
        </Paper>

        <Paper>
          <Menu>
            {['cazzo', 'merda', 'blu', 'buon', 'buongiorno'].map((wordName) => (
              <MenuItem
                checked={this.state.wordName === wordName}
                key={wordName}
                primaryText={wordName}
                onClick={() => this.setState({wordName})}
              />
            ))}
          </Menu>
        </Paper>

        <RaisedButton label="Segna" primary onClick={this.handleClick} />
      </React.Fragment>
    )
  }
}

export default connect(null, mapDispatchToProps)(Score);
