import React, { useState } from "react";
import "./ChatBot.css";
import {
  IonHeader,
  IonToolbar,
  IonInput,
  IonPage,
  IonContent,
  IonFooter,
  IonButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import chevronLeft from "../../assets/icons/IonChevronLeft.svg";
import { useHistory } from "react-router-dom";
import attachment from "../../assets/icons/attachment.svg";
import send from "../../assets/icons/send.svg";
import brain from "../../assets/icons/Brain.svg";
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
            <div className="back-part" onClick={goBack}>
              <IonIcon className="chatbot-header-icon" src={chevronLeft} />
              <span>Back</span>
            </div>
            <div className="chatbot-header-text">
              <span>Assistant</span>
            </div>
            <div className="header-last-part"></div>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {showMessageCard ? <div className="chatbot-ioncontent">
          <div className="icon-container">
            <IonIcon src={brain} className="ai-icon" />
          </div>
          <div className="sample-questions-container">
        
              <div className="fl">
              <div className="questions-row">
                <div className="question-col" onClick={showCard}>
                  <div className="question1">
                    <IonIcon src={earthquake} className="icon" />
                    How to prepare for an earthquake?
                  </div>
                </div>
                <div className="question-col"  onClick={showCard}>
                  <div className="question1">
                    <IonIcon src={flood} className="icon" />
                    What to do during a flood?
                  </div>
                </div>
                <div className="question-col"  onClick={showCard}>
                  <div className="question1">
                    <IonIcon src={hurricane} className="icon" />
                    Safety tips for a hurricane?
                  </div>
                </div>
                <div className="question-col"  onClick={showCard}>
                  <div className="question1">
                    <IonIcon src={fire} className="icon" />
                    How to stay safe during a wildfire?
                  </div>
                </div>
                </div>
                </div>
            
          </div>
        </div>: <AiMessageCard/>}
      </IonContent>
      <IonFooter className="message-send-section">
        <IonToolbar>
          <div className="footer-contents">
            <div>
              <IonIcon src={attachment} className="icon" />
            </div>
            <IonInput
              placeholder="Type your message"
              clearInput
              onFocus={() => console.log("Input focused")}
              onBlur={() => console.log("Input blurred")}
            />
            <div>
              <IonIcon src={send} className="icon" />
            </div>
          </div>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
}

export default ChatBot;