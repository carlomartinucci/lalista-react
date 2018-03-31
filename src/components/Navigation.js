import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { withRouter } from 'react-router-dom';

import ActionViewList from 'material-ui/svg-icons/action/view-list';

class Navigation extends Component {
  linkTo = (path) => {
    this.props.history.push(path)
  }

  getSelected = () => {
    switch (this.props.history.location.pathname) {
    case '/ranking':
      return 0
    case '/score':
      return 1
    default:
      return 0
    }
  }

  render() {
    return (
      <Paper zDepth={1}>
        <BottomNavigation selectedIndex={this.getSelected()}>
          <BottomNavigationItem
            label="Classifica"
            icon={<ActionViewList />}
            onClick={() => this.linkTo('/ranking')}
          />
          <BottomNavigationItem
            label="Segna"
            icon={<ContentAdd />}
            onClick={() => this.linkTo('/score')}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}

export default withRouter(Navigation);

