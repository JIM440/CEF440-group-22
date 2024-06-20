import React, { useState } from "react";
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
  IonSegment,
  IonSegmentButton,
} from "@ionic/react";
import menuIcon from "../../assets/icons/menu.svg";
import notificationIcon from "../../assets/icons/notification.svg";
import announcement from "../../assets/icons/announcement.svg";

import ChatBotButton from "../../components/Buttons/Ai_bot";
import HeaderAvatar from "../../components/Avatar";

import { FormattedMessage } from "react-intl";
import ForumSessionCard from "../../components/ForumSessionCard/ForumSessionCard";

import home from "../../assets/icons/home.svg";
import genericForum from "../../assets/icons/genericForum.svg";
import chatsession from "../../assets/icons/chatsession.svg";
import "./Community.css";
import { useHistory } from "react-router";
import Anouncements from "../ResponderPanel/Nont";
import OtherForums from "../../components/otherForums/OtherForums";
import { createForum } from '../../../services/controllers/forum'

import { serverTimestamp } from "firebase/firestore";

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

const disasterManagementGroups = [
  {
    name: "Rescue Team",
    date: "2024-06-14",
    description:
      "This group is responsible for rescuing individuals trapped in disaster zones.",
  },
  {
    name: "Medical Aid",
    date: "2024-06-14",
    description:
      "This group provides medical assistance to those affected by the disaster.",
  },
  {
    name: "Supply Chain",
    date: "2024-06-14",
    description:
      "This group manages the distribution of essential supplies to disaster-affected areas.",
  },
  {
    name: "Communication Network",
    date: "2024-06-14",
    description:
      "This group establishes and maintains communication channels during a disaster.",
  },
  {
    name: "Shelter Coordination",
    date: "2024-06-14",
    description:
      "This group coordinates the establishment of temporary shelters for displaced individuals.",
  },
  {
    name: "Volunteer Management",
    date: "2024-06-14",
    description:
      "This group recruits and manages volunteers for various disaster relief efforts.",
  },
  {
    name: "Logistics Support",
    date: "2024-06-14",
    description:
      "This group provides logistical support to ensure the smooth operation of relief efforts.",
  },
  {
    name: "Damage Assessment",
    date: "2024-06-14",
    description:
      "This group assesses the damage caused by the disaster and provides reports.",
  },
  {
    name: "Public Information",
    date: "2024-06-14",
    description:
      "This group disseminates important information to the public regarding the disaster and safety measures.",
  },
  {
    name: "Mental Health",
    date: "2024-06-14",
    description:
      "This group provides mental health support and counseling to disaster survivors.",
  },
  {
    name: "Infrastructure Repair",
    date: "2024-06-14",
    description:
      "This group focuses on repairing and rebuilding damaged infrastructure.",
  },
  {
    name: "Financial Assistance",
    date: "2024-06-14",
    description:
      "This group helps individuals and families apply for financial assistance post-disaster.",
  },
];

interface ForumInfo {
  name: string;
  description: string;
  author: string;
  timestamp: Date;
  members: {
    id: string;
    membername: string;
    role: boolean;
  }[];
  messages: {
    id: string;
    content: string;
    timestamp: Date;
    author: string;
    repliedto: string;
  }[];
}


function CommunityPage() {
  const navigateTo = useHistory();
  const [selectedSegment, setSelectedSegment] = useState<string>("first");
  const [showCommunities, setShowCommunities] = useState<boolean>(false);

  const handleSegmentChange = (event: CustomEvent) => {
    setSelectedSegment(event.detail.value);
  };

  function gotoChatSessionPage() {
    navigateTo.push("/community/chatsessionpage");
  }

  const chatRoom:ForumInfo = {
  name: "Sample Chat Room",
  description: "This is a sample chat room",
  author: "john_doe",
  timestamp: new Date(),
  members: [
    { id: "user1", membername: "John Doe", role: true },
    { id: "user2", membername: "Jane Smith", role: false }
  ],
  messages: [
    {
      id: "msg1",
      content: "Hello, world!",
      timestamp: new Date(),
      author: "john_doe",
      repliedto: ""
    },
    {
      id: "msg2",
      content: "Hi, John!",
      timestamp: new Date(),
      author: "jane_smith",
      repliedto: "msg1"
    }
  ]
};

   const handleCreateForum = async () => {
    try {
      await createForum('forum', chatRoom);
      console.log('Forum created successfully');
    } catch (error) {
      console.error('Error creating forum:', error);
    }
  };
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
        <IonSegment
          value={selectedSegment}
          onIonChange={handleSegmentChange}
          className="community-segment"
        >
          <IonSegmentButton value="first">
            <IonIcon src={home} className="icon active" />
          </IonSegmentButton>
          <IonSegmentButton value="second">
            <IonIcon src={genericForum} className="icon" />
          </IonSegmentButton>
          <IonSegmentButton value="third">
            <IonIcon
              src={chatsession}
              className="icon"
              onClick={gotoChatSessionPage}
            />
          </IonSegmentButton>
          <IonSegmentButton value="four">
            <IonIcon src={announcement} className="icon" />
          </IonSegmentButton>
        </IonSegment>

        {selectedSegment === "first" && (
          <div>
            {showCommunities ? (
              <div>
                {disasterForums.map((forum, i) => (
                  <ForumSessionCard
                    key={i}
                    group_name={forum.group_name}
                    date={forum.date}
                    last_text={forum.last_text}
                    icon={forum.icon}
                  />
                ))}
              </div>
            ) : (
                <>
                  <div className="info-group">
                  <div className="text-nogroups-joined">
                    <p>You haven't joined any group yet,
                      see suggestions below
                    </p>
                  </div>
                  <div className="recommend">Recommended Groups</div></div>
                <div className="groups-container">
                  {disasterManagementGroups.map((group, index) => (
                    <OtherForums
                      key={index}
                      name={group.name}
                      date={group.date}
                      description={group.description}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}
        {selectedSegment === "second" && (
          <>
            <div>
           {disasterForums.map((forum, i) => (
                  <ForumSessionCard
                    key={i}
                    group_name={forum.group_name}
                    date={forum.date}
                    last_text={forum.last_text}
                    icon={forum.icon}
                  />
                ))}
              </div>
          </>
        )}
        {selectedSegment === "third" && <p>
          <button onClick={handleCreateForum}>
            add forum
        </button>
          
        </p>}
        {selectedSegment === "four" && <p>content for the fourth segment</p>}

        <div className="add-button">
          <IonIcon />
        </div>

        <ChatBotButton />
      </IonContent>
    </IonPage>
  );
}

export default CommunityPage;
