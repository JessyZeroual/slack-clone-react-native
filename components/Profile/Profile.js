import * as React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { Container } from './Profile.styled';
import TopBar from '../TopBar/TopBar';

const Profile = () => {
  Profile.navigationOptions = {
    title: 'Profile',
  };
  return (
    <>
      <TopBar />
      <Container>
        <Text>Profile</Text>
      </Container>
    </>
  );
};
export default Profile;

Profile.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    toggleDrawer: PropTypes.func.isRequired,
  }).isRequired,
};
