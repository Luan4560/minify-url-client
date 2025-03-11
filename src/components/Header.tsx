import Image from 'next/image';

export const Header = () => {
  return (
    <header className="w-full bg-secondary h-[4rem] flex items-center justify-between">
      <Image
        src="/minify-logo.png"
        width={85}
        height={85}
        alt="Minify Logo"
        quality={100}
      />

      <div className="pr-4">
        <h2 className="text-highlight">MinifURL</h2>
      </div>
    </header>
  );
};
