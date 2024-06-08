import { IonApp, setupIonicReact } from "@ionic/react";

import { IonReactRouter } from "@ionic/react-router";

import { IntlProvider } from "react-intl";

import { LOCALES } from "./modules/language/locales";
import { messages } from "./modules/language/dictionary";

import { useState, useEffect } from "react";

import AppBody from "./AppBody";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
import "./App.css";

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */

/* Theme variables */
import "./theme/darkMode.css";

setupIonicReact();

const App: React.FC = () => {
	const language = (localStorage.getItem("prefered_language")=="English"?LOCALES.ENGLISH:LOCALES.FRENCH)!;
	const [locale, setLocale] = useState(language);

	useEffect(()=>{
		const prefered_Lang = locale=="en-US"?"English":"French";
		localStorage.setItem("prefered_language",prefered_Lang);
	}, [locale]);

	return (
		<IntlProvider
			messages={messages[locale]}
			locale={locale}
			defaultLocale={LOCALES.ENGLISH}>
			<IonApp>
				<IonReactRouter>
					<AppBody locale={locale} setLocale={setLocale} />
				</IonReactRouter>
			</IonApp>
		</IntlProvider>
	);
};

export default App;
