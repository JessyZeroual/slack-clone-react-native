import * as React from 'react';
import { Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { Container } from './Home.styled';

const Home = () => {
  Home.navigationOptions = {
    title: 'Home',
    drawerIcon: () => <Ionicons name="md-home" size={24} />,
  };

  return (
    <Container>
      <Text>HomePage</Text>
    </Container>
  );
};

export default Home;

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    toggleDrawer: PropTypes.func.isRequired,
  }).isRequired,
};
