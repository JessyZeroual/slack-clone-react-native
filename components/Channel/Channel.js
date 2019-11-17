import * as React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import MessageList from '../MessageList/MessageList';
import CreateMessage from '../CreateMessage.js/CreateMessage';

const Channel = ({ channelName, channelId }) => {
  return (
    <>
      <Header channelName={channelName} />
      <MessageList channelId={channelId} />
      <CreateMessage channelId={channelId} />
    </>
  );
};

Channel.propTypes = {
  channelName: PropTypes.string.isRequired,
  channelId: PropTypes.string.isRequired,
};

export default Channel;
