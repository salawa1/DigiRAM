import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import styles from '../styles';

export default function SettingsScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.detailsContent}
    >
      <Text style={styles.heading}>Account Settings</Text>

      <View style={styles.panel}>
      </View>

      <Text style={styles.heading}>Security & Privacy</Text>

      <View style={styles.panel}>
      </View>

      <Text style={styles.heading}>Notifications</Text>

      <View style={styles.panel}>
      </View>
    </ScrollView>
  );
}