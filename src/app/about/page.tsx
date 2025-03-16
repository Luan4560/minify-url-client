export default function Page() {
  return (
    <div className="h-fit lg:h-full w-full flex flex-col items-center justify-between text-wrap p-8 lg:items-start lg:w-[85%] lg:p-8 lg:pl-[315px]">
      <section>
        <h1 className="font-bold text-4xl py-8 lg:text-2xl">Sobre Nós</h1>
        <div className="flex flex-col gap-4">
          <p>
            Bem-vindo ao minifyURL, onde simplificar a web é a nossa missão.
          </p>

          <p>
            Na era digital, onde a comunicação precisa ser rápida e eficiente,
            links longos e complicados podem ser um obstáculo. Foi pensando
            nisso que criamos o minifyURL: uma plataforma moderna e intuitiva
            que transforma URLs extensas em links curtos, fáceis de compartilhar
            e visualmente mais organizados.
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-bold text-4xl py-8 lg:text-2xl">
          Por que o minifyURL?
        </h2>

        <ul className="flex flex-col gap-4">
          <li>
            <p>
              {' '}
              <strong>Praticidade em primeiro lugar</strong> – Com apenas alguns
              cliques, você reduz qualquer link sem complicação. Nossa interface
              foi projetada para que qualquer pessoa possa encurtar URLs
              rapidamente, sem precisar de conhecimento técnico.
            </p>
          </li>

          <li>
            <p>
              <strong>A melhor experiência para você</strong> – Seja para
              divulgar seu negócio, compartilhar conteúdos em redes sociais ou
              otimizar o uso de links em campanhas de marketing, o minifyURL
              facilita o processo e melhora a aparência dos seus links.
            </p>
          </li>

          <li>
            <p>
              <strong>Sempre acessível</strong> – Você pode encurtar links de
              qualquer dispositivo, a qualquer hora. Nosso sistema é leve,
              rápido e otimizado para que você tenha sempre a melhor
              experiência, seja no desktop ou no mobile.
            </p>
          </li>

          <li>
            <p>
              <strong>Links que fazem a diferença</strong> – Mais do que apenas
              reduzir caracteres, um link curto gera mais engajamento, melhora a
              organização e facilita a memorização. Com o minifyURL, seu
              conteúdo fica mais acessível e atraente para quem recebe.
            </p>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="font-bold text-4xl py-8 lg:text-2xl">
          Nosso compromisso
        </h2>

        <div className="flex flex-col gap-4">
          <p>
            O minifyURL nasceu com um propósito: tornar a internet mais
            funcional, ágil e eficiente. Nossa plataforma é construída com foco
            na usabilidade, garantindo que qualquer pessoa – do usuário casual
            ao profissional de marketing – possa aproveitar ao máximo nossos
            serviços.
          </p>
          <p>
            Estamos sempre evoluindo, trazendo melhorias constantes para que sua
            experiência seja cada vez melhor. Nosso objetivo é garantir que
            compartilhar links seja algo simples, sem barreiras e sem
            complicações. Experimente o minifyURL e descubra como um pequeno
            link pode causar um grande impacto. 🚀
          </p>
        </div>
      </section>
    </div>
  );
}
