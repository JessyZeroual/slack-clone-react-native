/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { KeyboardAvoidingView } from 'react-native';
import {
  Footer,
  InputWriteMessage,
  ButtonSendMessage,
  Text,
} from './CreateMessage.styled';

// eslint-disable-next-line no-unused-vars
const CreateMessage = ({ channelId }) => {
  const [textValue, setTextValue] = useState('');
  // TODO:Mutation messages with ChannelId
  return (
    <KeyboardAvoidingView behavior="padding" enabled>
      <Footer>
        <InputWriteMessage
          value={textValue}
          onChangeText={text => setTextValue(text)}
          underlineColorAndroid="transparent"
          placeholder="Type something nice"
        />
        <ButtonSendMessage>
          <Text>Send</Text>
        </ButtonSendMessage>
      </Footer>
    </KeyboardAvoidingView>
  );
};

CreateMessage.propTypes = {
  channelId: PropTypes.string.isRequired,
};

export default CreateMessage;
