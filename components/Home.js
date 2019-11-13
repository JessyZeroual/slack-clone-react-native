import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import PropTypes from 'prop-types';
import Constants from 'expo-constants';

import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const Home = () => {
  Home.navigationOptions = {
    title: 'Home',
    drawerIcon: () => <Ionicons name="md-home" size={24} />,
  };

  return (
    <View style={styles.container}>
      <Text>HomePage</Text>
    </View>
  );
};

export default Home;

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    toggleDrawer: PropTypes.func.isRequired,
  }).isRequired,
};
