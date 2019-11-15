import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationContext } from 'react-navigation';
import PropTypes from 'prop-types';

import { TopBarWrapper, StyledIcon, Text, Span } from './TopBar.styled';

const TopBar = ({ channelName }) => {
  const navigation = useContext(NavigationContext);
  return (
    <TopBarWrapper>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <StyledIcon name="bars" />
      </TouchableOpacity>
      <Text>
        <Span>#</Span>
        {channelName}
      </Text>
    </TopBarWrapper>
  );
};

TopBar.propTypes = {
  channelName: PropTypes.string.isRequired,
};

export default TopBar;
