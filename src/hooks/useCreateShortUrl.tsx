import { useState } from 'react';

export const useCreateShortUrl = () => {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShorUrl] = useState('');

  const handleSubmitUrl = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/shorten`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ longUrl }),
        },
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      setShorUrl(data?.shortUrl);
    } catch (error) {
      console.error('Request failed:', error);
    }
  };

  return {
    shortUrl,
    longUrl,
    setLongUrl,
    setShorUrl,
    handleSubmitUrl,
  };
};
