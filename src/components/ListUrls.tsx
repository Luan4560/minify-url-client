import { useListLinks } from '@/hooks/useListLinks';

export const ListUrls = () => {
  const { allLinks } = useListLinks();

  return (
    <div>
      {allLinks?.map((link: { shortUrl: string; longUrl: string }) => (
        <div key={link.shortUrl}>
          <a href={link.longUrl}>
            https://minify-url-server-1.onrender.com/{link.shortUrl}
          </a>
        </div>
      ))}
    </div>
  );
};
