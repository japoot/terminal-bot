class MessageParser {
  actionProvider: any;

  state: any;

  constructor(actionProvider: any, state: any) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  // eslint-disable-next-line class-methods-use-this
  parse(message: string) {
    console.log(message);
  }
}
export default MessageParser;
