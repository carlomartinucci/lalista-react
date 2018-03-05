import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import FloatingActionButton from 'material-ui/FloatingActionButton';
import AppBar from 'material-ui/AppBar';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ActionViewList from 'material-ui/svg-icons/action/view-list';
import Paper from 'material-ui/Paper';
// import FontIcon from 'material-ui/FontIcon';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

const TheList = () => (
  <List>
    <ListItem
      primaryText="Daniel"
      insetChildren={true}
      leftAvatar={<Avatar>23</Avatar>}
      rightAvatar={<Avatar src={logo} />}
      innerDivStyle={{paddingLeft: '56px'}}
    />
    <ListItem
      primaryText="Alberto"
      insetChildren={true}
      leftAvatar={<Avatar>21</Avatar>}
      rightAvatar={<Avatar src={logo} />}
      innerDivStyle={{paddingLeft: '56px'}}
    />
    <ListItem
      primaryText="Filippo"
      insetChildren={true}
      leftAvatar={<Avatar>18</Avatar>}
      rightAvatar={<Avatar src={logo} />}
      innerDivStyle={{paddingLeft: '56px'}}
    />
    <ListItem
      primaryText="Altro tizio"
      insetChildren={true}
      leftAvatar={<Avatar>12</Avatar>}
      rightAvatar={<Avatar src={logo} />}
      innerDivStyle={{paddingLeft: '56px'}}
    />
    <ListItem
      primaryText="Altro tizio"
      insetChildren={true}
      leftAvatar={<Avatar>12</Avatar>}
      rightAvatar={<Avatar src={logo} />}
      innerDivStyle={{paddingLeft: '56px'}}
    />
    <ListItem
      primaryText="Altro tizio"
      insetChildren={true}
      leftAvatar={<Avatar>12</Avatar>}
      rightAvatar={<Avatar src={logo} />}
      innerDivStyle={{paddingLeft: '56px'}}
    />
    <ListItem
      primaryText="Altro tizio"
      insetChildren={true}
      leftAvatar={<Avatar>12</Avatar>}
      rightAvatar={<Avatar src={logo} />}
      innerDivStyle={{paddingLeft: '56px'}}
    />
    <ListItem
      primaryText="Altro tizio"
      insetChildren={true}
      leftAvatar={<Avatar>12</Avatar>}
      rightAvatar={<Avatar src={logo} />}
      innerDivStyle={{paddingLeft: '56px'}}
    />
    <ListItem
      primaryText="Altro tizio"
      insetChildren={true}
      leftAvatar={<Avatar>12</Avatar>}
      rightAvatar={<Avatar src={logo} />}
      innerDivStyle={{paddingLeft: '56px'}}
    />
    <ListItem
      primaryText="Altro tizio"
      insetChildren={true}
      leftAvatar={<Avatar>12</Avatar>}
      rightAvatar={<Avatar src={logo} />}
      innerDivStyle={{paddingLeft: '56px'}}
    />
    <ListItem
      primaryText="Altro tizio"
      insetChildren={true}
      leftAvatar={<Avatar>12</Avatar>}
      rightAvatar={<Avatar src={logo} />}
      innerDivStyle={{paddingLeft: '56px'}}
    />
    <ListItem
      primaryText="Altro tizio"
      insetChildren={true}
      leftAvatar={<Avatar>12</Avatar>}
      rightAvatar={<Avatar src={logo} />}
      innerDivStyle={{paddingLeft: '56px'}}
    />
    <ListItem
      primaryText="Terzultimo"
      insetChildren={true}
      leftAvatar={<Avatar>2</Avatar>}
      rightAvatar={<Avatar src={logo} />}
      innerDivStyle={{paddingLeft: '56px'}}
    />
    <ListItem
      primaryText="Valentino"
      insetChildren={true}
      leftAvatar={<Avatar>1</Avatar>}
      rightAvatar={<Avatar src={logo} />}
      innerDivStyle={{paddingLeft: '56px'}}
    />
    <ListItem
      primaryText="Chiara"
      insetChildren={true}
      leftAvatar={<Avatar>0</Avatar>}
      rightAvatar={<Avatar src={logo} />}
      innerDivStyle={{paddingLeft: '56px'}}
    />
  </List>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar
          title="LaLista"
          showMenuIconButton={false}
        />
        <TheList />

        <Navigation/>
      </div>
    );
  }
}

class Navigation extends Component {
  state = {
    selectedIndex: 0,
  };

  select = (index) => this.setState({selectedIndex: index});

  render() {
    return (
      <Paper zDepth={1} style={{position: 'fixed', bottom: '0', left: '0', right: '0'}}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            label="Classifica"
            icon={<ActionViewList />}
            onClick={() => this.select(0)}
          />
          <BottomNavigationItem
            label="Segna"
            icon={<ContentAdd />}
            onClick={() => this.select(1)}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}


export default App;
