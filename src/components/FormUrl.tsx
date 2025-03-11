'use client';

import { useCreateShortUrl } from '@/hooks/useCreateShortUrl';
import { MdOutlineContentCopy } from 'react-icons/md';

export const FormUrl = () => {
  const {
    handleSubmitUrl,
    longUrl,
    setLongUrl,
    shortUrl,
    isUrlValid,
    inputClass,
    handleCopy,
  } = useCreateShortUrl();

  return (
    <>
      <main className="w-full flex flex-col gap-8 items-center p-4">
        <h1 className="text-highlight font-bold text-3xl">MinifyURL</h1>
        <div className="w-full border border-gray-100 rounded-md flex-col flex items-start shadow-sm gap-2 p-4 md:w-1/2">
          <p
            className="text-secondary font-semibold"
            aria-label="URL Instructions"
          >
            Paste the URL to be minified
          </p>
          <div className="flex w-full">
            <input
              value={longUrl}
              onChange={e => setLongUrl(e.target.value)}
              type="text"
              placeholder="Enter your URL"
              className={inputClass}
              aria-label="URL Input"
            />

            <button
              onClick={handleSubmitUrl}
              className="bg-highlight text-primary font-bold py-2 px-4 rounded-md hover:opacity-80 cursor-pointer transition-all disabled:opacity-60 disabled:cursor-not-allowed"
              disabled={!isUrlValid}
              aria-label="Minify URL"
            >
              Minify
            </button>
          </div>

          {!isUrlValid && longUrl !== '' && (
            <span className="text-red-500 text-sm" aria-label="URL Error">
              Please enter a valid URL
            </span>
          )}

          {shortUrl && (
            <div className=" flex center gap-2">
              <a
                href={`${process.env.NEXT_PUBLIC_API_URL}/${shortUrl}`}
                target="_blank"
                className={
                  isUrlValid ? 'hover:text-highlight' : 'outline-red-500'
                }
                aria-label="Shortened URL"
              >
                {process.env.NEXT_PUBLIC_API_URL}/{shortUrl}
              </a>

              <button
                className="hover:text-highlight cursor-pointer"
                onClick={handleCopy}
                aria-label="Copy URL"
              >
                <MdOutlineContentCopy />
              </button>
            </div>
          )}
        </div>
      </main>
    </>
  );
};
