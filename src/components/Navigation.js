import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { withRouter } from 'react-router-dom';

import ActionViewList from 'material-ui/svg-icons/action/view-list';

class Navigation extends Component {
  state = {
    selectedIndex: 0,
  };

  select = (index) => this.setState({selectedIndex: index});

  linkTo = (path, index) => {
    this.props.history.push(path)
    this.select(index)
  }

  render() {
    return (
      <Paper zDepth={1} style={{position: 'fixed', bottom: '0', left: '0', right: '0'}}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            label="Classifica"
            icon={<ActionViewList />}
            onClick={() => this.linkTo('/ranking', 0)}
          />
          <BottomNavigationItem
            label="Segna"
            icon={<ContentAdd />}
            onClick={() => this.linkTo('/score', 1)}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}

export default withRouter(Navigation);

