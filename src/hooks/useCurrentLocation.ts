import {useEffect, useState} from 'react';
import {Platform, PermissionsAndroid, Alert} from 'react-native';
import Geolocation, {
  GeolocationResponse,
} from '@react-native-community/geolocation';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';

interface Location {
  latitude: number;
  longitude: number;
}

interface UseCurrentLocationResult {
  location: Location | null;
  loadingAddress: boolean;
}

const useCurrentLocation = (): UseCurrentLocationResult => {
  const [location, setLocation] = useState<Location | null>(null);
  const [loadingAddress, setLoadingAddress] = useState(true);

  useEffect(() => {
    const requestLocationPermission = async () => {
      try {
        let permissionStatus;

        if (Platform.OS === 'android') {
          permissionStatus = await check(
            PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
          );
        } else if (Platform.OS === 'ios') {
          permissionStatus = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
        }
        if (permissionStatus === RESULTS.GRANTED) {
          getCurrentLocation();
        } else if (permissionStatus === RESULTS.DENIED) {
          // Alert.alert("fdfds")
          const requestStatus = await requestLocationPermissions();

          if (requestStatus === RESULTS.GRANTED) {
            getCurrentLocation();
          } else {
            Alert.alert(
              'Location Permission Denied',
              'Please enable location permission to access your current location.',
              [{text: 'OK'}],
            );
          }
        }
      } catch (error) {
        console.log('Error requesting location permission:', error);
      }
    };

    const requestLocationPermissions = async () => {
      let permissionStatus;

      if (Platform.OS === 'android') {
        permissionStatus = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
      } else if (Platform.OS === 'ios') {
        permissionStatus = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
      }

      return permissionStatus;
    };

    const getCurrentLocation = () => {
      Geolocation.getCurrentPosition(
        (position: GeolocationResponse) => {
          const {latitude, longitude} = position.coords;
          setLocation({latitude, longitude});
          setLoadingAddress(false);
        },
        error => {
          setLoadingAddress(false);
          console.log('Error getting location:', error);
          Alert.alert(
            'Error',
            'Failed to retrieve your current location. Please make sure location services are enabled.',
            [{text: 'OK'}],
          );
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    };

    requestLocationPermission();

    return () => {
      // Cleanup function (if needed)
    };
  }, []);

  return {location, loadingAddress};
};

export default useCurrentLocation;
