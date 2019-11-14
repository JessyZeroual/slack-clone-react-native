import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationContext } from 'react-navigation';

import { TopBarWrapper, StyledIcon, Text, Span } from './TopBar.styled';

const TopBar = () => {
  const navigation = useContext(NavigationContext);
  return (
    <TopBarWrapper>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <StyledIcon name="bars" />
      </TouchableOpacity>
      {/* If there are props display => */}
      <Text>
        <Span>#</Span>
        props.channel.name
      </Text>
      {/* Else display BrandLogo => */}
    </TopBarWrapper>
  );
};

export default TopBar;
