class MessageParser {
  actionProvider: any; // FIXME: figure out proper type

  // FIXME: figure out proper type
  constructor(actionProvider: any) {
    this.actionProvider = actionProvider;
  }

  // FIXME: figure out proper type
  parse(message: any) {
    const lowercase = message.toLowerCase();
    this.actionProvider.respond(lowercase);
  }
}

export default MessageParser;
