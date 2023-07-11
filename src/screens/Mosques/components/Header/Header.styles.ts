import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
    backgroundColor: '#F5F5F5',
    borderBottomWidth: 1,
    width: width * 0.6,

    alignSelf: 'center',
    borderBottomColor: '#E5E5E5',
  },
  headerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  activeHeaderButton: {
    backgroundColor: '#FFF',
  },
  headerButtonText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
