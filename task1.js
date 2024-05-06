const translations = {
	en: {
		greet: "Hello",
		intro: "Welcome to our website"
	},
	fr: {
		greet: "Bonjour",
		intro: "Bienvenue sur notre site web"
	}
};

function localize(strings, ...keys) {
	return function(language) {
		const translation = translations[language];
		return keys.map(key => translation[key]).join('');
	};
}

const language = "fr"; // Change to "en" for English
const greeting = "greet";
const introduction = "intro";

const localizedGreeting = localize`${greeting}`(language);
const localizedIntroduction = localize`${introduction}`(language);

console.log(localizedGreeting); // Expected: "Bonjour" (for language "fr")
console.log(localizedIntroduction); // Expected: "Bienvenue sur notre site web" (for language "fr")
