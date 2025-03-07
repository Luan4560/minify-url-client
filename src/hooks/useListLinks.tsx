import { useEffect, useState } from 'react';

export const useListLinks = () => {
  const [allLinks, setAllLinks] = useState([]);

  useEffect(() => {
    const fetchAllLinks = async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/`);
      const data = await response.json();

      setAllLinks(data);
    };

    fetchAllLinks();
  }, []);

  return {
    allLinks,
  };
};
