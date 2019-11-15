import React from 'react';
import { createAppContainer } from 'react-navigation';
import DrawerNavigator from './components/DrawerNavigator/DrawerNavigator';

const AppContainer = createAppContainer(DrawerNavigator);

const App = () => {
  return <AppContainer />;
};
export default App;
