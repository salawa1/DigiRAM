import React from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BottomNavigation from '../components/BottomNavigation';
import styles from '../styles';

export default function UploadScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.detailsContent}>
        <Text style={styles.heading}>Upload</Text>

        <Text style={styles.text}>
          Upload digital camera photos or create memories.
        </Text>

        <TouchableOpacity style={styles.button} disabled>
          <Text style={styles.buttonText}>
            + Import Photos from Camera Roll
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} disabled>
          <Text style={styles.buttonText}>
            + Import from Files/Drive
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} disabled>
          <Text style={styles.buttonText}>Create a memory</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} disabled>
          <Text style={styles.buttonText}>Share</Text>
        </TouchableOpacity>

        <Text style={styles.heading}>Recent Uploads</Text>
        <Text style={styles.text}>No personal uploads yet.</Text>
      </ScrollView>

      <BottomNavigation navigation={navigation} active="Upload" />
    </View>
  );
}