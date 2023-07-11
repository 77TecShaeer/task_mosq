import {Dimensions, StyleSheet} from 'react-native';
const {width} = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  containerLoading: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    opacity: 0.5,
  },
  map: {
    flex: 1,
    width: '100%',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: 'white',
  },
  errorText: {
    marginTop: 10,
    fontSize: 16,
    color: 'red',
  },
  retryButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#2196F3',
    borderRadius: 5,
  },
  retryButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  refreshButton: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    padding: 10,
    backgroundColor: '#2196F3',
    borderRadius: 5,
  },
  refreshButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  calloutContainer: {
    padding: 8,
    width: width * 0.9,
  },
  calloutTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  calloutAddress: {
    fontSize: 14,
    marginBottom: 4,
  },
  calloutButton: {
    marginTop: 8,
    padding: 8,
    backgroundColor: '#2196F3',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  calloutButtonText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
