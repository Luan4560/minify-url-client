import { useEffect, useState } from 'react';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const useFetchUrls = () => {
  const [url, setUrl] = useState('');
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchUrls() {
      try {
        setIsloading(true);
        const response = await fetch(`${API_URL}`);
        const data = await response.json();

        setUrl(data.url);
        setIsloading(false);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        }
      }
    }

    fetchUrls();
  }, []);
  return {
    url,
    isLoading,
    error,
  };
};
