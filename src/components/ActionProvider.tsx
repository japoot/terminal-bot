import { createChatBotMessage } from 'react-chatbot-kit';

import processCommand from '../services/System';

class ActionProvider {
  constructor(createChatbotMessage, setStateFunc) {
    this.createChatbotMessage = createChatbotMessage;

    this.setState = setStateFunc;
  }

  respond(userInput) {
    let message = '';

    // FIXME: santize user input
    const response = processCommand(userInput)[1];
    message = createChatBotMessage(response);
    this.addMessageToState(message);
  }

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;
