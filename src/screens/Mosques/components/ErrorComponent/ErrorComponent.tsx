import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './ErrorComponent.styles';
import {AppText} from '../../../../components/AppText/AppText';

interface ErrorComponentProps {
  error: string;
  onRetry: () => void;
  retrying: boolean;
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({
  error,
  onRetry,
  retrying,
}) => {
  return (
    <View style={styles.errorContainer}>
      <Text style={styles.errorText}>Error: {error}</Text>
      <TouchableOpacity
        style={styles.retryButton}
        onPress={onRetry}
        disabled={retrying}>
        {retrying ? (
          <ActivityIndicator color="white" />
        ) : (
          <AppText style={styles.retryButtonText}>Retry</AppText>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default ErrorComponent;
