import React from 'react';
import { Text } from 'react-native';

import { Container, Logo } from './Home.styled';
import TopBar from '../TopBar/TopBar';

const Home = () => {
  Home.navigationOptions = {
    title: 'SLACK-CLONE',
    // eslint-disable-next-line global-require
    drawerIcon: () => <Logo source={require('../../assets/slackLogo.png')} />,
  };

  return (
    <>
      <TopBar />
      <Container>
        <Text>HomePage</Text>
      </Container>
    </>
  );
};

export default Home;
