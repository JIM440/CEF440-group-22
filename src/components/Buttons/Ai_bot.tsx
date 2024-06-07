import React from "react";
import { IonFab, IonFabButton, IonIcon, IonLabel } from "@ionic/react";
import chatBotIcon from "../../assets/icons/chatbot.svg";
import "./ButtonComponents.css";

function ChatBotButton() {
	return (
		<IonFab className="float chatbot-float">
			<IonFabButton className="primary-button">
				<IonIcon icon={chatBotIcon}></IonIcon>
			</IonFabButton>
		</IonFab>
	);
}
export default ChatBotButton;
