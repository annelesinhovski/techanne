import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import AccordionContainer from '../../../components/Accordion/Accordion';

import {
  ButtonYellow,
  ButtonPink,
  PageGPS,
  HeaderVagaTech,
  HeadingH2,
  Hero,
  Publico,
  Headline,
  Conexao,
  Autora,
  SobreGPS,
  Bonus,
  ImagemHero,
  Price,
  PriceDescription,
  Valor,
  Pacote,
  Faq,
  Footer,
  Wrapper,
  Sticky,
} from '../LPGeral.styles';

const accordions = [
  {
    title: 'Não sei nada de programação, o e-book é para mim?',
    content:
      'Quando antes você souber como são os processos seletivos para conquistar uma vaga na área de TI, mais foco você terá ao se preparar para conseguir sua primeira oportunidade. O material pode, junto com o bônus da ferramenta de organização no Notion, ser um guia na hora de montar o seu planejamento de estudos em programação, acelerando sua preparação e consequentemente, seus resultados.',
  },
  {
    title: 'Já atuo na área de TI, como esse método pode me ajudar?',
    content:
      'O conteúdo do e-book pode ser aplicado em qualquer momento da sua carreira. Se você já trabalha na área, pode conseguir oportunidades melhores, salários maiores e trabalhar nas melhores empresas. Não são raros os casos de alunos meus que mesmo com muitas skills técnicas, estavam com o LinkedIn desatualizado e, com pequenos ajustes, passaram a  receber propostas de vagas.',
  },
  {
    title: 'Em quanto tempo terei resultados?',
    content:
      'Tudo vai depender do quanto você vai se dedicar e dos retornos dos processos seletivos aos quais você vai se candidatar. Mas o e-book foi pensado para ser lido e aplicado no mesmo dia, e tenho casos de alunos que tiveram retorno em poucos dias.',
  },
  {
    title: 'E se eu não gostar, ou não me adaptar ao método?',
    content:
      'Se após 7 dias você experimentar o conteúdo e ainda achar que ele não faz sentido para você, basta enviar um pedido de reembolso direto pela plataforma de compra, que será avaliado pela minha equipe, e logo após isso, você terá um reembolso do valor integral. Mas lembre-se de não usar de má fé ao baixar o material e depois pedir o reembolso! Ele foi pensado com muito carinho e colocado muito esforço para que hoje ele estivesse aqui disponível para ajudar mais pessoas nas suas carreiras tech :)',
  },
  {
    title: 'Como terei acesso aos conteúdos, materiais e bônus?',
    content:
      'Tudo estará centralizado e disponível na plataforma do aluno - aulas, materiais extras e comunicados! Você também poderá enviar dúvidas e outros feedbacks por lá.',
  },
];

