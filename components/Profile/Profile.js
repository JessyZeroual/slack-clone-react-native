import * as React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { Container } from './Profile.styled';

const Profile = () => {
  Profile.navigationOptions = {
    title: 'Profile',
  };
  return (
    <Container>
      <Text>Profile</Text>
    </Container>
  );
};
export default Profile;

Profile.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    toggleDrawer: PropTypes.func.isRequired,
  }).isRequired,
};
