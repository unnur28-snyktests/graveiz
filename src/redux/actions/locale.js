import { LOCALE_SET } from '../types';

export const setLocal = lang => ({
    type: LOCALE_SET,
    lang
});

