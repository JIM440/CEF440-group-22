import React, { useState } from "react";
import "./CommunityChatPage.css";
import {
  IonButton,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import MessagesContainer from "../../../components/MessageCard/MessagesContainer";
import {Link, useHistory } from "react-router-dom";

import leftArrow from "../../../assets/icons/arrowLeft.svg";
import dots from "../../../assets/icons/dots.svg";
import attachment from "../../../assets/icons/attachment.svg";
import send from "../../../assets/icons/send.svg";

const conversation = [
  {
    name: "Alice Johnson",
    time: "10:00",
    message: "Have you heard about the earthquake in Japan?",
    date: "2023-06-07",
  },
  {
    name: "Bob James",
    time: "10:02",
    message: "Yes, it's devastating. So many people are affected.",
    date: "2023-06-07",
  },
  {
    name: "Alice Johnson",
    time: "10:05",
    message:
      "I can't believe the extent of the damage. Buildings are reduced to rubble.",
    date: "2023-06-07",
  },
  {
    name: "Bob James",
    time: "10:10",
    message: "And the aftershocks are making it even worse. It's terrifying.",
    date: "2023-06-07",
  },
  {
    name: "Alice Johnson",
    time: "10:12",
    message: "I hope the international community steps in to help quickly.",
    date: "2023-06-07",
  },
  {
    name: "Bob James",
    time: "10:15",
    message:
      "They definitely need all the help they can get. It's a dire situation.",
    date: "2023-06-07",
  },
  {
    name: "Alice Johnson",
    time: "10:18",
    message: "Absolutely. I heard that rescue teams are already on their way.",
    date: "2023-06-07",
  },
  {
    name: "Bob James",
    time: "10:20",
    message: "That's good to hear. The faster the response, the better.",
    date: "2023-06-07",
  },
  {
    name: "Alice Johnson",
    time: "10:25",
    message:
      "I just hope the weather doesn't make things worse. There's a storm forecasted.",
    date: "2023-06-07",
  },
  {
    name: "Bob James",
    time: "10:30",
    message: "Oh no, that would be catastrophic. Let's hope for the best.",
    date: "2023-06-07",
  },
  {
    name: "Alice Johnson",
    time: "10:35",
    message:
      "Yes, keeping fingers crossed. The people there need all the luck and support they can get.",
    date: "2023-06-07",
  },
  {
    name: "Bob James",
    time: "10:40",
    message:
      "By the way, have you been following the news about the wildfires in Australia?",
    date: "2023-06-07",
  },
  {
    name: "Alice Johnson",
    time: "10:45",
    message: "Yes, it's heart-wrenching. So much wildlife is being lost.",
    date: "2023-06-07",
  },
  {
    name: "Bob James",
    time: "10:50",
    message:
      "And the smoke is causing health issues even in neighboring cities.",
    date: "2023-06-07",
  },
  {
    name: "Alice Johnson",
    time: "10:55",
    message: "It's a reminder of how severe climate change is becoming.",
    date: "2023-06-07",
  },
  {
    name: "Bob James",
    time: "11:00",
    message: "Indeed. We need to take more serious actions to address it.",
    date: "2023-06-07",
  },
  {
    name: "Alice Johnson",
    time: "11:05",
    message:
      "I agree. The world needs to unite in the fight against climate change.",
    date: "2023-06-07",
  },
  {
    name: "Bob James",
    time: "11:10",
    message: "Let's hope the upcoming summit leads to some concrete steps.",
    date: "2023-06-07",
  },
  {
    name: "Charlie Martins",
    time: "11:15",
    message: "Have you guys also heard about the flooding in India?",
    date: "2023-06-07",
  },
  {
    name: "Alice Johnson",
    time: "11:20",
    message: "Yes, it's so tragic. Thousands of people have been displaced.",
    date: "2023-06-07",
  },
  {
    name: "Bob James",
    time: "11:25",
    message:
      "The situation is really dire. Rescue operations are in full swing.",
    date: "2023-06-07",
  },
  {
    name: "Charlie Martins",
    time: "11:30",
    message: "I read that the government is asking for international aid.",
    date: "2023-06-07",
  },
  {
    name: "Alice Johnson",
    time: "11:35 ",
    message:
      "Yes, they need all the help they can get. It's a humanitarian crisis.",
    date: "2023-06-07",
  },
];

function CommunityChatPage() {
  const [showPopup, setShowPopUp] = useState(false);

  function Popup() {
    setShowPopUp(!showPopup);
  }

  function gotoInfoPage() {
    history.push(`/community/foruminfo`);
    setShowPopUp(!showPopup);
  }

  function Popupfalse() {
   
    setShowPopUp(false);
  }


  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <IonPage className="community-chat-container">
      <IonHeader className="chat-session-header">
        <IonToolbar>
          <div className="community-chat-header">
            <div className="part1">
              <IonIcon src={leftArrow} className="arrow-left-icon" onClick={goBack} />
              <div className="name-label">
                <div>ST</div>
                <Link to="/community/foruminfo">Staruth Technologies</Link>
              </div>
            </div>
            <div className="part2">
              <IonIcon src={dots} onClick={Popup} />
            </div>
          </div>
        </IonToolbar>
        <div className={`pop-up ${showPopup ? "pop" : null}`}>
          <div
            className={`pop-btn ${showPopup ? "pop" : null}`}
            onClick={gotoInfoPage}
          >
            Group info
          </div>
          <div
            className={`pop-btn ${showPopup ? "pop" : null}`}
            onClick={Popup}
          >
            Share
          </div>
          <div className="line"></div>
        </div>
      </IonHeader>
      <IonContent
        fullscreen={true}
        className="content-container"
        onClick={Popupfalse}
      >
        <div className="messages-container">
          <p>This is the beginning of the messages of this general forum</p>
        </div>
        {conversation.map((eachconverse, index) => (
          <MessagesContainer
            key={index}
            name={eachconverse.name}
            time={eachconverse.time}
            date={eachconverse.date}
            message={eachconverse.message}
          />
        ))}
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

export default CommunityChatPage;
