import { createChatBotMessage } from "react-chatbot-kit";

import processCommand from "../services/System";

class ActionProvider {
  createChatbotMessage: string;
  setState: any; // FIXME: figure out proper type

  // FIXME: figure out proper type
  constructor(createChatbotMessage: any, setStateFunc: any) {
    this.createChatbotMessage = createChatbotMessage;

    this.setState = setStateFunc;
  }

  // FIXME: figure out proper type
  respond(userInput: any) {
    let message: any = ""; // FIXME: figure out proper type

    // FIXME: santize user input
    const response = processCommand(userInput)[1];
    message = createChatBotMessage(response, null);
    this.addMessageToState(message);
  }

  addMessageToState = (message: string) => {
    // FIXME: figure out proper type
    this.setState((prevState: any) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;
