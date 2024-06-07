import { LOCALES, Locale } from "./locales";

interface Message {
    [key:string]: string;
  }

  type Messages = {
    [key in Locale]: Message;
  };

export const messages:Messages = {
	[LOCALES.ENGLISH]: {
		Home: "Home",
		Community: "Community",
		Map: "Map",
		Emergency: "Emergency",
		Settings: "Settings",
		dark_mode: "Dark mode",
		language: "Language",
		general: "General",
		notification: "Notification",
		back: "Back",
		ongoing: "ongoing",
		forecast: "forecast",
		Hey: "Hey",
		Hello: "Hello",
		Hi: "Hi",
		Fire: "Fire",
		Earthquake: "Earthquake",
		Flood: "Flood",
		Landslide: "Landslide"
	},
	[LOCALES.FRENCH]: {
		Home: "Domicile",
		Community: "Communauté",
		Map: "Carte",
		Emergency: "Urgence",
		Settings: "Paramètres",
		dark_mode: "Mode sombre",
		language: "Langue",
		general: "Généralités",
		notification: "Notification",
		back: "Retour",
		ongoing: "en cours",
		forecast: "prévision",
		Hey: "Hé",
		Hello: "Bonjour",
		Hi: "Salut",
		Fire: "Feu",
		Earthquake: "Tremblement de terre",
		Flood: "Inondation",
		Landslide: "Glissement de terrain"
	},
};