function VagaTechPage() {
  const router = useRouter();
  const { id } = router.query;
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const carrinho = (e) => {
    e.preventDefault();
    router.push('https://pay.kiwify.com.br/EfVRJSn');
  };

  const scrollToOffer = () => {
    const targetId = 'oferta';
    const element = document.getElementById(targetId);
    const topOffset = element.offsetTop;

    window.scrollTo({
      top: topOffset,
      behavior: 'smooth',
    });
  };

  const buttonClass = showButton ? 'sticky-button show' : 'sticky-button';

  return (
    <>
      <Head>
        <title>E-book Vaga Tech | Tech Anne</title>
        <meta
          name="description"
          key="description"
          content="E-book | Vaga Tech - Guia com hacks para ficar mais próximo da sua vaga para trabalhar com programação."
        />
        <meta property="og:title" content="E-book | Vaga Tech" />
        <meta
          property="og:description"
          content="E-book | Vaga Tech - Guia com hacks para ficar mais próximo da sua vaga para trabalhar com programação."
        />
        <meta
          property="og:url"
          content="https://techanne.com.br/techpath/ebook-vaga-tech/"
        />
        <meta
          property="og:image"
          content="https://techanne.com.br/images/share-vagatech.jpg"
        />
      </Head>
      <PageGPS>
        <Sticky className={buttonClass}>
          <aside>
            <p>Garanta a oferta especial do e-book</p>

            <button onClick={carrinho}>Clique aqui</button>
          </aside>
        </Sticky>

        <Hero>
          <Wrapper className="flex">
            <Headline>
              <HeaderVagaTech>
                <h1>E-book Vaga Tech</h1>
              </HeaderVagaTech>
              <h2>
                Guia com hacks para ficar mais próximo da sua vaga para
                trabalhar com programação.
              </h2>

              <p>
                Sem enrolação. <strong>Direto ao que interessa</strong>.
              </p>
              <ButtonPink onClick={scrollToOffer}>QUERO O E-book!</ButtonPink>
            </Headline>
            <ImagemHero>
              <img
                src="/images/ebook/destaque.png"
                alt="Ilustração do E-book Vaga tech"
              />
            </ImagemHero>
          </Wrapper>
        </Hero>

        <Publico>
          <Wrapper>
            <HeadingH2>
              Se você se identifica <span>com uma dessas situações:</span>
            </HeadingH2>
            <figure className="publico">
              <img
                src="/images/gps/dificuldades-03.png"
                alt="Imagem ilustrativa de pessoas estudando, fazendo call e entrevistas online para conseguir uma vaga na área de tecnologia"
              />
              <figcaption>
                <ul>
                  <li>
                    ❌ Conseguir uma vaga na área de T.I.
                    <strong> parece algo muito distante</strong>.
                  </li>
                  <li>
                    ❌ Estuda por conta,{' '}
                    <strong>mas não sente que sabe o suficiente</strong> para
                    aplicar para vagas
                  </li>
                  <li>
                    ❌ Desanima ao ver as <strong>vagas da área de TI</strong> e
                    todos os <strong>muitos requisitos técnicos</strong> que são
                    exigidos
                  </li>
                  <li>
                    ❌ Aplica para vagas mas não tem um retorno,
                    <strong> não conseguindo entrevistas</strong>.
                  </li>
                  <li>
                    ❌ Parece impossível{' '}
                    <strong>conciliar sua transição de carreira</strong> com sua
                    rotina atual e aprender tudo o que é exigido nas vagas
                  </li>
                </ul>
              </figcaption>
            </figure>
          </Wrapper>
        </Publico>

        <Conexao>
          <Wrapper>
            <h3>Acredite, eu já estive nesse mesmo lugar…</h3>

            <p>
              Tive meu primeiro contato com a programação na época de estágio,
              mas me considero <strong>autodidata</strong> - já que o meu curso
              não era da área de tecnologia. Ou seja, aprendi tudo na raça e
              tive que estudar por conta.{' '}
              <strong>Conheço bem os desafios</strong> de quem inicia os estudos
              de forma autodidata e não conhece nada do mercado de TI. Por esse
              motivo, por muitos anos <strong>fiquei travada</strong> por
              acreditar que eu precisava saber muito mais coisas antes de
              aplicar para vagas ou pedir uma pretensão salarial mais alta.
            </p>

            <p>
              Nos últimos anos,{' '}
              <strong>
                aprendi muitas coisas aplicando para vagas e fazendo processos
                seletivos
              </strong>{' '}
              nas mais diferentes empresas, dentro e fora do Brasil. E sei que{' '}
              <strong>
                estudar sem foco e aplicar para vagas de forma aleatória não é o
                suficiente
              </strong>
              . É preciso ir além.{' '}
            </p>

            <p>
              <strong>
                E para isso eu criei esse material, o E-book Vaga Tech!{' '}
              </strong>{' '}
              Nele compilei o que apliquei na minha própria carreira e de muitos
              outros alunos.
            </p>
          </Wrapper>
        </Conexao>

        <Autora>
          <figure>
            <img
              src="/images/foto-perfil-2.png"
              alt="Foto de Anne Lesinhovski segurando um notebook e sorrindo"
            />
            <figcaption>
              <span>Olá, eu sou Tech Anne! 👋</span>
              <h4>O que você precisa saber sobre mim?</h4>

              <p>13 anos no mercado de tecnologia</p>

              <p>Tech manager em uma big tech</p>

              <p>
                Palestrante em eventos como FRONTIN e The Developer´s Conference
              </p>

              <p>
                Eleita 2x consecutivas como umas das 50 pessoas mais influentes
                da área de programação no Brasil pela #50ToFollow
              </p>

              <p>
                200+ pessoas acompanhadas em suas carreiras no último ano com a
                Mentoria Tech Path
              </p>
            </figcaption>
          </figure>
        </Autora>

        <SobreGPS id="oferta">
          <Wrapper>
            <figure>
              <img
                src="/images/ebook/por-dentro.png"
                alt="Imagem ilustrativa do E-book Vaga Tech"
              />
              <figcaption>
                <HeadingH2>Um pouco mais sobre o E-book Vaga Tech!</HeadingH2>
                <ul>
                  <li>
                    <strong>25+ hacks</strong> para você aprender e aplicar sem
                    dificuldades
                  </li>
                  <li>
                    Descubra quais são as{' '}
                    <strong>skills mais pedidas em vagas</strong> para nunca
                    mais sentir insegurança na hora de aplicar para vagas
                  </li>
                  <li>
                    Aprenda a ter um <strong>LinkedIn</strong> que{' '}
                    <strong>atrai recruiters</strong> e te ajuda a conseguir
                    entrevistas
                  </li>
                  <li>
                    Utilize de forma correta <strong>palavras-chave</strong> em
                    seu currículo, portfólio e LinkedIn para aumentar suas
                    chances de conseguir uma vaga na área de T.I.
                  </li>
                  <li>
                    Aprenda a preencher seu perfil no LinkedIn e currículo,
                    mesmo que você tenha
                    <strong> pouca ou nenhuma experiência</strong> na área de
                    T.I. e utilize a abordagem certa para conquistar
                    oportunidades.
                  </li>
                  <li>
                    Se prepare para
                    <strong> entrevistas</strong>: quais são as perguntas mais
                    comuns, quais são os testes técnicos e como se preparar.
                  </li>
                  <li>
                    Demonstre seus conhecimentos e experiências utilizando o
                    <strong> método STAR ou método CAR</strong> e negocie{' '}
                    <strong>pretensão salarial</strong> em entrevistas.
                  </li>
                </ul>
              </figcaption>
            </figure>
          </Wrapper>
        </SobreGPS>

        <Bonus>
          <Wrapper>
            <h3>
              E para ficar melhor ainda, além do material completo, vou te
              entregar 4 bônus incríveis para acelerar seu processo:
            </h3>
            <ul>
              <li>
                <h4>Bônus #01</h4>
                <figure>
                  <img src="/images/gps/bonus/top-skills.jpg" />
                  <figcaption>
                    <p>
                      <strong>E-book | Top Skills</strong> - Compilado com uma
                      curadoria das skills técnicas mais pedidas em vagas para
                      trabalhar com programação (back-end, front-end, fullstack,
                      devOps, mobile, dados, etc...)
                    </p>
                    <p>
                      Valor: <s>R$ 49,00</s> &rarr;{' '}
                      <span className="price">Nessa oferta: Grátis!</span>
                    </p>
                  </figcaption>
                </figure>
              </li>
              <li>
                <h4>Bônus #02</h4>
                <figure>
                  <img src="/images/gps/bonus/guia-notion.jpg" />
                  <figcaption>
                    <p>
                      <strong>Ferramenta de organização | Notebook</strong> -
                      Guia no Notion com plano de ação (PDI), esteira de
                      processos seletivos, controle pessoal, planner de estudos
                      e atividades e guia de vagas.
                    </p>
                    <p>
                      Valor: <s>R$ 97,00</s> &rarr;{' '}
                      <span className="price">Nessa oferta: Grátis!</span>
                    </p>
                  </figcaption>
                </figure>
              </li>
              <li>
                <h4>Bônus #03</h4>
                <figure>
                  <img src="/images/gps/bonus/comunidade.jpg" />
                  <figcaption>
                    <p>
                      <strong>Comunidade Tech Path</strong> - Comunidade no
                      Discord para você aumentar seu networking e trocar
                      experiências com outros alunos.
                    </p>
                    <p>
                      Valor: <s>R$ 49,00/mês</s> &rarr;{' '}
                      <span className="price">Nessa oferta: Grátis!</span>
                    </p>
                  </figcaption>
                </figure>
              </li>
              <li>
                <h4>Bônus #04</h4>
                <figure>
                  <img src="/images/gps/bonus/vagas-semana.jpg" />
                  <figcaption>
                    <p>
                      <strong>Vagas da semana</strong> - Curadoria semanal com
                      lista de vagas selecionadas para você acessar e aplicar.
                    </p>
                    <p>
                      Valor: <s>R$ 29,00/mês</s> &rarr;{' '}
                      <span className="price">Nessa oferta: Grátis!</span>
                      <br />
                      <br />
                    </p>
                  </figcaption>
                </figure>
              </li>
            </ul>
          </Wrapper>
        </Bonus>

        <Price>
          <Wrapper>
            <Pacote>
              <h3>Recapitulando</h3>
              <ul>
                <li>
                  <p>
                    Material completo (25+ hacks prontos para aplicar){' '}
                    <span>
                      → <s>R$ 149</s>
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    Bônus #01 - E-book Top Skills{' '}
                    <span>
                      → <s>R$ 49</s>
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    Bônus #02 - Guia no notion{' '}
                    <span>
                      → <s>R$ 97</s>
                    </span>
                  </p>
                </li>

                <li>
                  <p>
                    Bônus #03 - Comunidade Tech Path{' '}
                    <span>
                      → <s>R$ 49/mês</s>
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    Bônus #04 - Vagas da semana{' '}
                    <span>
                      → <s>R$ 29/mês</s>
                    </span>
                  </p>
                </li>
              </ul>

              <h4>
                Tudo isso deveria custar mais de R$370!
                <span>
                  Mas hoje você não vai precisar investir nem metade disso.
                </span>
              </h4>

              <h5>
                Tenha acesso ao{' '}
                <span>
                  <u>E-book Vaga Tech</u> + todos os bônus
                </span>{' '}
                por apenas:{' '}
              </h5>
            </Pacote>
            {/* <PriceDescription>
              <Valor>
                <p>12x</p>
                <h5>
                  <span>R$</span>9<small>,74</small>
                </h5>
                <p className="total">ou 97,00 à vista</p>
              </Valor>
            </PriceDescription> */}
            <PriceDescription>
              <Valor>
                <h5>
                  <span>R$</span>49<small>,90</small>
                </h5>
                <p className="total">OFERTA DE LANÇAMENTO</p>
              </Valor>
            </PriceDescription>
          </Wrapper>

          <div className="btn-wrapper">
            <ButtonPink onClick={carrinho}>QUERO O E-BOOK!</ButtonPink>
          </div>
        </Price>

        <Faq>
          <Wrapper>
            <HeadingH2>
              <span>Perguntas frequentes</span>
            </HeadingH2>
            <p className="instrucao">Clique para ver as respostas &darr;</p>
            <AccordionContainer accordions={accordions} />
          </Wrapper>
        </Faq>

        <Footer>
          <img
            src="/images/logo-tech-path-horizontal-amarela.svg"
            alt="Logo Tech Path"
          />
          <p>Copyright © Tech Path 2024</p>

          <p>
            Dúvidas e suporte: <br />
            contato@techanne.com.br
          </p>
        </Footer>
      </PageGPS>
    </>
  );
}

export default VagaTechPage;
