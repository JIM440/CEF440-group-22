import {
  IonRouterOutlet,
  IonSplitPane,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonBadge,
} from "@ionic/react";

import { home, map } from "ionicons/icons";
import reportIcon from "./assets/icons/emergency.svg";
import reportIconActive from "./assets/icons/emergency_active.svg";
import communityIcon from "./assets/icons/community.svg";
import communityIconActive from "./assets/icons/community_active.svg";
import homeIcon from "./assets/icons/home.svg";
import homeIconActive from "./assets/icons/home_active.svg";
import mapIcon from "./assets/icons/map.svg";
import mapIconActive from "./assets/icons/map_active.svg";

import Menu from "./components/Side_bar_Menu/Menu";
import MapPage from "./pages/Map/index";
import CommunityPage from "./pages/Community/index";
import CommunityChatPage from "./pages/Community/CommunityChatPage/CommunityChatPage";
import ForumInfo from "./pages/Community/ForumInfo/ForumInfo";
import HomePage from "./pages/Home/index";
import ReportPage from "./pages/Emergency/index";
import AuthenticationPage from "./pages/Auth";
import SettingPage from "./pages/SideMenuPages/settings/settings";
import { FormattedMessage } from "react-intl";
import LoginPage from "./pages/Auth/Login";
import WelcomeScreen from "./pages/Auth/welcome";

import GuideList from "./pages/Guides/Guides";
import GuideContent from "./pages/Guides/GuideContent";
import Profile from "./pages/Profile/Profile";
import EditProfile from "./pages/Profile/EditProfile";
import ResPonderAlerts from "./pages/ResponderPanel/Alert";
import ValidateDisaster from "./pages/ResponderPanel/ValidateAlert";
import UpdateDisasterStatus from "./pages/ResponderPanel/UpdateAlertStatus";
import Alerts from "./pages/Alerts/Alerts";
import ReportUpdate from "./pages/ResponderPanel/ReportUpdate";
import Anouncements from "./pages/ResponderPanel/Anouncements";
import TheShit from "./pages/Anouncement/AnounceTheShir";

import { useState, useEffect } from "react";
import { Redirect, Route, useLocation, useHistory } from "react-router-dom";
import ChatBot from "./pages/ChatBot/ChatBot";
import WeatherDetailPage from "./pages/WeatherDetailPage/WeatherDetailPage";
import ChatSession from "./pages/Community/chatsessionpage/ChatSession";
import EmergencyCall from "./pages/Emergency/EmergencyCall";
import ReportDisasterPage from "./pages/Emergency/ReportDisaster";

interface ContainerProps {
  locale: string;
  setLocale: Function;
}

