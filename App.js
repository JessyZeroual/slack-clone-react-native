import * as React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import Home from './components/Home';
import Profile from './components/Profile';

const navigator = createDrawerNavigator(
  {
    Home,
    Profile,
  },
  {
    // drawerType: 'back',
    // drawerPosition: 'right',
    // drawerWidth: 200,
    // drawerBackgroundColor: 'orange',
  }
);

const AppContainer = createAppContainer(navigator);

const App = () => {
  return <AppContainer />;
};
export default App;
