import { createChatBotMessage } from 'react-chatbot-kit';

const config = {
  botName: 'TerminalBot',
  initialMessages: [
    createChatBotMessage(
      `Hi, I'm japoot. Enter command (supported: "ls", "mkdir chat", "mkdir Downloads", "pwd") >`
    ),
  ],
};

export default config;
