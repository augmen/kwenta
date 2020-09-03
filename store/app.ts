import { atom } from 'recoil';

import { Languages } from 'translations/constants';

import { DEFAULT_LANGUAGE } from 'constants/defaults';
import { FIAT_CURRENCY_MAP, USD_SIGN } from 'constants/currency';

export type FiatCurrency = {
	currency: string;
	sign: string;
};

const getKey = (subKey: string) => `app/${subKey}`;

export const appReadyState = atom<boolean>({
	key: getKey('appReady'),
	default: false,
});

export const languageState = atom<Languages>({
	key: getKey('language'),
	default: DEFAULT_LANGUAGE,
});

export const fiatCurrencyState = atom<FiatCurrency>({
	key: getKey('fiatCurrency'),
	default: {
		currency: FIAT_CURRENCY_MAP.USD,
		sign: USD_SIGN,
	},
});