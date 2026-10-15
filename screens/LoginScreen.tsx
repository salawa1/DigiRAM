import React, { useState } from 'react';
import {
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from '../styles';

export default function LoginScreen({ navigation }: any) {
  const [username, setUsername] = useState('');

  const continueToApp = () => {
    if (username.trim() === '') {
      Alert.alert('Please enter a username.');
      return;
    }

    navigation.replace('Home');
  };

  return (
    <View style={styles.loginContainer}>
      <Text style={styles.logo}>DigiRAM</Text>

      <View style={styles.panel}>
        <Text style={styles.text}>Username</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter a username"
          placeholderTextColor="#c7c4bb"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={continueToApp}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}