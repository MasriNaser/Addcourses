import React from 'react';
import { Message } from 'semantic-ui-react';

/**
 * @author Naser
 * @function MessageError
 **/

const MessageError = ({ message }) => {
  return (
    <Message info>
      <Message.Header>{message}</Message.Header>
    </Message>
  );
};

export default MessageError;
