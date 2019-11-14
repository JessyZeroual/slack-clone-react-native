import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';

const navigator = createDrawerNavigator(
  {
    Home,
    Profile,
  },
  {
    contentOptions: {
      activeTintColor: '#FFF',
      inactiveTintColor: '#FFF',
      itemsContainerStyle: {
        marginVertical: 0,
      },
      iconContainerStyle: {
        opacity: 1,
      },
    },
    drawerBackgroundColor: '#3f0f40',
  }
);

const AppContainer = createAppContainer(navigator);

const App = () => {
  return <AppContainer />;
};
export default App;
