'use client';

import { useCreateShortUrl } from '@/hooks/useCreateShortUrl';
import { MdOutlineContentCopy } from 'react-icons/md';
import { CardInstructions } from './CardInstruction';
import { Questrial } from 'next/font/google';

export const questrial = Questrial({
  weight: '400',
  subsets: ['latin'],
});

export const FormUrl = () => {
  const {
    handleSubmitUrl,
    longUrl,
    setLongUrl,
    shortUrl,
    isUrlValid,
    inputClass,
    handleCopy,
    loading,
  } = useCreateShortUrl();

  return (
    <main className="w-full flex flex-col gap-10 items-center pt-8 ">
      <h1 className={`${questrial.className} text-highlight text-4xl`}>
        MinifyURL
      </h1>

      <section className="w-full flex flex-col items-center justify-center overflow-hidden gap-4 ">
        <div className="w-full flex flex-col items-center justify-center gap-4 p-4 lg:w-[1300px]">
          <CardInstructions />
        </div>
      </section>

      <section className="w-full flex flex-col items-center justify-center ">
        <div className="w-full rounded-md flex-col flex items-center gap-2 p-4 lg:w-[1300px]">
          <div className="w-full flex flex-col  lg:flex-row justify-between gap-2">
            <input
              value={longUrl}
              onChange={e => setLongUrl(e.target.value)}
              type="text"
              placeholder="Enter your URL"
              className={inputClass}
              aria-label="URL Input"
              id="minify-input"
            />

            <button
              onClick={handleSubmitUrl}
              className="bg-highlight text-primary font-bold py-3 px-4 rounded-md hover:opacity-80 cursor-pointer transition-all disabled:opacity-60 disabled:cursor-not-allowed disabled:bg-transparent disabled:text-white border border-highlight"
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

          {loading && (
            <svg
              className="mr-3 size-5 animate-spin bg-highlight"
              viewBox="0 0 24 24"
            ></svg>
          )}

          {shortUrl && (
            <div className=" flex center gap-2 p-4">
              <a
                href={`${process.env.NEXT_PUBLIC_API_URL}/${shortUrl}`}
                target="_blank"
                className={
                  isUrlValid
                    ? 'hover:text-highlight  text-2xl underline'
                    : 'outline-red-500'
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
                <MdOutlineContentCopy size={25} />
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};
