import React from "react";
import "./AI.css";
import { IonIcon } from "@ionic/react";
import chatbot from "../../assets/icons/chatbot.svg";

const messages = [
  {
    sender: "Person",
    content: "What should I do during an earthquake? Is there a specific set of steps that I should follow to ensure my safety and the safety of those around me?",
  },
  {
    sender: "AI",
    content: "During an earthquake, the most important steps to remember are to drop to your hands and knees, cover your head and neck with your arms or seek shelter under a sturdy piece of furniture, and hold on until the shaking stops. Stay indoors and away from windows, as broken glass can pose a significant hazard.",
  },
  {
    sender: "Person",
    content: "What if I'm outside when it happens? Should I move immediately or stay put, and what should I be cautious of in such situations?",
  },
  {
    sender: "AI",
    content: "If you find yourself outside during an earthquake, it’s crucial to move to an open area away from buildings, streetlights, and trees. These structures can fall, causing injury. Avoid overpasses and bridges, and if you’re driving, stop in a safe location away from potential hazards.",
  },
  {
    sender: "Person",
    content: "How can I prepare beforehand? Are there specific precautions or preparations that can help minimize risks and ensure readiness?",
  },
  {
    sender: "AI",
    content: "To prepare for an earthquake, secure heavy items such as bookshelves and mirrors to walls to prevent them from falling. Have an emergency kit ready with essential supplies, and create a family emergency plan that includes communication strategies and designated meeting places. Regular drills can also help ensure everyone knows what to do during an earthquake.",
  },
  {
    sender: "Person",
    content: "What should be in the emergency kit? Could you provide a detailed list of items that are essential and any additional recommendations?",
  },
  {
    sender: "AI",
    content: "An emergency kit should include a minimum of three days' worth of water and non-perishable food, a flashlight with extra batteries, a first aid kit with necessary supplies, medications, important documents in a waterproof container, a battery-powered or hand-crank radio, and personal hygiene items. Additionally, consider including items like cash, local maps, and supplies for pets if applicable.",
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
             <div className="icon"> <IonIcon src={chatbot} /></div>
                  <p>{ message.content}</p>
            </div>
          );
        }
      })}
    </div>
  );
}

export default AiMessageCard;
