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
import reportIcon from "./assets/icons/siren-on-md.svg";
import communityIcon from "./assets/icons/community-md.svg";

import Menu from "./components/Side_bar_Menu/Menu";
import MapPage from "./pages/Map/index";
import CommunityPage from "./pages/Community/index";
import HomePage from "./pages/Home/index";
import ReportPage from "./pages/Emergency/index";
import SettingPage from "./pages/SideMenuPages/settings/settings";
import { FormattedMessage } from "react-intl";

import { useState, useEffect } from "react";
import { Redirect, Route, useLocation, useHistory } from "react-router-dom";

interface ContainerProps {
	locale: string;
	setLocale: Function;
}

const AppBody: React.FC<ContainerProps> = ({locale, setLocale}) => {
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
						<Redirect to="/tabs/home" />
					</Route>
					<Route path="/tabs/home" exact={true}>
						<HomePage locale={locale} />
					</Route>
					<Route path="/tabs/map" exact={true}>
						<MapPage />
					</Route>
					<Route path="/tabs/community" exact={true}>
						<CommunityPage />
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
				</IonRouterOutlet>

				<IonTabBar slot="bottom" className={hideTabBar ? "hide-tab-bar" : ""}>
					<IonTabButton tab="home" href="/tabs/home">
						<IonIcon icon={home} />
						<IonLabel>
							<FormattedMessage id="Home" />
						</IonLabel>
					</IonTabButton>

					<IonTabButton tab="map" href="/tabs/map">
						<IonIcon icon={map} />
						<IonLabel>
							<FormattedMessage id="Map" />
						</IonLabel>
						<IonBadge className="dot-badge">.</IonBadge>
					</IonTabButton>

					<IonTabButton tab="report" href="/tabs/report">
						<IonIcon icon={reportIcon} />
						<IonLabel>
							<FormattedMessage id="Emergency" />
						</IonLabel>
					</IonTabButton>

					<IonTabButton tab="community" href="/tabs/community">
						<IonIcon icon={communityIcon} />
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
