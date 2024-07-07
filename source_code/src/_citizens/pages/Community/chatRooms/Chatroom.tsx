import {
  IonList,
  IonItem,
  IonLabel,
  IonAvatar,
  IonBadge,
  IonContent,
  IonIcon,
} from '@ionic/react';
import React from 'react';
import './Chatroom.css';
import training from '../../../../assets/icons/training.svg'
import firstaid from '../../../../assets/icons/firstaid.svg'

export interface ChatSession {
  id: number;
  name: string;
  invitedPeople: number;
  description: string;
  timeBefore: string;
  status: string;
  icon: any,
}

export const sessions: ChatSession[] = [
  {
    id: 1,
    name: 'Emergency Response Training',
    invitedPeople: 15,
    description: 'Training for disaster response teams',
    timeBefore: '2 hours',
    status: 'Private',
    icon: training,
  },
  {
    id: 2,
    name: 'Private Strategy Discussion',
    invitedPeople: 5,
    description: 'Discussion on disaster management strategy',
    timeBefore: '3 days',
    status: 'Public',
    icon: firstaid,
  },
];

const ChatRoom: React.FC = () => {
  return (
    <div className="chat-room-container">
        <p className='chat-room-upcoming'>Upcoming Chat Sessions</p>
      {sessions.map((session: ChatSession) => (<div className="FS-card-container" key={session.id}>
        <div className="left-card">
         <div className="icon gen-icon">
              <IonIcon src={session.icon} />
            </div>
        </div>
        <div className="right-card">
          <div className="name-date">
            <p className="group_name">{session.name}</p>
            <div>In {session.timeBefore}</div>
          </div>
          <div className="last-text">{session.description}</div>
          <div className="bottom">
            <p>{session.invitedPeople} invited</p>
            <p>{session.status} Session</p>
        </div>
        </div>
      </div>))}
    </div>
  );
};

export default ChatRoom;
