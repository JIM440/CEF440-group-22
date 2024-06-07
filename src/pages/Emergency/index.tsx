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
	IonLabel,
} from "@ionic/react";

import { chevronForward } from "ionicons/icons";

import menuIcon from "../../assets/icons/menu.svg";
import notificationIcon from "../../assets/icons/notification.svg";
import EmergencyCall from "../../assets/images/Emergency_call.png";
import ReportDisaster from "../../assets/images/Report_Disaster.png";
import RequestHelp from "../../assets/images/help.png";

import ChatBotButton from "../../components/Buttons/Ai_bot";
import HeaderAvatar from "../../components/Avatar";

import { FormattedMessage } from "react-intl";

const ReportPage = () => (
	<IonPage>
		<IonHeader class="ion-no-border">
			<IonToolbar>
				<IonButtons slot="start">
					<IonMenuButton>
						<IonIcon src={menuIcon}></IonIcon>
					</IonMenuButton>
				</IonButtons>
				<IonTitle>
					<FormattedMessage id="Emergency" />
				</IonTitle>
				<HeaderAvatar />
				<IonButtons slot="end" className="notification">
					<IonButton>
						<IonIcon src={notificationIcon}></IonIcon>
						<IonBadge class="dot-badge">.</IonBadge>
					</IonButton>
				</IonButtons>
			</IonToolbar>
		</IonHeader>
		<IonContent>
			<div className="main-emergency-body">
				<div className="main-disaster-section reverse-disaster-section">
					<div className="illustration-section">
						<img src={EmergencyCall} alt="emergency_call" />
					</div>
					<div className="option-name-explanation">
						<h2>Emergency call</h2>
						<p className="explanatory-text">
							Call an emergency number
						</p>
						<IonButton className="primary-button" mode="ios">
							<IonLabel>Proceed</IonLabel>
							<IonIcon src={chevronForward} />
						</IonButton>
					</div>
				</div>
				<div className="main-disaster-section">
					<div className="illustration-section">
						<img src={ReportDisaster} alt="report" />
					</div>
					<div className="option-name-explanation">
						<h2>Report Disaster</h2>
						<p className="explanatory-text">
							Tell us what's happening
						</p>
						<IonButton className="primary-button" mode="ios">
							<IonLabel>Proceed</IonLabel>
							<IonIcon src={chevronForward} />
						</IonButton>
					</div>
				</div>
				<div className="main-disaster-section reverse-disaster-section">
					<div className="illustration-section">
						<img src={RequestHelp} alt="help" />
					</div>
					<div className="option-name-explanation">
						<h2>Request help</h2>
						<p className="explanatory-text">
							Seek disaster assistance
						</p>
						<IonButton className="primary-button" mode="ios">
							<IonLabel>Proceed</IonLabel>
							<IonIcon src={chevronForward} />
						</IonButton>
					</div>
				</div>
			</div>
			<ChatBotButton />
		</IonContent>
	</IonPage>
);

export default ReportPage;
