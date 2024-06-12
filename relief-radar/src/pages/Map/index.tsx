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
	IonSearchbar,
} from "@ionic/react";

import menuIcon from "../../assets/icons/menu.svg";
import notificationIcon from "../../assets/icons/notification.svg";

import ChatBotButton from "../../components/Buttons/Ai_bot";
import HeaderAvatar from "../../components/Avatar";

import { FormattedMessage } from "react-intl";

import map from '../../assets/images/map.jpg'

const MapPage = () => (
	<IonPage>
		<IonHeader class="ion-no-border">
			<IonToolbar>
				<IonButtons slot="start">
					<IonMenuButton>
						<IonIcon src={menuIcon}></IonIcon>
					</IonMenuButton>
				</IonButtons>
				<IonTitle><FormattedMessage id="Map"/></IonTitle>
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
			<div><img style={{objectFit: 'cover', position: 'relative', bottom: '150px'}} width='1000px' height='1000px' src={map} alt="" />
			</div>
			<ChatBotButton />
		</IonContent>
	</IonPage>
);

export default MapPage;
