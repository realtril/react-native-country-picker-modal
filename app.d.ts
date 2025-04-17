/// <reference path="./src/types.ts" />

declare module '@realtril/react-native-country-picker-modal' {
  export * from './src/types';
  export { default } from './src/index';
  export {
    getAllCountries,
    getCallingCode,
  } from './src/CountryService';
  export { CountryModal } from './src/CountryModal';
  export { DARK_THEME, DEFAULT_THEME } from './src/CountryTheme';
  export { CountryFilter } from './src/CountryFilter';
  export { CountryList } from './src/CountryList';
  export { FlagButton } from './src/FlagButton';
  export { Flag } from './src/Flag';
  export { HeaderModal } from './src/HeaderModal';
  export { CountryModalProvider } from './src/CountryModalProvider';
} 