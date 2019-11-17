/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';
import messages from '../../data/messages';
import MessageItem from '../MessageItem/MessageItem';

// eslint-disable-next-line no-unused-vars
const MessageList = ({ channelId }) => {
  // TODO:request messages by ChannelId
  return (
    <FlatList
      data={messages}
      renderItem={({ item }) => <MessageItem text={item.text} />}
      keyExtractor={item => item.id}
    />
  );
};

MessageList.propTypes = {
  channelId: PropTypes.string.isRequired,
};

export default MessageList;
