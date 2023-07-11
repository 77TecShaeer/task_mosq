import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#FFFFFF',
  },
  switchButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    backgroundColor: '#E5E5E5',
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
  },
  activeSwitchButton: {
    backgroundColor: '#2196F3',
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  switchButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#777777',
  },
  activeSwitchButtonText: {
    color: '#FFFFFF',
  },
});
