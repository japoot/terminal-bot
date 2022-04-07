import { createChatBotMessage } from 'react-chatbot-kit';

const config = {
  botName: 'TerminalBot',
  initialMessages: [
    createChatBotMessage(
      `Hi, I'm japoot. Enter command (supported: "ls", "mkdir chat", "mkdir Downloads", "pwd") >`
    ),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#376B7E',
    },
  },
};

export default config;
