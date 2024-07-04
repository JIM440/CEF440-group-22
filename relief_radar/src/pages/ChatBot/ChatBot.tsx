import React, { useState ,useEffect} from "react";
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

import { GoogleGenerativeAI} from "@google/generative-ai";

const API_KEY = "AIzaSyBXanBrQOiU9qP1DrSnaic967YB2nJRMrs";
const genAI = new GoogleGenerativeAI(API_KEY);

type ChatPart = {
  text: string;
};

type ChatMessage = {
  role: "user" | "model";
  parts: ChatPart[];
};

function ChatBot() {
  const [showMessageCard, setShowMessageCard] = useState(true);
  const [showskeleton, setShowSkeloton] = useState(Boolean);

  const [question, setQuestion] = useState<string>("");
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const history = useHistory();
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const goBack = () => {
    history.goBack();
    setShowMessageCard(!showMessageCard);
  };

  const showCard = (question: string) => {
    setShowMessageCard(!showMessageCard);
    setQuestion(question);
  };

  useEffect(() => {
    console.log(question)
  },[question])


  const generateAnswer = async () => {
    setShowSkeloton(true)
    const msg = question;

    console.log(question, 'msg', msg)
    
    setChatHistory((prevChatHistory) => [
      ...prevChatHistory,
      {
        role: "user",
        parts: [{ text: question }],
      },
    ]);

    try {
      const chat = model.startChat({
        history: chatHistory,
        generationConfig: {
          maxOutputTokens: 500,
        },
      });

      const { response } = await chat.sendMessage(msg);
      const text = await response.text();
    
      setShowSkeloton(false);
      setChatHistory((prevChatHistory) => [
        ...prevChatHistory,
        {
          role: "model",
          parts: [{ text }],
        },
      ]);
      
      setQuestion(""); 
    } catch (error) {
      console.error("Error generating answer:", error);
    }
  };

  return (
    <IonPage>
      <IonHeader class="ion-no-border" className="chatbot-header-container">
        <IonToolbar>
          <div className="chatbot-header-wrapper">
            <IonButtons slot="start">
              <IonBackButton  />
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
                  <div className="question-col" onClick={() => showCard("How to prepare for an earthquake?")}>
                    <div className="question1">
                      <IonIcon src={earthquake} className="question-icon" />
                      <IonLabel>How to prepare for an earthquake?</IonLabel>
                    </div>
                  </div>
                  <div className="question-col" onClick={() => showCard("What to do during a flood?")}>
                    <div className="question1">
                      <IonIcon src={flood} className="question-icon" />
                      <IonLabel>What to do during a flood?</IonLabel>
                    </div>
                  </div>
                  <div className="question-col" onClick={() => showCard("Safety tips for a hurricane?")}>
                    <div className="question1">
                      <IonIcon src={hurricane} className="question-icon" />
                      <IonLabel>Safety tips for a hurricane?</IonLabel>
                    </div>
                  </div>
                  <div className="question-col" onClick={() => showCard("How to stay safe during a wildfire?")}>
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
          <div>
              <AiMessageCard chats={chatHistory} skeleton={showskeleton} />
          </div>
        )}
      </IonContent>
      <IonFooter className="message-send-section">
        <div className="message-send-container">
          <div className="input-prompt-container">
            <div className="prompt-action">
              <IonInput
                placeholder="Type your message"
                value={question}
                onIonInput={(e: any) => setQuestion(e.detail.value!)}
              />
              <IonIcon src={microphone} />
            </div>
            <div>
              <IonButton onClick={generateAnswer}>
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
