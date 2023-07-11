import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  Linking,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MapView, {Marker, Callout} from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome5';
import useMosques from '../../hooks/useMosquesSearch';
import ErrorComponent from '../ErrorComponent/ErrorComponent';
import {styles} from './MapMosques.styles';

const MapMosques: React.FC = () => {
  const {loading, data, error, refetch, loadingAddress} = useMosques({
    radius: 999000,
  });
  const [refreshing, setRefreshing] = useState(false);
  const [retrying, setRetrying] = useState(false);
  const mapViewRef = useRef<MapView>(null);
  const [selectedMosque, setSelectedMosque] = useState<MosqueType | null>(null);

  const handleRefresh = useCallback(async () => {
    setRefreshing(true);
    setRetrying(true);
    try {
      await refetch();
    } catch (error) {
      console.error('Error retrying:', error);
    } finally {
      setRefreshing(false);
      setRetrying(false);
    }
  }, [refetch]);

  useEffect(() => {
    if (data.length > 0) {
      if (mapViewRef.current) {
        const coordinates = data.map(mosque => ({
          latitude: mosque.masjidLocation.coordinates[0],
          longitude: mosque.masjidLocation.coordinates[1],
        }));

        mapViewRef.current.fitToCoordinates(coordinates, {
          edgePadding: {top: 50, right: 50, bottom: 50, left: 50},
          animated: true,
        });
      }
    }
  }, [data]);

  if (error) {
    return (
      <ErrorComponent
        error={error}
        onRetry={handleRefresh}
        retrying={retrying}
      />
    );
  }
  const handleRefreshButtonPress = () => {
    if (!loading) {
      handleRefresh();
    }
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const handleMarkerPress = useCallback((mosque: MosqueType) => {
    setSelectedMosque(mosque);
  }, []);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const handleCalloutPress = useCallback((coordinates: [number, number]) => {
    // Open Google Maps with the specified coordinates
    const [latitude, longitude] = coordinates;
    const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    Linking.openURL(url);
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        ref={mapViewRef}
        style={styles.map}
        initialRegion={{
          latitude: 40.759211,
          longitude: -73.984638,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        provider="google"
        customMapStyle={[]}
        showsUserLocation
        showsMyLocationButton
        showsCompass
        toolbarEnabled>
        {data.map((mosque: MosqueType) => (
          <Marker
            key={mosque._id}
            coordinate={{
              latitude: mosque.masjidLocation.coordinates[0],
              longitude: mosque.masjidLocation.coordinates[1],
            }}
            onPress={() => handleMarkerPress(mosque)}>
            <Icon name="mosque" size={34} color="green" />
            {selectedMosque?.masjidName === mosque.masjidName && (
              <Callout
                onPress={() =>
                  handleCalloutPress(mosque.masjidLocation.coordinates)
                }>
                <View style={styles.calloutContainer}>
                  <Text style={styles.calloutTitle}>{mosque.masjidName}</Text>
                  <Text style={styles.calloutAddress}>
                    {mosque.masjidAddress.street}
                  </Text>
                  <TouchableOpacity
                    style={styles.calloutButton}
                    onPress={() =>
                      handleCalloutPress(mosque.masjidLocation.coordinates)
                    }>
                    <Text style={styles.calloutButtonText}>Start Go</Text>
                  </TouchableOpacity>
                </View>
              </Callout>
            )}
          </Marker>
        ))}
      </MapView>
      {(loading || loadingAddress) && (
        <View style={styles.containerLoading}>
          <ActivityIndicator size="large" color="#0000ff" />
          {loadingAddress && (
            <Text style={styles.loadingText}>Loading location...</Text>
          )}
        </View>
      )}
      <TouchableOpacity
        style={styles.refreshButton}
        onPress={handleRefreshButtonPress}
        disabled={loading || refreshing}>
        <Text style={styles.refreshButtonText}>Refresh</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MapMosques;
