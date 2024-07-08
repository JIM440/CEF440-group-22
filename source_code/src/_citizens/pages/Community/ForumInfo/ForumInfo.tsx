import React, { useState } from "react";
import "./ForumInfo.css";
import { Link, useHistory } from "react-router-dom";

import {
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonPage,
  IonToolbar
} from "@ionic/react";

import leftArrow from "../../../../assets/icons/arrowLeft.svg";
import dots from "../../../../assets/icons/dots.svg";
import people from "../../../../assets/icons/people.svg";

const persons = [
  { name: "Alice Johnson", location: "New York" },
  { name: "Charlie Martins", location: "Los Angeles" },
  { name: "Emily Davis", location: "Chicago" },
  { name: "Grace Wilson Hannah", location: "Houston" },
  { name: "Jack White Black", location: "Phoenix" },
  { name: "LiMia Clark", location: "Philadelphia" },
  { name: "Olivia Walker", location: "San Antonio" },
  { name: "Pau-Hall Quinn Allen", location: "San Diego" },
  { name: "Ryan Scott", location: "Dallas" },
  { name: "Tyler Uma Nelson", location: "San Jose" },
];

type objectCredential = {
  name: string;
  location: string;
};

const PersonCard = ({ name, location }: objectCredential) => {
  function setInitialsOfName(name: string): string {
    const wordsOfName = name.split(" ");
    const initials = wordsOfName[0][0] + wordsOfName[1][0];
    return initials.toUpperCase();
  }

  return (
    <div className="person-card-container">
      <div className="person-name-initials">{setInitialsOfName(name)}</div>
      <div className="person-fullname-location">
        <div className="fullname"> {name}</div>
        <div className="location"> Location: {location}</div>
      </div>
    </div>
  );
};

function ForumInfo() {
  const [showPopup, setShowPopUp] = useState(false);

  function Popup() {
    setShowPopUp(!showPopup);
  }

  function Popupfalse() {
    setShowPopUp(false);
  }

   function gotoInfoPage() {
    history.push(`/community/foruminfo`);
    setShowPopUp(!showPopup);
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
              <IonIcon
                src={leftArrow}
                className="arrow-left-icon"
                onClick={goBack}
              />
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
      <IonContent fullscreen={true}>
        <IonLabel className="group-number">
          <IonIcon src={people} className="icon" />
          Group - 243members
        </IonLabel>
        <div className="creation-info">
          <IonLabel className="item">
            Created At
            <p>12/04/2033</p>
          </IonLabel>
          <IonLabel className="item">
            Created By
            <p>Dwan Johnson</p>
          </IonLabel>
          <IonLabel className="item">
            Type
            <p>General</p>
          </IonLabel>
        </div>

         <div className="group-members">Group description</div>
        <div className="explanatory-text ET">
          Group was created to enhance communication among people of the northen hermisphere 
        </div>

        <div className="group-members">Group members</div>
        <div className="member-list">
          {persons.map((person, index) => (
            <PersonCard name={person.name} location={person.location} />
          ))}
        </div>

      </IonContent>
    </IonPage>
  );
}

export default ForumInfo;
