import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import channels from '../../data/channels';
import Channel from '../Channel/Channel';

const DrawerNavigator = createDrawerNavigator(
  // TODO: request channels
  channels.map(channel => {
    return {
      screen: () => (
        <Channel channelName={channel.name} channelId={channel.id} />
      ),
      navigationOptions: () => ({
        title: channel.name,
      }),
    };
  }),
  {
    contentOptions: {
      activeTintColor: '#FFF',
      inactiveTintColor: '#FFF',
      itemsContainerStyle: {
        marginVertical: 0,
      },
      iconContainerStyle: {
        opacity: 1,
      },
    },
    drawerBackgroundColor: '#3f0f40',
  }
);

export default DrawerNavigator;
