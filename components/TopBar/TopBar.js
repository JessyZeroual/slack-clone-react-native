import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationContext } from 'react-navigation';

import { TopBarWrapper, StyledIcon } from './TopBar.styled';

const TopBar = () => {
  const navigation = useContext(NavigationContext);
  return (
    <TopBarWrapper>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <StyledIcon name="bars" />
      </TouchableOpacity>
    </TopBarWrapper>
  );
};

export default TopBar;
