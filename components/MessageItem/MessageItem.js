import React from 'react';
import PropTypes from 'prop-types';
import { Row, Text, Sender } from './MessageItem.styled';

const MessageItem = ({ text }) => {
  return (
    <Row>
      <Sender>user</Sender>
      <Text>{text}</Text>
    </Row>
  );
};

MessageItem.propTypes = {
  text: PropTypes.string.isRequired,
};

export default MessageItem;
