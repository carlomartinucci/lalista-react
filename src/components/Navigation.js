import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import { withRouter } from 'react-router-dom';

import ContentAdd from 'material-ui/svg-icons/content/add';
import ActionViewList from 'material-ui/svg-icons/action/view-list';
import ActionHistory from 'material-ui/svg-icons/action/history';

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
    case '/history':
      return 2
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
          <BottomNavigationItem
            label="Storico"
            icon={<ActionHistory />}
            onClick={() => this.linkTo('/history')}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}

export default withRouter(Navigation);

