import React, {useState, useEffect, useCallback} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  RefreshControl,
} from 'react-native';
import useMosques from '../../hooks/useMosquesSearch';
import LoadingMosques from './components/LoadingMosques/LoadingMosques';
import ErrorComponent from '../ErrorComponent/ErrorComponent';
import MosqueItem from './components/MosqueItem/MosqueItem';
import {styles} from './ListMosques.styles';
import {EmptyMosques} from '../EmptyMosques/EmptyMosques';

const ListMosques: React.FC = () => {
  const {loading, data, error, refetch, loadingAddress} = useMosques({
    radius: 999000,
  });
  const [refreshing, setRefreshing] = useState(false);
  const [retrying, setRetrying] = useState(false);

  const handleRefresh = useCallback(async () => {
    setRefreshing(true);
    setRetrying(true);

    try {
      refetch();
    } catch (error) {
      console.error('Error retrying:', error);
    } finally {
      setRefreshing(false);
      setRetrying(false);
    }
  }, [refetch]);

  useEffect(() => {
    if (refreshing) {
      handleRefresh();
    }
  }, [refreshing, handleRefresh]);

  if (loadingAddress) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={styles.loadingText}>Loading location...</Text>
      </View>
    );
  }

  if (loading) {
    return <LoadingMosques />;
  }

  if (error) {
    return (
      <ErrorComponent
        error={error}
        onRetry={handleRefresh}
        retrying={retrying}
      />
    );
  }

  return (
    <FlatList
      data={data}
      keyExtractor={(item: MosqueType) => item._id}
      renderItem={({item}: {item: MosqueType}) => <MosqueItem item={item} />}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
      }
      ListEmptyComponent={<EmptyMosques />}
    />
  );
};

export default ListMosques;
