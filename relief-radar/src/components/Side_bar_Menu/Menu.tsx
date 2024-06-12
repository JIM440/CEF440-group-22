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
  useIonRouter,
} from "@ionic/react";

import profile from '../../assets/icons/profile.svg'
import guide from "../../assets/icons/guide.svg";
import about from "../../assets/icons/about.svg";
import feedback from "../../assets/icons/feedback.svg";
import megaphone from '../../assets/icons/IonMdMegaphone.svg'

import { useLocation } from "react-router-dom";
import { settingsSharp } from "ionicons/icons";
import { FormattedMessage } from "react-intl";
import "./Menu.css";

interface AppPage {
  url: string;
  Icon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: "Profile",
    url: "/menu/profile",
    Icon: profile,
  },
  {
    title: "Guides",
    url: "/menu/guides",
    Icon: guide,
  },
  {
    title: 'Announcements',
    url: '/user/anouncements',
    Icon: megaphone,
  },
  {
    title: "Settings",
    url: "/menu/settings",
    Icon: settingsSharp,
  },
  {
    title: "Feedback",
    url: "/menu/feedback",
    Icon: feedback,
  },
  {
    title: "About",
    url: "/menu/about",
    Icon: about,
  },
];

const Menu: React.FC = () => {
  const location = useLocation();
  const Router = useIonRouter()
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
                  // routerLink={appPage.url}
                  // routerDirection="none"
                  lines="none"
                  detail={false}

                  onClick={()=>{
                    Router.push(appPage.url)
                  }}
                >
                  <IonIcon
                    aria-hidden="true"
                    slot="start"
                    md={appPage.Icon}
                  />
                  <IonLabel>{<FormattedMessage id={appPage.title} />}</IonLabel>
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
