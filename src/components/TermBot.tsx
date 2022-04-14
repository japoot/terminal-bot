import Chatbot from "react-chatbot-kit";

import "react-chatbot-kit/build/main.css";
import config from "../services/ChatMessages";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";

const TermBot = () => {
  return (
    <div>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
};
export default TermBot;
