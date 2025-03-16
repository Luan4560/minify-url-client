'use client';

import Image from 'next/image';
import { useState } from 'react';
import { MdMenu } from 'react-icons/md';
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrolltoHash = function (element_id: string) {
    const element = document.getElementById(element_id);
    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'center',
    });
  };

  return (
    <header className="w-full bg-primary h-[4rem] flex items-center justify-center shadow-md px-2 lg:px-10">
      <div className="w-[1300px] flex items-center justify-between">
        <Image
          src="/minify-logo.svg"
          width={55}
          height={55}
          alt="Minify Logo"
          quality={100}
          aria-label="Minify Logo"
        />
        <div className="w-full items-center justify-between px-4 hidden md:flex">
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

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <MdMenu
              size={30}
              className="hover:text-highlight cursor-pointer "
            />
          </button>
        </div>

        {isMenuOpen && (
          <div
            className={`absolute xl:hidden top-[4rem] right-0 rounded-lg w-[50%] h-[24%] bg-primary flex flex-col items-center gap-4 border border-highlight z-10 ${
              isMenuOpen ? 'menu-enter' : 'menu-exit'
            }`}
          >
            <ul className="flex flex-col items-center gap-4">
              <li className="w-[241] flex justify-center juslist-none hover:bg-highlight p-4 rounded-lg cursor-pointer hover:text-primary hover: transform duration-300">
                Inicio
              </li>

              <li className="w-[241] flex justify-center juslist-none hover:bg-highlight p-4 rounded-lg cursor-pointer hover:text-primary hover: transform duration-300">
                Sobre nós
              </li>

              <li className="w-[241] flex justify-center juslist-none hover:bg-highlight p-4 rounded-lg cursor-pointer hover:text-primary hover: transform duration-300">
                Contatos
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};
