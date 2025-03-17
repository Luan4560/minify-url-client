import Image from 'next/image';

export const CardInstructions = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row lg:flex gap-10 ">
      <div className="w-full flex flex-col place-items-center border-highlight border p-4 rounded-2xl">
        <Image
          src="/card-image-1.svg"
          width={250}
          height={100}
          alt="Card Image"
          loading="lazy"
        />
        <p className="font-bold text-center text-md">
          Passo a passo do encurtamento de URL
        </p>
        <p className="text-center text-sm">
          Siga as etapas simples para encurtar seus links
        </p>
      </div>

      <div className="w-full flex flex-col place-items-center border-highlight border p-4 rounded-2xl">
        <Image
          src="/card-image-2.svg"
          width={250}
          height={100}
          alt="Card Image"
          loading="lazy"
        />
        <p className="font-bold text-center text-md">
          Insira seu link no campo apropriado
        </p>
        <p className="text-center text-sm">
          Digite ou cole o link que deseja encurtar
        </p>
      </div>

      <div className="w-full flex flex-col place-items-center border-highlight border p-4 rounded-2xl">
        <Image
          src="/card-image-3.svg"
          width={250}
          height={100}
          alt="Card Image"
          loading="lazy"
        />
        <p className="font-bold text-center text-md">
          Clique no botão &quot;Minify&quot; para encurtar
        </p>
        <p className="text-center text-sm">
          Aguarde enquanto processamos seu link
        </p>
      </div>
    </div>
  );
};
