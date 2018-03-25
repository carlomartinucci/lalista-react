import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
// import LogLifecyle from 'react-log-lifecycle';
import Avatar from 'material-ui/Avatar';
import { connect } from 'react-redux';

import logo from './../logo.svg';
// import { addPointReducer } from '../store.js'

const mapStateToProps = state => ({ ranking: state.ranking });

// const flags = {
  // If logType is set to keys then the props of the object being logged
  // will be written out instead of the whole object. Remove logType or
  // set it to anything except keys to have the full object logged.
  // logType: 'keys',
  // A list of the param "types" to be logged.
  // The example below has all the types.
  // names: ['props', 'nextProps', 'nextState', 'prevProps', 'prevState']
// };

class Ranking extends Component {
  render() {
    return (
      <List>
        {this.props.ranking.map(rank =>
          <ListItem
            key={rank.person.id}
            primaryText={rank.person.name}
            insetChildren={true}
            leftAvatar={<Avatar>{rank.points_count}</Avatar>}
            rightAvatar={<Avatar src={logo} />}
            innerDivStyle={{paddingLeft: '56px'}}
          />
        )}
      </List>
  )}
}



export default connect(mapStateToProps)(Ranking);
