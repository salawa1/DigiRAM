import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../styles';

export default function BottomNavigation({
  navigation,
  active,
}: any) {
  return (
    <SafeAreaView edges={['bottom']} style={styles.bottomArea}>
      <View style={styles.bottomBar}>
        {['Home', 'Upload', 'Profile'].map(screen => (
          <TouchableOpacity
            key={screen}
            style={[
              styles.tab,
              active === screen && styles.activeTab,
            ]}
            onPress={() => navigation.navigate(screen)}
          >
            <Text style={styles.tabText}>{screen}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}