'use client';

import { useCreateShortUrl } from '@/hooks/useCreateShortUrl';
import { ListUrls } from './ListUrls';

export const FormUrl = () => {
  const { handleSubmitUrl, longUrl, setLongUrl, shortUrl } =
    useCreateShortUrl();

  return (
    <main className="w-[900px] flex flex-col gap-8 row-start-2 items-center">
      <h1 className="text-highlight font-bold text-3xl">MinifyURL</h1>
      <div className="w-full border border-gray-100 rounded-md p-8 flex-col flex items-start shadow-sm gap-2">
        <p className="text-secondary font-semibold">
          Paste the URL to be minified
        </p>
        <div className="flex w-full">
          <input
            value={longUrl}
            onChange={e => setLongUrl(e.target.value)}
            type="text"
            placeholder="Enter your URL"
            className="border-2 border-gray-300 p-2 rounded-md w-full sm:w-3/4 outline-highlight"
          />
          <button
            onClick={handleSubmitUrl}
            className="bg-highlight text-primary font-bold py-2 px-4 rounded-md hover:opacity-80 cursor-pointer transition-all"
          >
            Minify
          </button>
        </div>

        {shortUrl && (
          <div className="hover:text-highlight">
            <a href={`${process.env.NEXT_PUBLIC_API_URL}${shortUrl}`}>
              {process.env.NEXT_PUBLIC_API_URL}
              {shortUrl}
            </a>
          </div>
        )}

        <ListUrls />
      </div>
    </main>
  );
};
