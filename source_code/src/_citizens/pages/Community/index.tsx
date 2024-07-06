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
  useIonRouter,
  IonSegmentButton,
} from "@ionic/react";
import menuIcon from "../../../assets/icons/menu.svg";
import notificationIcon from "../../../assets/icons/notification.svg";
import announcement from "../../../assets/icons/announcements.svg";

import ChatBotButton from "../../../components/Buttons/Ai_bot";
import HeaderAvatar from "../../../components/Avatar";

import { FormattedMessage } from "react-intl";
import ForumSessionCard from "../../../components/ForumSessionCard/ForumSessionCard";

import home from "../../../assets/icons/home.svg";
import genericForum from "../../../assets/icons/genericForum.svg";
import chatsession from "../../../assets/icons/chatsession.svg";
import "./Community.css";
import { useHistory } from "react-router";
import OtherForums from "../../../components/otherForums/OtherForums";

import { serverTimestamp } from "firebase/firestore";

const disasterForums = [
  {
    group_name: "Announcements",
    date: "June 6",
    last_text:
      "We saved 3 girls from Buea Lanslide yesterday beside the mountain.",
    icon: announcement,
  },
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

  const messages = [
    {
      id: 1,
      sender: "Emergency Services",
      timestamp: new Date(),
      content: "Evacuation underway for residents near the Central Park fire. Please follow instructions from emergency personnel.",
      severity: "High",
    },
    {
      id: 2,
      sender: "Red Cross",
      timestamp: new Date(Date.now() - 3600000), // One hour ago
      content: "Donation centers are open at City Hall and Central Library. We urgently need water, blankets, and non-perishable food items.",
      severity: "Medium",
    },
    {
      id: 3,
      sender: "Community Shelter",
      timestamp: new Date(Date.now() - 7200000), // Two hours ago
      content: "The Community Shelter at the School Gymnasium is now open to displaced residents. Please bring identification and any necessary medications.",
      severity: "Low",
    },
    {
      id: 4,
      sender: "Power Company",
      timestamp: new Date(),
      content: "Power outages are expected in the affected area. Crews are working to restore power as quickly as possible.",
      severity: "Medium",
    },
    {
      id: 5,
      sender: "Department of Transportation",
      timestamp: new Date(Date.now() - 1800000), // Half hour ago
      content: "Roads surrounding the fire are closed. Please use alternate routes and avoid the area.",
      severity: "High",
    },
    {
      id: 6,
      sender: "Local News Station",
      timestamp: new Date(Date.now() - 5400000), // One and a half hours ago
      content: "Live updates on the Central Park fire are available on our website and social media channels.",
      severity: "Low",
    },
    {
      id: 7,
      sender: "Community Volunteer Group",
      timestamp: new Date(),
      content: "We are organizing a volunteer effort to assist with relief operations. If you can help, please contact us at [phone number] or [email address].",
      severity: "Medium",
    },
    {
      id: 8,
      sender: "Animal Shelter",
      timestamp: new Date(Date.now() - 21600000), // Six hours ago
      content: "The Animal Shelter is accepting lost or displaced pets. Please bring any necessary documentation for your pet.",
      severity: "Medium",
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

interface DisasterContentSection {
  image: string;
  introductory_text: string;
  content: string;
}

interface DisasterGuide {
  id: string;
  disaster: string;
  content: {
    before: DisasterContentSection;
    during: DisasterContentSection;
    after: DisasterContentSection;
  };
}

import { handleCreateAnnouncement } from '../../../services/controllers/announcement'
import { handleCreateUser,getAllUserVolunteers,getUsersInLosAngeles, updateUserLocation,deleteUser } from '../../../services/controllers/users'
import { handleCreateResponder } from '../../../services/controllers/responder'
import { handleCreateHelpRequest } from '../../../services/controllers/help_request'
import { createForum,getAllForums } from '../../../services/controllers/forum'
import { handleCreateGuide} from '../../../services/controllers/Guide'

import { handleCreateIncident } from '../../../services/controllers/incident'
import '../Anouncement/Announcements.css'
import AlertIcon from "../components/Alerts";
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
  
  const disasterGuide: DisasterGuide = {
  id: "unique-identifier-001",
  disaster: "earthquake",
  content: {
    before: {
      image: "path/to/before-image.jpg",
      introductory_text: "What to do before an earthquake strikes:",
      content: "Ensure your home is earthquake-resistant. Secure heavy furniture and have an emergency kit ready."
    },
    during: {
      image: "path/to/during-image.jpg",
      introductory_text: "What to do during an earthquake:",
      content: "Drop, Cover, and Hold On. Stay indoors until the shaking stops and it is safe to exit."
    },
    after: {
      image: "path/to/after-image.jpg",
      introductory_text: "What to do after an earthquake:",
      content: "Check yourself and others for injuries. Be prepared for aftershocks and follow official updates."
    }
  }
};


   const handleCreateForum = async () => {
     try {
      // await handleCreateAnnouncement()
      // await handleCreateHelpRequest()
      // await handleCreateIncident()
      // await handleCreateResponder()
       // await handleCreateUser()
       //  await handleCreateGuide()
       
       const data = await deleteUser()
       console.log(data);
    
    } catch (error) {
      console.error('Error creating collections:', error);
    }
  };

   const router = useIonRouter()
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
          <AlertIcon />
        </IonToolbar>
      </IonHeader>


      <IonContent>
        <IonSegment mode='md'
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
                    <p>You haven't joined any group yet
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
        {selectedSegment === "four" && (
              <IonContent className="">
               <div className='FS-card-container'>
            <div className="left-card">
                <div className='icon gen-icon'><IonIcon src={announcement}  /></div>
            </div>
            <div className="right-card">
                <div className='name-date'>
                    <p className='group_name'>Annoucements</p>
                    <div>June 5</div>
                </div>
                <div className="last-text">
                We saved 3 girls from Buea Lanslide yesterday beside the mountain.
                </div>
            </div>
        </div>
               </IonContent>
        )}

        <div className="add-button">
          <IonIcon />
        </div>

        <ChatBotButton />
      </IonContent>
    </IonPage>
  );
}

export default CommunityPage;