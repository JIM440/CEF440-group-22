import { IonContent, IonIcon, IonList, IonModal, IonButton, IonLabel } from "@ionic/react";
import React, { useState } from "react";
import "./OtherForums.css";
import moreArrow from "../../assets/icons/moreArrow.svg";
import { chevronForward } from "ionicons/icons";

interface OtherForumsProps {
    name: string;
    date: string;
    description: string;
    onClick: any
}

const OtherForums: React.FC<OtherForumsProps>= ({name,date,description, onClick}) => {
  return (
    <div className="group-card">
      <div className="group-header">
        <div className="group-name-parent">
        <div className="group-initials">
          <p>FM</p>
        </div><div className="group-name">{ name}</div>
        </div>

              <p className="group-date">{ date}</p>
      </div>

      <div className="group-description">
        {description}
      </div>
       <div id="open-modal" className="group-more" onClick={onClick}>
          <span>View More</span> 
          <IonIcon src={chevronForward} />
        </div>
    </div>
  );
};

export default OtherForums;