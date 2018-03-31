import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

// import ENDPOINT from '../endpoint';
import { scorePoint } from '../actions';

const mapStateToProps = state => {
  return {
    people: state.people || [],
    words: state.words || []
  }
};

const mapDispatchToProps = dispatch => {
  return {
    scorePoint: (person, word) => dispatch(scorePoint(person, word)),
  };
};

class Score extends Component {
  static propTypes = {
    people: PropTypes.any.isRequired,
    words: PropTypes.any.isRequired,

    scorePoint: PropTypes.func.isRequired,
    // addPoint: PropTypes.func.isRequired,
    // removePoint: PropTypes.func.isRequired,
    // snackbarMessage: PropTypes.func.isRequired,
  }

  state = {
    person: null,
    word: null,
  }

  handleClick = () => {
    this.props.scorePoint(this.state.person, this.state.word)
    this.setState({ person: null, word: null })
  }

  render() {
    return (
      <React.Fragment>
        <Paper style={{margin: '30px'}}>
          <Menu style={{maxWidth: '100%', width: '100%'}}>
            {(this.props.people).map((person) => (
              <MenuItem
                key={person.id}
                checked={this.state.person && this.state.person.id === person.id}
                primaryText={person.name}
                onClick={() => this.setState({person})}
              />
            ))}
          </Menu>
        </Paper>

        <Paper style={{margin: '30px'}}>
          <Menu style={{maxWidth: '100%', width: '100%'}}>
            {(this.props.words).map((word) => (
              <MenuItem
                key={word.id}
                checked={this.state.word && this.state.word.id === word.id}
                primaryText={word.name}
                onClick={() => this.setState({word})}
              />
            ))}
          </Menu>
        </Paper>

        <Paper style={{margin: '30px'}}>
          <RaisedButton label="Segna" primary onClick={this.handleClick} fullWidth />
        </Paper>

      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Score);
