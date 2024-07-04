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
import MessagesContainer from "../../../../components/MessageCard/MessagesContainer";
import {Link, useHistory } from "react-router-dom";

import leftArrow from "../../../../assets/icons/arrowLeft.svg";
import dots from "../../../../assets/icons/dots.svg";
import attachment from "../../../../assets/icons/attachment.svg";
import send from "../../../../assets/icons/send.svg";


interface Conversation {
  name: string;
  time: string;
  message: string;
  date: string;
  previousPerson: boolean;
}


function updateConversation(conversation: Array<Conversation>) {
  for (let i = 1; i < conversation.length; i++) {
    if (conversation[i].name === conversation[i - 1].name) {
      conversation[i].previousPerson = true;
    }
  }
  console.log(conversation);
}

const newConversation: Array<Conversation> = [
  {
    name: "Alice Johnson",
    time: "10:00",
    message: "Have you heard about the earthquake in Japan?",
    date: "2023-06-07",
    previousPerson: false,
  },
  {
    name: "Bob James",
    time: "10:02",
    message: "Yes, it's devastating. So many people are affected. The images of the destruction are heart-wrenching, and it’s hard to imagine how long the recovery will take.",
    date: "2023-06-07",
    previousPerson: false,
  },
  {
    name: "Alice Johnson",
    time: "10:05",
    message: "I can't believe the extent of the damage. Buildings are reduced to rubble. The news footage shows entire neighborhoods flattened, and the rescue efforts look extremely challenging.",
    date: "2023-06-07",
    previousPerson: false,
  },
  {
    name: "Alice Johnson",
    time: "10:08",
    message: "It's really a tragic situation. My thoughts are with all those affected.",
    date: "2023-06-07",
    previousPerson: false,
  },
  {
    name: "Dana Lee",
    time: "10:10",
    message: "And the aftershocks are making it even worse. It's terrifying.",
    date: "2023-06-07",
    previousPerson: false,
  },
  {
    name: "Bob James",
    time: "10:12",
    message: "They definitely need all the help they can get. It's a dire situation. With so many people displaced and critical infrastructure destroyed, immediate and sustained aid will be essential for recovery.",
    date: "2023-06-07",
    previousPerson: false,
  },
  {
    name: "Alice Johnson",
    time: "10:18",
    message: "Absolutely. I heard that rescue teams are already on their way. Countries from around the world are mobilizing to provide assistance, which is a glimmer of hope amid the chaos.",
    date: "2023-06-07",
    previousPerson: false,
  },
  {
    name: "Charlie Martins",
    time: "10:20",
    message: "That's good to hear. The faster the response, the better.",
    date: "2023-06-07",
    previousPerson: false,
  },
  {
    name: "Charlie Martins",
    time: "10:25",
    message: "I just hope the weather doesn't make things worse. There's a storm forecasted, and that could complicate the rescue operations and make it harder for aid to reach those in need.",
    date: "2023-06-07",
    previousPerson: false,
  },
  {
    name: "Alice Johnson",
    time: "10:27",
    message: "Oh no, that would be catastrophic. Let's hope for the best. The affected areas are already under so much strain, additional weather disruptions could hinder the efforts significantly.",
    date: "2023-06-07",
    previousPerson: false,
  },
  {
    name: "Dana Lee",
    time: "10:30",
    message: "Yes, keeping fingers crossed. The people there need all the luck and support they can get.",
    date: "2023-06-07",
    previousPerson: false,
  },
  {
    name: "Bob James",
    time: "10:35",
    message: "By the way, have you been following the news about the wildfires in Australia?",
    date: "2023-06-07",
    previousPerson: false,
  },
  {
    name: "Charlie Martins",
    time: "10:40",
    message: "Yes, it's heart-wrenching. So much wildlife is being lost. The scale of the fires is unprecedented, and the ecological damage is going to be felt for years to come. The devastation is hard to comprehend, and it will take a long time for the ecosystem to recover.",
    date: "2023-06-07",
    previousPerson: false,
  },
  {
    name: "Alice Johnson",
    time: "10:45",
    message: "And the smoke is causing health issues even in neighboring cities.",
    date: "2023-06-07",
    previousPerson: false,
  },
  {
    name: "Dana Lee",
    time: "10:50",
    message: "It's a reminder of how severe climate change is becoming.",
    date: "2023-06-07",
    previousPerson: false,
  },
  {
    name: "Bob James",
    time: "10:55",
    message: "Indeed. We need to take more serious actions to address it.",
    date: "2023-06-07",
    previousPerson: false,
  },
  {
    name: "Alice Johnson",
    time: "11:00",
    message: "I agree. The world needs to unite in the fight against climate change. It’s not just about policy changes, but also about shifting our everyday practices to be more sustainable.",
    date: "2023-06-07",
    previousPerson: false,
  },
  {
    name: "Charlie Martins",
    time: "11:05",
    message: "Let's hope the upcoming summit leads to some concrete steps.",
    date: "2023-06-07",
    previousPerson: false,
  },
  {
    name: "Charlie Martins",
    time: "11:10",
    message: "Have you guys also heard about the flooding in India?",
    date: "2023-06-07",
    previousPerson: false,
  },
  {
    name: "Alice Johnson",
    time: "11:15",
    message: "Yes, it's so tragic. Thousands of people have been displaced. The flooding has affected such a large area, and many communities are cut off from aid. It's a humanitarian disaster on a massive scale.",
    date: "2023-06-07",
    previousPerson: false,
  },
  {
    name: "Bob James",
    time: "11:20",
    message: "The images coming out are shocking. People wading through chest-deep water, entire homes submerged, it's heart-wrenching. The recovery is going to be long and arduous.",
    date: "2023-06-07",
    previousPerson: false,
  },
  {
    name: "Bob James",
    time: "11:25",
    message: "The situation is really dire. Rescue operations are in full swing.",
    date: "2023-06-07",
    previousPerson: false,
  },
  {
    name: "Bob James",
    time: "11:25",
    message: "Without wasting much time, we can also always just keep encouraging the warlocks about the benefits of community resilence",
    date: "2023-06-07",
    previousPerson: false,
  },
  {
    name: "Dana Lee",
    time: "11:30",
    message: "I read that the government is asking for international aid.",
    date: "2023-06-07",
    previousPerson: false,
  },
  {
    name: "Alice Johnson",
    time: "11:35",
    message: "Yes, they need all the help they can get. It's a humanitarian crisis. The scale of the disaster is overwhelming, and international support will be crucial in providing relief and rebuilding efforts.",
    date: "2023-06-07",
    previousPerson: false,
  },
];

updateConversation(newConversation);




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
        {newConversation.map((eachconverse, index) => (
          <MessagesContainer
            key={index}
            name={eachconverse.name}
            time={eachconverse.time}
            date={eachconverse.date}
            message={eachconverse.message}
            previousperson={eachconverse.previousPerson}
          />
        ))}
      </IonContent>
     <IonFooter className="message-send-section">
        <div className="message-send-container">
          <div className="input-prompt-container">
            <div className="prompt-action">
              <IonInput
                placeholder="Type your message"
              />
              <IonIcon src={attachment}></IonIcon>
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

export default CommunityChatPage;
