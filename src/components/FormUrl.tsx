'use client';

import { useCreateShortUrl } from '@/hooks/useCreateShortUrl';

export const FormUrl = () => {
  const { handleSubmitUrl, longUrl, setLongUrl, shortUrl } =
    useCreateShortUrl();

  return (
    <main className="w-full flex flex-col gap-8 items-center p-4">
      <h1 className="text-highlight font-bold text-3xl">MinifyURL</h1>
      <div className="w-full border border-gray-100 rounded-md flex-col flex items-start shadow-sm gap-2 p-4 md:w-1/2">
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
            <a
              href={`${process.env.NEXT_PUBLIC_API_URL}/${shortUrl}`}
              target="_blank"
            >
              {process.env.NEXT_PUBLIC_API_URL}/{shortUrl}
            </a>
          </div>
        )}
      </div>
    </main>
  );
};
