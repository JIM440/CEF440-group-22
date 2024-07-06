import { IonContent, IonIcon, IonList } from "@ionic/react";
import React from "react";
import "./OtherForums.css";
import moreArrow from "../../assets/icons/moreArrow.svg";
import { chevronForward } from "ionicons/icons";

interface OtherForumsProps {
    name: string;
    date: string;
    description: string;
}

const OtherForums: React.FC<OtherForumsProps>= ({name,date,description}) => {
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
       <div className="group-more">
          <span>View More</span> 
          <IonIcon src={chevronForward} />
        </div>
    </div>
  );
};

export default OtherForums;