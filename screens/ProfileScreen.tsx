import React from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BottomNavigation from '../components/BottomNavigation';
import styles from '../styles';

export default function ProfileScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.detailsContent}>
        <Text style={styles.heading}>Sam Alawadhi</Text>
        <Text style={styles.text}>Importing since 2026</Text>

        <View style={styles.panel}>
          <Text style={styles.text}>0 friends</Text>
          <Text style={styles.text}>0 memories</Text>
          <Text style={styles.text}>0 personal photos</Text>
        </View>

        <Text style={styles.text}>
          Friends, memories, and sharing coming soon.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Settings')}
        >
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>
      </ScrollView>

      <BottomNavigation navigation={navigation} active="Profile" />
    </View>
  );
}