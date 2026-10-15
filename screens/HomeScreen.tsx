import React, { useCallback, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import BottomNavigation from '../components/BottomNavigation';
import styles from '../styles';

export interface Photo {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

const API_URL = 'https://picsum.photos/v2/list?page=1&limit=100';

export default function HomeScreen({
  navigation,
  searchMode = false,
}: any) {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  const fetchPhotos = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
      }

      const data: Photo[] = await response.json();

      if (!Array.isArray(data)) {
        throw new Error('Unexpected API response');
      }

      const selectedIds = ['10', '15', '28', '29', '64', '65'];

      const selectedPhotos = data.filter(photo =>
        selectedIds.includes(photo.id),
      );

      setPhotos(selectedPhotos);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Unable to load photos',
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPhotos();
  }, [fetchPhotos]);

  const displayedPhotos = photos.filter(photo =>
    photo.author.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.heading}>
          {searchMode ? 'Search Photos' : 'Recent Uploads'}
        </Text>

        {searchMode ? (
          <TextInput
            style={styles.input}
            placeholder="Search by user, date, or memory..."
            placeholderTextColor="#c7c4bb"
            value={search}
            onChangeText={setSearch}
          />
        ) : (
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Search')}
          >
            <Text style={styles.buttonText}>Search</Text>
          </TouchableOpacity>
        )}

        {loading ? (
          <View style={styles.message}>
            <ActivityIndicator size="large" color="#fffbea" />
            <Text style={styles.text}>Loading photos...</Text>
          </View>
        ) : error ? (
          <View style={styles.message}>
            <Text style={styles.text}>
              Could not load photos.
            </Text>

            <Text style={styles.text}>{error}</Text>

            <TouchableOpacity
              style={styles.button}
              onPress={() => fetchPhotos()}
            >
              <Text style={styles.buttonText}>Retry</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <FlatList
            style={styles.list}
            data={displayedPhotos}
            numColumns={3}
            keyExtractor={item => item.id}
            keyboardShouldPersistTaps="handled"
            ListEmptyComponent={
              <Text style={styles.text}>
                {search
                  ? 'No matching photos.'
                  : 'No recent uploads.'}
              </Text>
            }
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.photoCard}
                onPress={() =>
                  navigation.navigate('PhotoDetails', {
                    photo: item,
                  })
                }
              >
                <Image
                  source={{
                    uri: `https://picsum.photos/id/${item.id}/200/200`,
                  }}
                  style={styles.thumbnail}
                />

                <Text style={styles.photoText}>
                    By: {item.author}
                </Text>

                <Text style={styles.photoText}>
                    Width: {item.width} px
                </Text>

                <Text style={styles.photoText}>
                    Height: {item.height} px
                </Text>
              </TouchableOpacity>
            )}
          />
        )}
      </View>

      <BottomNavigation navigation={navigation} active="Home" />
    </View>
  );
}