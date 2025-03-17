'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { MdMenu } from 'react-icons/md';
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-primary h-[4rem] flex items-center justify-center shadow-md px-2 lg:px-10 sticky">
      <div className="w-[1300px] flex items-center justify-between">
        <Link href="/">
          <Image
            src="/minify-logo.svg"
            width={55}
            height={55}
            alt="Minify Logo"
            quality={100}
            aria-label="Minify Logo"
          />
        </Link>
        <div className="w-full items-center justify-between px-4 hidden md:flex">
          <nav className="pr-4">
            <ul className="flex gap-4">
              <li>
                <Link
                  href="/"
                  className="hover:text-highlight transition duration-300 "
                >
                  Inicio
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="hover:text-highlight transition duration-300"
                >
                  Sobre nós
                </Link>
              </li>
            </ul>
          </nav>

          <Link
            href=""
            className="hover:text-highlight transition duration-300"
          >
            Contato
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <MdMenu
              size={40}
              className="hover:text-highlight cursor-pointer "
            />
          </button>
        </div>

        {isMenuOpen && (
          <div
            className={`absolute xl:hidden top-[4rem] right-0 rounded-lg w-[50%] py-4 bg-primary flex flex-col items-center gap-4 border border-highlight z-10 ${
              isMenuOpen ? 'menu-enter' : 'menu-exit'
            }`}
          >
            <ul className="flex flex-col items-center gap-4">
              <li className="w-full flex justify-center hover:bg-highlight p-4 rounded-lg cursor-pointer hover:text-primary hover: transform duration-300">
                <Link href="/" aria-label="Inicio">
                  Inicio
                </Link>
              </li>

              <li className="w-full flex justify-center hover:bg-highlight p-4 rounded-lg cursor-pointer hover:text-primary hover: transform duration-300">
                <Link href="/about" aria-label="Sobre nós">
                  Sobre nós
                </Link>
              </li>

              <li className="w-full flex justify-center hover:bg-highlight p-4 rounded-lg cursor-pointer hover:text-primary hover: transform duration-300">
                <Link href="" aria-label="Contatos">
                  Contatos
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};
