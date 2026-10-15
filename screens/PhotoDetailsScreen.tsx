import React from 'react';
import { Image, ScrollView, Text } from 'react-native';
import type { Photo } from './HomeScreen';
import styles from '../styles';

export default function PhotoDetailsScreen({ route }: any) {
  const photo: Photo = route.params.photo;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.detailsContent}
    >
      <Image
        source={{
          uri: `https://picsum.photos/id/${photo.id}/600/600`,
        }}
        style={styles.largePhoto}
      />

      <Text style={styles.heading}>Photo Details</Text>
      <Text style={styles.text}>Photographer: {photo.author}</Text>
      <Text style={styles.text}>Photo ID: {photo.id}</Text>
      <Text style={styles.text}>Width: {photo.width} px</Text>
      <Text style={styles.text}>Height: {photo.height} px</Text>
    </ScrollView>
  );
}