import { IonContent, IonIcon, IonList } from "@ionic/react";
import React from "react";
import "./OtherForums.css";
import moreArrow from "../../assets/icons/moreArrow.svg";

interface OtherForumsProps {
    name: string;
    date: string;
    description: string;
}

const OtherForums: React.FC<OtherForumsProps>= ({name,date,description}) => {
  return (
    <div className="group-card">
      <div className="group-header">
        <div className="group-initials">
          <p>FM</p>
        </div>
              <p className="group-date">{ date}</p>
      </div>
          <div className="group-name">{ name}</div>

      <div className="group-description">
        {description}
      </div>
       <div className="group-more">
          <span>More</span> 
          <IonIcon src={moreArrow} />
        </div>
    </div>
  );
};

export default OtherForums;