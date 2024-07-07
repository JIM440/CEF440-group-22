import { useState, useEffect } from "react";
import { Redirect, Route, useLocation, useHistory } from "react-router-dom";
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

// ================================ icons ================================
import { home, map } from "ionicons/icons";
import reportIcon from "./assets/icons/emergency.svg";
import reportIconActive from "./assets/icons/emergency_active.svg";
import communityIcon from "./assets/icons/community.svg";
import communityIconActive from "./assets/icons/community_active.svg";
import homeIcon from "./assets/icons/home.svg";
import homeIconActive from "./assets/icons/home_active.svg";
import mapIcon from "./assets/icons/map.svg";
import mapIconActive from "./assets/icons/map_active.svg";

// ================================ citizen pages ================================
import Menu from "./components/Side_bar_Menu/Menu";
import MapPage from "./_citizens/pages/Map/index";
import CommunityPage from "./_citizens/pages/Community/index";
import CommunityChatPage from "./_citizens/pages/Community/CommunityChatPage/CommunityChatPage";
import ForumInfo from "./_citizens/pages/Community/ForumInfo/ForumInfo";
import HomePage from "./_citizens/pages/Home/index";
import ReportPage from "./_citizens/pages/Emergency/index";
import AuthenticationPage from "./_citizens/pages/Auth";
import SettingPage from "./_citizens/pages/SideMenuPages/settings/settings";
import WelcomeScreen from "./_citizens/pages/Auth/welcome";
import LoginPage from "./_citizens/pages/Auth/Login";
import { FormattedMessage } from "react-intl";

import GuideList from "./_citizens/pages/Guides/Guides";
import GuideContent from "./_citizens/pages/Guides/GuideContent";
import Profile from "./_citizens/pages/Profile/Profile";
import EditProfile from "./_citizens/pages/Profile/EditProfile";
import Alerts from "./_citizens/pages/Alerts/Alerts";

import ChatBot from "./_citizens/pages/ChatBot/ChatBot";
import WeatherDetailPage from "./_citizens/pages/WeatherDetailPage/WeatherDetailPage";
import ChatSession from "./_citizens/pages/Community/chatsessionpage/ChatSession";
import EmergencyCall from "./_citizens/pages/Emergency/EmergencyCall";
import ReportDisasterPage from "./_citizens/pages/Emergency/ReportDisaster";
import ResponderHome from "./_responders/pages/home/ResponderHome";
import ResponderMaps from "./_responders/pages/maps/ResponderMaps";
import ResponderEmergency from "./_responders/pages/emergency/ResponderEmergency";
import ResponderCommunity from "./_responders/pages/community/ResponderCommunity";
import ResponderAlerts from "./_responders/pages/alerts/ResponderAlerts";
import ResponderProfile from "./_responders/pages/profile/ResponderProfile";
import ResponderValidateDisaster from "./_responders/pages/alerts/ResponderValidateAlert";
import ResponderReportUpdate from "./_responders/pages/alerts/ResponderReportUpdate";
import ResponderUpdateDisasterStatus from "./_responders/pages/alerts/ResponderUpdateAlertStatus";

// ================================ responder pages ================================

interface ContainerProps {
  locale: string;
  setLocale: Function;
}

const AppBody: React.FC<ContainerProps> = ({ locale, setLocale }) => {
  const [hideTabBar, setHideTabBar] = useState(false);
  const [showResponderTab, setShowResponderTab] = useState(false);
  const [darkThemeSet, setDarkTheme] = useState(false);
  const location = useLocation();

  useEffect(() => {
    location.pathname.includes("/tabs/")
      ? setHideTabBar(false)
      : setHideTabBar(true);

    location.pathname.includes("/responder/tabs/")
      ? setShowResponderTab(true)
      : setShowResponderTab(false);
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
          <Route path="/" exact={true}>
            <Redirect to="/index/language" />
          </Route>
          <Route path="/index/welcome" exact={true}>
            <WelcomeScreen />
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
          {/* ================================
          ================================
          ================================
          ================================
          ================================
          ================================
          
          responderpages
          ================================
          ================================
          ================================
          ================================
          ================================ */}

          <Route
            path="/responder/tabs/home"
            component={ResponderHome}
            exact={true}
          />
          <Route
            path="/responder/tabs/map"
            exact={true}
            component={ResponderMaps}
          />
          <Route
            path="/responder/tabs/emergency"
            exact={true}
            component={ResponderEmergency}
          />
          <Route
            path="/responder/tabs/community"
            exact={true}
            component={ResponderCommunity}
          />
          {/* alerts */}
          <Route
            path="/responder/alerts"
            exact={true}
            component={ResponderAlerts}
          />
          <Route
            path="/responder/alerts/validate"
            exact={true}
            component={ResponderValidateDisaster}
          />
          <Route
            path="/responder/alerts/update"
            exact={true}
            component={ResponderUpdateDisasterStatus}
          />
          <Route
            path="/responder/alerts/reportupdate"
            exact={true}
            component={ResponderReportUpdate}
          />
          {/* profile */}
          <Route
            path="/responder/profile"
            exact={true}
            component={ResponderProfile}
          />
          <Route path="/index/login" exact={true} component={LoginPage} />
        </IonRouterOutlet>

        {/*================================
================================
Citizen Tabs
================================
================================*/}
        {!showResponderTab && (
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
                icon={
                  location.pathname == "/tabs/map" ? mapIconActive : mapIcon
                }
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
        )}

        {/*================================
================================
Responder Tabs
================================
================================*/}
        {showResponderTab && (
          <IonTabBar slot="bottom" className={hideTabBar ? "hide-tab-bar" : ""}>
            <IonTabButton tab="home" href="/responder/tabs/home">
              <IonIcon
                icon={
                  location.pathname == "/responder/tabs/home"
                    ? homeIconActive
                    : homeIcon
                }
              />
              <IonLabel>
                <FormattedMessage id="Home" />
              </IonLabel>
            </IonTabButton>

            <IonTabButton tab="map" href="/responder/tabs/map">
              <IonIcon
                icon={
                  location.pathname == "/responder/tabs/map"
                    ? mapIconActive
                    : mapIcon
                }
              />
              <IonLabel>
                <FormattedMessage id="Map" />
              </IonLabel>
              <IonBadge className="dot-badge">.</IonBadge>
            </IonTabButton>

            <IonTabButton tab="report" href="/responder/tabs/emergency">
              <IonIcon
                icon={
                  location.pathname == "/responder/tabs/emergency"
                    ? reportIconActive
                    : reportIcon
                }
              />
              <IonLabel>
                <FormattedMessage id="Emergency" />
              </IonLabel>
            </IonTabButton>

            <IonTabButton tab="community" href="/responder/tabs/community">
              <IonIcon
                icon={
                  location.pathname == "/responder/tabs/community"
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
        )}
      </IonTabs>

      <Menu />
    </IonSplitPane>
  );
};

export default AppBody;
