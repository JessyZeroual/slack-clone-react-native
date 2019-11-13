import * as React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Container } from './Profile.styled';

const Profile = () => {
  Profile.navigationOptions = {
    title: 'Profile',
    drawerIcon: () => <Ionicons name="md-person" size={24} />,
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
