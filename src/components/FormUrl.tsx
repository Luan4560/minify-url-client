'use client';

import { useFetchUrls } from '@/hooks/useFetchUrls';

export const FormUrl = () => {
  const { url, isLoading, error } = useFetchUrls();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <h1>Minify URL</h1>

      <h2>{url}</h2>
    </main>
  );
};
