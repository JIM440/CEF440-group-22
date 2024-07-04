import React, { useRef,useEffect } from "react";
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
  const AiCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    AiCardRef.current?.scrollIntoView({ behavior: "smooth", block:'end'});
  }, [chats]);

  const renderXterWise = (text: string) => {
    const xterArray = text.split("");
    const displayArray = xterArray.filter((xter) => {
      return xter !== "*";
    });

    return displayArray;
  };

  const formatText = (text: string): string => {
  // Replace double asterisks with <b> tags for bold text
  text = text.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');

    //replacing asterisks with <br/>
    text = text.split('*').join('<br/>');
    
  // Replace double hashes at the beginning with <h2> tags for headings
  text = text.replace(/^##(.*?)$/gm, '<h2>$1</h2>');

  return text;
};


  return (
    <div className="message-card-container" key={Math.random()*10000} ref={AiCardRef}>
      {chats.map((chat, index) => {
        if (chat.role === "user") {
          return (
            <>
              <span key={Math.random()*10000} className="person">
                {chat.parts[0].text}
              </span>
              {skeleton && (
                <div key={Math.random()*10000} className="Ai">
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
            <div key={Math.random()*10000} className="Ai">
              <div className="icon">
                <IonIcon src={chatbot} />
              </div>
              <p dangerouslySetInnerHTML={{ __html: formatText(chat.parts[0].text) }}></p>
            </div>
          );
        }
      })}
    </div>
  );
};

export default AiMessageCard;
