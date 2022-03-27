class ActionProvider {
  createChatbotMessage: string;

  setState: null;

  createClientMessage: string;

  constructor(
    createChatbotMessage: string,
    setStateFunc: null,
    createClientMessage: string
  ) {
    this.createChatbotMessage = createChatbotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  // handleHello() {
  //   const message = this.createChatbotMessage('Hello. Nice to meet you.');
  //   this.setState((prev) => ({
  //     ...prev,
  //     messages: [...prev.messages, botMessage],
  //   }));
  // }
}

export default ActionProvider;
