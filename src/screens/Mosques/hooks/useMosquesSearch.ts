// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, {useEffect, useState, useCallback} from 'react';
import axios from 'axios';
import useCurrentLocation from '../../../hooks/useCurrentLocation';

interface MasjidSearchParams {
  radius: number;
}

interface UseMasjidResult {
  loading: boolean;
  data: MosqueType[];
  error: string | null;
  refetch: () => void;
  loadingAddress: boolean;
}

const useMosques = (searchParams: MasjidSearchParams): UseMasjidResult => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<MosqueType[]>([]);
  const [error, setError] = useState<string | null>(null);
  const {location, loadingAddress} = useCurrentLocation();

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const url = `http://masjidnear.me/api/Masjid/SearchMasjids/query/lat$${location?.latitude},lng$${location?.longitude},rad$${searchParams.radius}/`;
      const response = await axios.get<MosqueType[]>(url);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError('An error occurred while fetching data.');
    }
  }, [location, searchParams.radius]);

  const refetch = useCallback(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (
      location &&
      location.latitude &&
      location.longitude &&
      !loadingAddress
    ) {
      fetchData();
    }
  }, [fetchData, location, loadingAddress]);

  return {loading, data, error, refetch, loadingAddress};
};

export default useMosques;
