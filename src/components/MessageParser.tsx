import ActionProvider from './ActionProvider';

class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
    // this.state = state;
  }

  parse(message) {
    const lowercase = message.toLowerCase();
    this.actionProvider.respond(lowercase);
  }
}

export default MessageParser;
