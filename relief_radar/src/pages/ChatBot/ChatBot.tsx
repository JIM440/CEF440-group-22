import React, { useState } from "react";
import "./ChatBot.css";
import {
  IonHeader,
  IonToolbar,
  IonInput,
  IonPage,
  IonContent,
  IonFooter,
  IonButtons,
  IonIcon,
  IonBackButton,
  IonTitle,
  IonLabel,
  IonButton,
} from "@ionic/react";
import { useHistory } from "react-router-dom";
import microphone from "../../assets/icons/microphone.svg";
import send from "../../assets/icons/send.svg";
import chatbot from "../../assets/icons/chatbot.svg";
import fire from "../../assets/icons/fire.svg";
import flood from "../../assets/icons/flood.svg";
import earthquake from "../../assets/icons/earthquake.svg";
import hurricane from "../../assets/icons/hurricane.svg";

import AiMessageCard from "../../components/AiMessageCard/AiMessageCard";

function ChatBot() {
  const [showMessageCard, setShowMessageCard] = useState(true);
  const history = useHistory();

  const goBack = () => {
    history.goBack();
    setShowMessageCard(!showMessageCard);
  };

  const showCard = () => {
    setShowMessageCard(!showMessageCard);
  };

  return (
    <IonPage>
      <IonHeader class="ion-no-border" className="chatbot-header-container">
        <IonToolbar>
          <div className="chatbot-header-wrapper">
            <IonButtons slot="start">
              <IonBackButton></IonBackButton>
            </IonButtons>
            <IonTitle>Assistant</IonTitle>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {showMessageCard ? (
          <div className="chatbot-ioncontent">
            <div className="icon-container">
              <IonIcon src={chatbot} className="ai-icon" />
              <IonLabel>ReliefBOT</IonLabel>
            </div>
            <div className="chatbot-prompt-section">
              <IonLabel>Ask any disaster related question</IonLabel>
            </div>
            <div className="sample-questions-container">
              <div className="fl">
                <div className="questions-row">
                  <div className="question-col" onClick={showCard}>
                    <div className="question1">
                      <IonIcon src={earthquake} className="question-icon" />
                      <IonLabel>How to prepare for an earthquake?</IonLabel>
                    </div>
                  </div>
                  <div className="question-col" onClick={showCard}>
                    <div className="question1">
                      <IonIcon src={flood} className="question-icon" />
                      <IonLabel> What to do during a flood?</IonLabel>
                    </div>
                  </div>
                  <div className="question-col" onClick={showCard}>
                    <div className="question1">
                      <IonIcon src={hurricane} className="question-icon" />
                      <IonLabel>Safety tips for a hurricane?</IonLabel>
                    </div>
                  </div>
                  <div className="question-col" onClick={showCard}>
                    <div className="question1">
                      <IonIcon src={fire} className="question-icon" />
                      <IonLabel>How to stay safe during a wildfire?</IonLabel>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <AiMessageCard />
        )}
      </IonContent>
      <IonFooter className="message-send-section">
        <div className="message-send-container">
          <div className="input-prompt-container">
            <div className="prompt-action">
              <IonInput
                placeholder="Type your message"
                clearInput
                onFocus={() => console.log("Input focused")}
                onBlur={() => console.log("Input blurred")}
              />
              <IonIcon src={microphone}></IonIcon>
            </div>
            <div>
              <IonButton>
                <IonIcon src={send} />
              </IonButton>
            </div>
          </div>
        </div>
      </IonFooter>
    </IonPage>
  );
}

export default ChatBot;
