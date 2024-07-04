import React, {useContext} from 'react';
import { IonIcon } from "@ionic/react";
import { useHistory } from 'react-router-dom';
import './forumSessionCard.css';


type cardOjectprops = {
    group_name: string,
    date: string,
    last_text: string,
    icon?: string;
}

function ForumSessionCard({ group_name, date, last_text, icon }: cardOjectprops) {
    const history = useHistory();
    
    function setInitialsOfName(name: string): string {   
        const wordsOfName = name.split(' ');
        const initials = wordsOfName[0][0] + wordsOfName[1][0];
        return initials.toUpperCase();
    }
    
    function nameChecker(name: string): string {   
        if (name.length > 26) {
            return name.slice(0, 20) + "...";
        }
        return name;
    }

    const handleCardClick = () => {
        history.push(`/community/chatpage`);   
    };

    return (
        <div className='FS-card-container' onClick={handleCardClick}>
            <div className="left-card">
                {icon ? <IonIcon src={icon} className='gen-icon' /> : <div className='initials'>{ setInitialsOfName(group_name)}</div>}
            </div>
            <div className="right-card">
                <div className='name-date'>
                    <div>{ nameChecker(group_name)}</div>
                    <div>{ date}</div>
                </div>
                <div className="last-text">
                    {last_text}
                </div>
            </div>
        </div>
    );
}

export default ForumSessionCard;