const AppBody: React.FC<ContainerProps> = ({ locale, setLocale }) => {
  const [hideTabBar, setHideTabBar] = useState(false);
  const [darkThemeSet, setDarkTheme] = useState(false);
  const location = useLocation();

  useEffect(() => {
    location.pathname.includes("/tabs/")
      ? setHideTabBar(false)
      : setHideTabBar(true);
  }, [location]);

  var history = useHistory();

  function setColorScheme(scheme: string) {
    document.documentElement.setAttribute("data-theme", scheme);
    window.localStorage.setItem("colorScheme", scheme);
    setDarkTheme(scheme == "dark" ? true : false);
  }

  useEffect(() => {
    const storedColorScheme = window.localStorage.getItem("colorScheme");
    let initialColorScheme;

    if (storedColorScheme) {
      initialColorScheme = storedColorScheme;
    } else {
      initialColorScheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
    }

    setColorScheme(initialColorScheme);
  }, []);

  useEffect(() => {}, [darkThemeSet]);

  return (
    <IonSplitPane contentId="main">
      <IonTabs>
        <IonRouterOutlet id="main">
          <Route path="/" exact={true}>
            <Redirect to="/index/language" />
          </Route>
          <Route path="/index/language" exact={true}>
            <AuthenticationPage setLocale={setLocale} locale={locale} />
          </Route>
          <Route path="/index/login" exact={true}>
            <LoginPage />
          </Route>
          <Route path="/index/welcome" exact={true}>
            <WelcomeScreen />
          </Route>
          <Route path="/" exact={true}>
            <Redirect to="/index/language" />
          </Route>
          <Route path="/tabs/home" exact={true}>
            <HomePage locale={locale} />
          </Route>
          <Route path="/tabs/home/weatherdetail" exact={true}>
            <WeatherDetailPage />
          </Route>
          <Route path="/tabs/map" exact={true}>
            <MapPage />
          </Route>
          <Route path="/tabs/community" exact={true}>
            <CommunityPage />
          </Route>
          <Route path="/community/chatpage" exact={true}>
            <CommunityChatPage />
          </Route>
          <Route path="/community/foruminfo" exact={true}>
            <ForumInfo />
          </Route>
          <Route path="/community/chatsessionpage" exact={true}>
            <ChatSession />
          </Route>
          <Route path="/chatbot" exact={true}>
            <ChatBot />
          </Route>
          <Route path="/tabs/report" exact={true}>
            <ReportPage />
          </Route>
          <Route path="/menu/Settings" exact={true}>
            <SettingPage
              history={history}
              darkMode={darkThemeSet}
              setDarkTheme={setColorScheme}
              locale={locale}
              setLocale={setLocale}
            />
          </Route>
          {/* guides */}
          <Route path="/menu/guides" exact={true}>
            <GuideList />
          </Route>
          <Route path="/menu/guides/:id" exact={true}>
            <GuideContent />
          </Route>
          {/* profile */}
          <Route path="/menu/profile/" component={Profile} exact={true} />
          <Route
            path="/menu/profile/edit"
            component={EditProfile}
            exact={true}
          />
          <Route path="/alerts" component={Alerts} exact={true} />
          <Route path="/user/anouncements" component={TheShit} exact={true} />
          <Route path="/anouncements/y" component={TheShit} exact={true} />
          {/*  responderpages*/}
          {/*  responderpages*/}
          <Route path="/alerts/updates" component={ReportUpdate} exact={true} />
          <Route path="/anouncements" component={Anouncements} exact={true} />
          <Route path="/anouncements/x" component={Anouncements} exact={true} />
          <Route
            path="/responder/alerts"
            component={ResPonderAlerts}
            exact={true}
          />
          <Route
            path="/responder/alerts/pending"
            component={ValidateDisaster}
            exact={true}
          />
          <Route
            path="/responder/alerts/reported"
            component={UpdateDisasterStatus}
            exact={true}
          />

          <Route
            path="/emergency/call"
            component={EmergencyCall}
            exact={true}
          />
          <Route
            path="/emergency/report"
            component={ReportDisasterPage}
            exact={true}
          />
          <Route
            path="/weather/detail"
            component={WeatherDetailPage}
            exact={true}
          />
        </IonRouterOutlet>

        <IonTabBar slot="bottom" className={hideTabBar ? "hide-tab-bar" : ""}>
          <IonTabButton tab="home" href="/tabs/home">
            <IonIcon
              icon={
                location.pathname == "/tabs/home" ? homeIconActive : homeIcon
              }
            />
            <IonLabel>
              <FormattedMessage id="Home" />
            </IonLabel>
          </IonTabButton>

          <IonTabButton tab="map" href="/tabs/map">
            <IonIcon
              icon={location.pathname == "/tabs/map" ? mapIconActive : mapIcon}
            />
            <IonLabel>
              <FormattedMessage id="Map" />
            </IonLabel>
            <IonBadge className="dot-badge">.</IonBadge>
          </IonTabButton>

          <IonTabButton tab="report" href="/tabs/report">
            <IonIcon
              icon={
                location.pathname == "/tabs/report"
                  ? reportIconActive
                  : reportIcon
              }
            />
            <IonLabel>
              <FormattedMessage id="Emergency" />
            </IonLabel>
          </IonTabButton>

          <IonTabButton tab="community" href="/tabs/community">
            <IonIcon
              icon={
                location.pathname == "/tabs/community"
                  ? communityIconActive
                  : communityIcon
              }
            />
            <IonLabel>
              <FormattedMessage id="Community" />
            </IonLabel>
            <IonBadge>28</IonBadge>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
      <Menu />
    </IonSplitPane>
  );
};

export default AppBody;
