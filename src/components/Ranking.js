import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import logo from './../logo.svg';
import LogLifecyle from 'react-log-lifecycle';

const flags = {
  // If logType is set to keys then the props of the object being logged
  // will be written out instead of the whole object. Remove logType or
  // set it to anything except keys to have the full object logged.
  logType: 'keys',
  // A list of the param "types" to be logged.
  // The example below has all the types.
  names: ['props', 'nextProps', 'nextState', 'prevProps', 'prevState']
};

class Ranking extends Component {
  state = {
    rankings: [
      {
        "points_count": 0,
        "person": {
          "id": 'fake1',
          "name": "Nome",
        }
      }, {
        "points_count": 0,
        "person": {
          "id": 'fake2',
          "name": "Nome",
        }
      },
    ]
  }
  // constructor(props) {
    // super(props, flags);
  // }

  componentWillMount() {
    fetch('http://localhost:3001/people/ranking')
      .then(response => response.json())
      .then(json => {
        this.setState({rankings: json})
      }).catch(what => console.log('what', what))
  }

  render() {
    return (
      <List>
        {this.state.rankings.map(ranking =>
          <ListItem
            key={ranking.person.id}
            primaryText={ranking.person.name}
            insetChildren={true}
            leftAvatar={<Avatar>{ranking.points_count}</Avatar>}
            rightAvatar={<Avatar src={logo} />}
            innerDivStyle={{paddingLeft: '56px'}}
          />
        )}
      </List>
  )}
}

export default Ranking;
