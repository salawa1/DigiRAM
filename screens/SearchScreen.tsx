import React from 'react';
import HomeScreen from './HomeScreen';

export default function SearchScreen({ navigation }: any) {
  return (
    <HomeScreen
      navigation={navigation}
      searchMode={true}
    />
  );
}