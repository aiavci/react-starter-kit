/**
 * Localization handler
 */
import { action, observable } from "mobx";
import * as Polyglot from "node-polyglot";

/**
 * Static files containing translations
 */
// import { en } from "./i18n"
let en = require("./i18n/en");

var browserLocale = require('browser-locale')();

/**
 * Polyglot instances with translations defined for each locale
 */
const polyglotEn = new Polyglot({ locale: "en", phrases: en.langStrings });

class LocaleStore {

	@observable currentLocale = (browserLocale.indexOf('-') > -1) ? browserLocale.split('-')[0] : browserLocale;

	@observable translations = {
		en: polyglotEn
	};

	@observable polyglot = this.translations[this.currentLocale];

	/**
	 * Get localized tag
	 */
	@observable
	getLocalized(tag) {
		if (!this.translations[this.currentLocale]) return '< ? >';
		return this.translations[this.currentLocale].t(tag);
	}

	/**
	 * Set locale with given newLocale
	 */
	@action
	setLocale(newLocale) {
		this.currentLocale = newLocale;
		this.polyglot = this.translations[this.currentLocale];
	}
}

const localeStore = new LocaleStore();
export default localeStore;