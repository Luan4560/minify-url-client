import { useState } from 'react';
import { z } from 'zod';
import classNames from 'classnames';
import { toast } from 'react-toastify';

const urlSchema = z.string().url();

export const useCreateShortUrl = () => {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShorUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const notify = () => {
    toast('URL copied to clipboard!', {
      className: 'bg-highlight text-primary',
    });
  };

  const handleSubmitUrl = async () => {
    try {
      setLoading(true);
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
      setLoading(false);
    } catch (error) {
      console.error('Request failed:', error);
    }
  };

  const handleCopy = () => {
    const joinUrl = `${process.env.NEXT_PUBLIC_API_URL}/${shortUrl}`;
    navigator.clipboard.writeText(joinUrl);
    notify();
  };

  const isUrlValid = urlSchema.safeParse(longUrl).success;

  const inputClass = classNames(
    'lg:w-full border p-4 border-gray-300 p-2 rounded-md w-full lg:w-3/4 outline-highlight placeholder-gray-500 text-white',
    {
      'border-none outline outline-2 outline-red-500':
        !isUrlValid && longUrl !== '',
    },
  );

  return {
    shortUrl,
    longUrl,
    inputClass,
    isUrlValid,
    setLongUrl,
    setShorUrl,
    handleSubmitUrl,
    handleCopy,
    loading,
  };
};
