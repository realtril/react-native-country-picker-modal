# React Native Country Picker Modal

A React Native country picker modal updated for Expo 52 and React Native 0.76.x.

This is a migrated version of the popular [react-native-country-picker-modal](https://github.com/xcarpentier/react-native-country-picker-modal) library, updated to work with the latest versions of Expo and React Native.

## Features

- 🎨 Uses React Native Expo (SDK 52)
- ⚛️ Compatible with React Native 0.76.x
- 🏳️ Support for both emoji and regular flags
- 📱 Native feeling with search and alphabetical index bar
- 🔎 Fast and efficient search with fuzzy search
- 🌐 Supports multiple languages
- 🎭 Dark theme and light theme
- 🔧 No build step required - use components directly from source

## Implementation Notes

This implementation imports and uses the components directly from the source files (`src` directory) without requiring a build step or a compiled `lib` directory. This makes the code more maintainable and easier to understand.

## Usage

```tsx
import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import CountryPicker from './src';
import { Country, CountryCode, TranslationLanguageCodeMap } from './src/types';

export default function App() {
  const [countryCode, setCountryCode] = useState<CountryCode>('US');
  const [country, setCountry] = useState<Country>();
  const [visible, setVisible] = useState(false);

  const getCountryName = (name: TranslationLanguageCodeMap | string) => {
    if (typeof name === 'string') return name;
    return name.common;
  };

  const onSelect = (country: Country) => {
    setCountryCode(country.cca2);
    setCountry(country);
    setVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setVisible(true)}>
        <Text style={styles.buttonText}>
          {country ? getCountryName(country.name) : 'Select Country'}
        </Text>
      </TouchableOpacity>

      <CountryPicker
        countryCode={countryCode}
        withFilter
        withFlag
        withEmoji={true}
        onSelect={onSelect}
        visible={visible}
        onClose={() => setVisible(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
```

## Props

| Key                        | Type                                         | Default           | Description                                                                                 |
| -------------------------- | -------------------------------------------- | ----------------- | ------------------------------------------------------------------------------------------- |
| countryCode                | CountryCode                                  | \*required        | The ISO 3166-1 alpha-2 code of the current selected country                               |
| translation                | TranslationLanguageCode                      | 'common'          | The translation language to use for country names                                         |
| region                     | Region                                       | null              | Limit results to a specific region                                                        |
| subregion                  | Subregion                                    | null              | Limit results to a specific subregion                                                     |
| countryCodes               | CountryCode[]                                | null              | List of custom country codes to render                                                    |
| excludeCountries           | CountryCode[]                                | null              | List of countries to exclude                                                              |
| preferredCountries         | CountryCode[]                                | null              | List of countries at the top of the list                                                  |
| theme                      | Object                                       | null              | Theme for customizing the appearance                                                      |
| onSelect                   | (country: Country) => void                   | \*required        | Callback when a country is selected                                                       |
| onClose                    | () => void                                   | \*required        | Callback when the modal is closed                                                         |
| visible                    | boolean                                      | false             | Show/hide the modal                                                                       |
| withFilter                 | boolean                                      | true              | Enable search bar                                                                         |
| withFlag                   | boolean                                      | true              | Show flags for each country                                                               |
| withEmoji                  | boolean                                      | true              | Use emoji flags for each country                                                          |
| withAlphaFilter            | boolean                                      | false             | Show alphabet filter bar                                                                  |
| withCallingCode            | boolean                                      | false             | Show calling code for each country                                                        |
| withCurrency               | boolean                                      | false             | Show currency for each country                                                            |
| withModal                  | boolean                                      | true              | Use a modal instead of a bottom sheet                                                     |
| disableNativeModal         | boolean                                      | false             | Disables the native modal and uses a custom one                                           |
| flatListProps              | FlatListProps<Country>                       | null              | Additional props for the country list                                                     |
| filterProps                | CountryFilterProps                           | null              | Additional props for the search bar                                                       |
| modalProps                 | ModalProps                                   | null              | Additional props for the modal                                                            |
| containerButtonStyle       | StyleProp<ViewStyle>                         | null              | Style for the container button                                                            |

## Acknowledgments

This project is a modified version of the [react-native-country-picker-modal](https://github.com/xcarpentier/react-native-country-picker-modal) package by Xavier Carpentier, updated to work with newer versions of Expo and React Native.

## License

MIT
