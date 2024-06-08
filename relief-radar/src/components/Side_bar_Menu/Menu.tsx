import {
	IonContent,
	IonIcon,
	IonItem,
	IonLabel,
	IonList,
	IonListHeader,
	IonMenu,
	IonMenuToggle,
	IonAvatar,
	IonChip,
} from "@ionic/react";

import { useLocation } from "react-router-dom";
import {
	archiveOutline,
	archive,
	bookmarkOutline,
	heartOutline,
	heart,
	mailOutline,
	mail,
	paperPlaneOutline,
	paperPlane,
	trashOutline,
	trash,
	warningOutline,
	warning,
	settingsSharp,
	cogOutline,
	settingsOutline,
} from "ionicons/icons";
import { FormattedMessage } from "react-intl";
import "./Menu.css";

interface AppPage {
	url: string;
	iosIcon: string;
	mdIcon: string;
	title: string;
}

const appPages: AppPage[] = [
	{
		title: "Profile",
		url: "/menu/Settings",
		iosIcon: settingsOutline,
		mdIcon: settingsSharp,
	},
	{
		title: "Guides",
		url: "/menu/Settings",
		iosIcon: settingsOutline,
		mdIcon: settingsSharp,
	},
	{
		title: "Settings",
		url: "/menu/Settings",
		iosIcon: settingsOutline,
		mdIcon: settingsSharp,
	},
	{
		title: "Feedback and support",
		url: "/menu/Settings",
		iosIcon: settingsOutline,
		mdIcon: settingsSharp,
	}
	
];

const Menu: React.FC = () => {
	const location = useLocation();

	return (
		<IonMenu contentId="main" type="push" swipeGesture={true}>
			<IonContent>
				<IonList id="inbox-list">
					{appPages.map((appPage, index) => {
						return (
							<IonMenuToggle key={index} autoHide={false}>
								<IonItem
									className={
										location.pathname === appPage.url ? "selected" : ""
									}
									routerLink={appPage.url}
									routerDirection="none"
									lines="none"
									detail={false}>
									<IonIcon
										aria-hidden="true"
										slot="start"
										ios={appPage.iosIcon}
										md={appPage.mdIcon}
									/>
									<IonLabel>{<FormattedMessage id={appPage.title}/>}</IonLabel>
								</IonItem>
							</IonMenuToggle>
						);
					})}
				</IonList>
			</IonContent>
		</IonMenu>
	);
};

export default Menu;
