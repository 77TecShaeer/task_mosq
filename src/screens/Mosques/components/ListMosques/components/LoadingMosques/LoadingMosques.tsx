import React from 'react';
import {Dimensions, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {styles} from './LoadingMosques.styles';

const {width} = Dimensions.get('window');

const LoadingMosques: React.FC = () => {
  const numItems = 10; // Number of repeated items

  const renderItems = () => {
    return Array.from({length: numItems}, (_, index) => (
      <View key={index} style={styles.itemContainer}>
        <SkeletonPlaceholder.Item
          width={width * 0.95}
          height={20}
          borderRadius={4}
          marginBottom={10}
        />
        <SkeletonPlaceholder.Item
          width={width * 0.55}
          height={16}
          borderRadius={4}
        />
        {/* Add skeleton placeholders for other properties */}
      </View>
    ));
  };
  return (
    <View style={styles.container}>
      <SkeletonPlaceholder>
        <>{renderItems()}</>
      </SkeletonPlaceholder>
    </View>
  );
};

export default LoadingMosques;
