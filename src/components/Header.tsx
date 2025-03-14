'use client';
import Image from 'next/image';

export const Header = () => {
  const scrolltoHash = function (element_id: string) {
    const element = document.getElementById(element_id);
    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'center',
    });
  };

  return (
    <header className="w-full bg-primary h-[4rem] flex items-center justify-center shadow-md px-10">
      <div className="w-[1300px] flex items-center ">
        <Image
          src="/minify-logo.svg"
          width={55}
          height={55}
          alt="Minify Logo"
          quality={100}
          aria-label="Minify Logo"
        />
        <div className="w-full flex items-center justify-between px-4">
          <nav className="pr-4">
            <ul className="flex gap-4">
              <li>
                <a
                  href=""
                  className="hover:text-highlight transition duration-300 "
                >
                  Inicio
                </a>
              </li>

              <li>
                <a
                  href=""
                  className="hover:text-highlight transition duration-300"
                >
                  Sobre nós
                </a>
              </li>

              <li>
                <a
                  href=""
                  className="hover:text-highlight transition duration-300"
                >
                  Contatos
                </a>
              </li>
            </ul>
          </nav>

          <button
            className="bg-highlight p-2 rounded-md font-bold hover:opacity-65 cursor-pointer text-primary "
            onClick={() => scrolltoHash('minify-input')}
          >
            Começar
          </button>
        </div>
      </div>
    </header>
  );
};
