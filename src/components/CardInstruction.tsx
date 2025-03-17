import Image from 'next/image';

interface CardInstructionsProps {
  id: number;
  title: string;
  description: string;
  image: string;
}

const cardInformations = [
  {
    id: 1,
    title: 'Passo a passo do encurtamento de URL',
    description: 'Siga as etapas simples para encurtar seus links',
    image: '/card-image-1.svg',
  },
  {
    id: 2,
    title: 'Insira seu link no campo apropriado',
    description: 'Digite ou cole o link que deseja encurtar',
    image: '/card-image-2.svg',
  },
  {
    id: 3,
    title: 'Clique no botão "Minify" para encurtar',
    description: 'Aguarde enquanto processamos seu link',
    image: '/card-image-3.svg',
  },
];

export const CardInstructions = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row lg:flex gap-10 ">
      {cardInformations.map((card: CardInstructionsProps) => {
        return (
          <div
            className="w-full flex flex-col place-items-center border-highlight border p-4 rounded-2xl"
            key={card.id}
          >
            <Image
              src={card.image}
              width={250}
              height={100}
              alt="Card Image"
              loading="lazy"
            />
            <p className="font-bold text-center text-md">{card.title}</p>
            <p className="text-center text-sm">{card.description}</p>
          </div>
        );
      })}
    </div>
  );
};
