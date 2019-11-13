import * as React from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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

const Profile = () => {
  Profile.navigationOptions = {
    title: 'Profile',
    drawerIcon: () => <Ionicons name="md-person" size={24} />,
  };

  return (
    <View style={styles.container}>
      <Text>Profile</Text>
    </View>
  );
};
export default Profile;

Profile.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    toggleDrawer: PropTypes.func.isRequired,
  }).isRequired,
};
