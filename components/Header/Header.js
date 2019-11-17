import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationContext } from 'react-navigation';
import PropTypes from 'prop-types';

import { HeaderWrapper, StyledIcon, Text } from './Header.styled';

const Header = ({ channelName }) => {
  const navigation = useContext(NavigationContext);
  return (
    <HeaderWrapper>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <StyledIcon name="bars" />
      </TouchableOpacity>
      <Text>{`#${channelName}`}</Text>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  channelName: PropTypes.string.isRequired,
};

export default Header;
