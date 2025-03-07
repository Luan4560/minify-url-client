import Image from 'next/image';

export const Header = () => {
  return (
    <header className="w-full bg-secondary h-[4rem] flex items-center px-2">
      <div className="w-full h-full flex  items-center mt-2 ml-[-1rem]">
        <Image
          src="/minify-logo.png"
          width={85}
          height={85}
          alt="Minify Logo"
          quality={100}
        />
      </div>

      <div>
        <h2 className="text-highlight">MinifURL</h2>
      </div>
    </header>
  );
};
