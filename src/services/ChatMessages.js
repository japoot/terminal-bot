import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  botName: "Terminal Bot",
  initialMessages: [createChatBotMessage(`Hi, I'm Terminal Bot`)],

  // Defines an object of custom styles if you want to override styles
  customStyles: {
    // Overrides the chatbot message styles
    botMessageBox: {
      backgroundColor: "#092878",
    },
    // Overrides the chat button styles
    chatButton: {
      backgroundColor: "#EDEDED",
    },
  },
};

export default config;
