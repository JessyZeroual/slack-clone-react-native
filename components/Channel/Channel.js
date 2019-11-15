import * as React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import { Container } from './Channel.styled';
import TopBar from '../TopBar/TopBar';

const Channel = ({ channelName, channelId }) => {
  return (
    <>
      <TopBar channelName={channelName} />
      <Container>
        <Text>{channelName}</Text>
        <Text>{channelId}</Text>
      </Container>
    </>
  );
};

Channel.propTypes = {
  channelName: PropTypes.string.isRequired,
  channelId: PropTypes.string.isRequired,
};

export default Channel;
