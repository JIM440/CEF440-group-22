import React from "react";
import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonMenuButton,
  IonButtons,
  IonIcon,
  IonTitle,
  IonButton,
  IonBadge,
} from "@ionic/react";
import menuIcon from "../../assets/icons/menu.svg";
import notificationIcon from "../../assets/icons/notification.svg";

import ChatBotButton from "../../components/Buttons/Ai_bot";
import HeaderAvatar from "../../components/Avatar";

import { FormattedMessage } from "react-intl";
import ForumSessionCard from "../../components/ForumSessionCard/ForumSessionCard";

import home from "../../assets/icons/home.svg";
import genericForum from "../../assets/icons/genericForum.svg";
import chatsession from "../../assets/icons/chatsession.svg";
import "./Community.css";
import { useHistory } from "react-router";

const disasterForums = [
  {
    group_name: "Mount Cameroon Evacuation Zone",
    date: "June 6",
    last_text:
      "Evacuation underway due to potential volcanic eruption. Follow instructions from emergency personnel.",
    icon: genericForum,
  },
  {
    group_name: "Limbe Flood Warning",
    date: "May 5",
    last_text:
      "Heavy rains expected in Limbe area. Residents in low-lying areas advised to evacuate.",
    icon: "",
  },
  {
    group_name: "National Search and Rescue",
    date: "June 3",
    last_text: "Search operation ongoing for missing hikers",
    icon: genericForum,
  },
  {
    group_name: "Nationwide Summer",
    date: "May 30",
    last_text:
      "Government distributing emergency food supplies to affected areas. ",
    icon: "",
  },
];

function CommunityPage() {
  const navigateTo = useHistory();

  function gotoChatSessionPage() {
    navigateTo.push("/community/chatsessionpage");
  }

  return (
    <IonPage>
      <IonHeader class="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton>
              <IonIcon src={menuIcon}></IonIcon>
            </IonMenuButton>
          </IonButtons>
          <IonTitle>
            <FormattedMessage id="Community" />
          </IonTitle>
          <HeaderAvatar />
          <IonButtons slot="end" className="notification">
            <IonButton>
              <IonIcon src={notificationIcon}></IonIcon>
              <div className="pulse-container"></div>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="community-header">
          <div className="CHI active">
            <IonIcon src={home} className="icon active" />
          </div>
          <div className="CHI">
            <IonIcon src={genericForum} className="icon" />
          </div>
          <div className="CHI">
            <IonIcon
              src={chatsession}
              className="icon"
              onClick={gotoChatSessionPage}
            />
          </div>
        </div>

        {disasterForums.map((forum, i) => (
          <ForumSessionCard
            key={i}
            group_name={forum.group_name}
            date={forum.date}
            last_text={forum.last_text}
            icon={forum.icon}
          />
        ))}

        <div className="add-button">
          <IonIcon />
        </div>

        <ChatBotButton />
      </IonContent>
    </IonPage>
  );
}

export default CommunityPage;
