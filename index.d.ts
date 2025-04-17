declare module '@realtril/react-native-country-picker-modal' {
  import { ReactNode } from 'react';
  import { StyleProp, ViewStyle, ModalProps, FlatListProps } from 'react-native';

  export const CountryCodeList: string[];

  export type CountryCode = (typeof CountryCodeList)[number];
  export type CallingCode = string;
  export type CurrencyCode = string;

  export type Region = string;
  export type Subregion = string;
  export type TranslationLanguageCode = string;
  
  export type TranslationLanguageCodeMap = {
    [key in TranslationLanguageCode]: string;
  };

  export interface Country {
    region: Region;
    subregion: Subregion;
    currency: CurrencyCode[];
    callingCode: CallingCode[];
    flag: string;
    name: TranslationLanguageCodeMap | string;
    cca2: CountryCode;
  }

  export enum FlagType {
    FLAT = 'flat',
    EMOJI = 'emoji',
  }

  export interface FlagButtonProps {
    countryCode: CountryCode;
    withEmoji?: boolean;
    withCountryNameButton?: boolean;
    withCurrencyButton?: boolean;
    withCallingCodeButton?: boolean;
    withFlagButton?: boolean;
    containerButtonStyle?: StyleProp<ViewStyle>;
    closeButtonImage?: ReactNode;
    closeButtonStyle?: StyleProp<ViewStyle>;
    closeButtonImageStyle?: StyleProp<ViewStyle>;
    onOpen?(): void;
    onClose?(): void;
  }

  export interface CountryFilterProps {
    placeholder?: string;
    onChangeText?(text: string): void;
  }

  interface CountryPickerProps {
    allowFontScaling?: boolean;
    countryCode: CountryCode;
    region?: Region;
    subregion?: Subregion;
    countryCodes?: CountryCode[];
    excludeCountries?: CountryCode[];
    preferredCountries?: CountryCode[];
    theme?: any;
    translation?: TranslationLanguageCode;
    modalProps?: ModalProps;
    filterProps?: CountryFilterProps;
    flatListProps?: FlatListProps<Country>;
    placeholder?: string;
    withAlphaFilter?: boolean;
    withCallingCode?: boolean;
    withCurrency?: boolean;
    withEmoji?: boolean;
    withCountryNameButton?: boolean;
    withCurrencyButton?: boolean;
    withCallingCodeButton?: boolean;
    withCloseButton?: boolean;
    withFlagButton?: boolean;
    withFilter?: boolean;
    withFlag?: boolean;
    withModal?: boolean;
    disableNativeModal?: boolean;
    visible?: boolean;
    containerButtonStyle?: StyleProp<ViewStyle>;
    renderFlagButton?(props: FlagButtonProps): ReactNode;
    renderCountryFilter?(props: CountryFilterProps): ReactNode;
    onSelect?(country: Country): void;
    onOpen?(): void;
    onClose?(): void;
  }

  export function getAllCountries(): Promise<Country[]>;
  export function getCallingCode(countryCode: CountryCode): Promise<CallingCode | undefined>;

  export { CountryModal } from './src/CountryModal';
  export { DARK_THEME, DEFAULT_THEME } from './src/CountryTheme';
  export { CountryFilter } from './src/CountryFilter';
  export { CountryList } from './src/CountryList';
  export { FlagButton } from './src/FlagButton';
  export { Flag } from './src/Flag';
  export { HeaderModal } from './src/HeaderModal';
  export { CountryModalProvider } from './src/CountryModalProvider';
  
  const CountryPicker: React.FC<CountryPickerProps>;
  export default CountryPicker;
} 