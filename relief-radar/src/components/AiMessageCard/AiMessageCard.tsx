import React from "react";
import "./AI.css";
import { IonIcon } from "@ionic/react";
import brain from "../../assets/icons/Brain.svg";

const messages = [
  {
    sender: "Person",
    content: "What should I do during an earthquake?",
  },
  {
    sender: "AI",
    content: "Drop, cover, and hold on. Stay indoors and away from windows.",
  },
  {
    sender: "Person",
    content: "What if I'm outside when it happens?",
  },
  {
    sender: "AI",
    content: "Move to an open area away from buildings and trees.",
  },
  {
    sender: "Person",
    content: "How can I prepare beforehand?",
  },
  {
    sender: "AI",
    content:
      "Secure heavy items, have an emergency kit, and create a family plan.",
  },
  {
    sender: "Person",
    content: "What should be in the emergency kit?",
  },
  {
    sender: "AI",
    content:
      "Water, food, flashlight, batteries, first aid supplies, and important documents.",
  },
];

function AiMessageCard() {
  return (
    <div className="mesage-card-container">
      {messages.map((message, index) => {
        if (message.sender === "Person") {
          return <span key={index} className="person">{message.content}</span>;
        } else {
          return (
            <div key={index} className="Ai">
              <IonIcon src={brain} className="icon" />
                  <p>{ message.content}</p>
            </div>
          );
        }
      })}
    </div>
  );
}

export default AiMessageCard;
