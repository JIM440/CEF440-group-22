import React from "react";
import "./AI.css";
import { IonIcon } from "@ionic/react";
import chatbot from "../../assets/icons/chatbot.svg";

type ChatMessage = {
  role: "user" | "model";
  parts: { text: string }[];
};

type AiMessageCardProps = {
  skeleton: boolean;
  chats: ChatMessage[];
};

const AiMessageCard: React.FC<AiMessageCardProps> = ({ chats, skeleton }) => {

    const renderXterWise = (text: string)  => {
    const xterArray = text.split('');
    const displayArray = xterArray.filter(xter => {
      return xter !== '*'
    })

    return displayArray;
  }
  
  return (
    <div className="message-card-container">
      {chats.map((chat, index) => {
        if (chat.role === "user") {
          return (
            <>
              <span key={index} className="person">
                {chat.parts[0].text}
              </span>
              {skeleton && (
                <div key={index} className="Ai">
                  <div className="icon">
                    <IonIcon src={chatbot} />
                  </div>
                  <p className="skeleton"></p>
                </div>
              )}
            </>
          );
        } else {
          return (
            <div key={index} className="Ai">
              <div className="icon">
                <IonIcon src={chatbot} />
              </div>
              <p>{ renderXterWise(chat.parts[0].text )}</p>
            </div>
          );
        }
      })}
    </div>
  );
};

export default AiMessageCard;
