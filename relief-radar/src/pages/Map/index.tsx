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
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					height: "100%",
				}}>
				<div id="container">
					<strong>GeoSpatial Data and Mapping</strong>
					<p>
						Explore{" "}
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://ionicframework.com/docs/components">
							UI Components
						</a>
					</p>
				</div>
			</div>
			<ChatBotButton />
		</IonContent>
	</IonPage>
);

export default MapPage;
