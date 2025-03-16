'use client';

import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className="w-full flex flex-col bg-primary items-center gap-4 border-t border-t-gray-500 p-4 sticky">
      <div className="w-full flex flex-col items-start justify-start lg:w-[1300px] lg:flex lg:flex-row lg:items-center lg:justify-between">
        <div>
          <Image
            src="/minify-logo.svg"
            width={55}
            height={55}
            alt="Minify Logo"
            quality={100}
            aria-label="Minify Logo"
          />
        </div>

        <div className="flex flex-col gap-4 pr-4 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-sm">Política de Privacidade</p>
          <p className="text-sm">Termos de Serviço</p>
          <p className="text-sm">Configuracões de Cookies</p>
        </div>
      </div>

      <p className="text-[12px] italic text-gray-500">
        &copy; 2025 minifyurl.net Todos os direitos reservados
      </p>
    </footer>
  );
};
