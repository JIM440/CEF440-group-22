export const LOCALES = {
	ENGLISH: "en-US",
	FRENCH: "fr-FR",
} as const;

export type Locale = typeof LOCALES[keyof typeof LOCALES];
