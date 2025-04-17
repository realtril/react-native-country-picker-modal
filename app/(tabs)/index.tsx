import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import CountryPicker from '../../src';
import { Country, CountryCode, TranslationLanguageCodeMap } from '../../src/types';
import { ThemedView } from '../../components/ThemedView';
import { ThemedText } from '../../components/ThemedText';

export default function TabOneScreen() {
  const [countryCode, setCountryCode] = useState<CountryCode>('US');
  const [country, setCountry] = useState<Country>();
  const [visible, setVisible] = useState(false);
  const [withFlag, setWithFlag] = useState(true);
  const [withEmoji, setWithEmoji] = useState(true);
  const [withFilter, setWithFilter] = useState(true);
  const [withAlphaFilter, setWithAlphaFilter] = useState(false);
  const [withCallingCode, setWithCallingCode] = useState(false);

  const onSelect = (country: Country) => {
    setCountryCode(country.cca2);
    setCountry(country);
    setVisible(false);
  };

  const getCountryName = (name: TranslationLanguageCodeMap | string) => {
    if (typeof name === 'string') return name;
    return name.common;
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>React Native Country Picker Example</ThemedText>
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => setVisible(true)}>
        <Text style={styles.buttonText}>
          {country ? getCountryName(country.name) : 'Select Country'}
        </Text>
      </TouchableOpacity>
      
      {country && (
        <View style={styles.country}>
          <ThemedText>Country: {getCountryName(country.name)}</ThemedText>
          {country.callingCode && (
            <ThemedText>Calling Code: +{country.callingCode[0]}</ThemedText>
          )}
          <ThemedText>Region: {country.region}</ThemedText>
          <ThemedText>Subregion: {country.subregion}</ThemedText>
        </View>
      )}

      <CountryPicker
        {...{
          countryCode,
          withFilter,
          withFlag,
          withEmoji,
          withCallingCode,
          withAlphaFilter,
          onSelect,
          visible,
          disableNativeModal: true,
        }}
        onClose={() => setVisible(false)}
      />

      <View style={styles.options}>
        <TouchableOpacity 
          style={[styles.option, withFlag && styles.optionSelected]} 
          onPress={() => setWithFlag(!withFlag)}>
          <Text>Flag</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.option, withEmoji && styles.optionSelected]} 
          onPress={() => setWithEmoji(!withEmoji)}>
          <Text>Emoji</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.option, withFilter && styles.optionSelected]} 
          onPress={() => setWithFilter(!withFilter)}>
          <Text>Filter</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.option, withAlphaFilter && styles.optionSelected]} 
          onPress={() => setWithAlphaFilter(!withAlphaFilter)}>
          <Text>Alpha Filter</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.option, withCallingCode && styles.optionSelected]} 
          onPress={() => setWithCallingCode(!withCallingCode)}>
          <Text>Calling Code</Text>
        </TouchableOpacity>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  country: {
    margin: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    width: '80%',
  },
  options: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
  },
  option: {
    margin: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  optionSelected: {
    backgroundColor: '#e0e0e0',
  },
});
