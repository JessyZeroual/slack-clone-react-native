import * as React from 'react';
import { Text } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { Container, Logo } from './Home.styled';

const Home = () => {
  Home.navigationOptions = {
    title: 'SLACK-CLONE',
    // eslint-disable-next-line global-require
    drawerIcon: () => <Logo source={require('../../assets/slackLogo.png')} />,
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
