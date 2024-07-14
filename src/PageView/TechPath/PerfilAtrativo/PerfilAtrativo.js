import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import AccordionContainer from '../../../components/Accordion/Accordion';

import {
  ButtonYellow,
  ButtonPink,
  PageGPS,
  HeaderPerfilAtrativo,
  HeadingH2,
  HeroNoPadding,
  BulletPoints,
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
    title: 'Não sei nada de programação, o curso é para mim?',
    content:
      'Quando antes você se posicionar como profissonal que tem a intenção de entrar na área de T.I., maiores serão as suas chances. Existem formas de preencher o seu LinkedIn mesmo que você não tenha experiência na área também. Além disso, é um ótimo lugar para fazer networking e se conectar com mais pessoas!',
  },
  {
    title: 'Já atuo na área de TI, como esse método pode me ajudar?',
    content:
      'O conteúdo do curso pode ser aplicado em qualquer momento da sua carreira. Se você já trabalha na área, pode conseguir oportunidades melhores, salários maiores e trabalhar nas melhores empresas. Não são raros os casos de alunos meus que mesmo com muitas skills técnicas, estavam com o LinkedIn desatualizado e, com pequenos ajustes, passaram a  receber propostas de vagas.',
  },
  {
    title: 'Em quanto tempo terei resultados?',
    content:
      'Tudo vai depender do quanto você vai se dedicar e aplicar os conceitos ensinados nas aulas. Mas o curso foi pensado para ser assistido e aplicado no mesmo dia, tendo sua tarefa mais facilitada com os materiais de apoio, e tenho casos de alunos que tiveram retorno em poucos dias.',
  },
  {
    title: 'E se eu não gostar, ou não me adaptar ao método?',
    content:
      'Se após 7 dias você experimentar o conteúdo e ainda achar que ele não faz sentido para você, basta enviar um pedido de reembolso direto pela plataforma de compra, que será avaliado pela minha equipe, e logo após isso, você terá um reembolso do valor integral. Mas lembre-se de não usar de má fé ao baixar o material e depois pedir o reembolso! Ele foi pensado com muito carinho e colocado muito esforço para que hoje ele estivesse aqui disponível paa ajudar mais pessoas nas suas carreiras tech :)',
  },
  {
    title: 'Como terei acesso aos conteúdos, materiais e bônus?',
    content:
      'Tudo estará centralizado e disponível na plataforma do aluno - aulas, materiais extras e comunicados! Você também poderá enviar dúvidas e outros feedbacks por lá.',
  },
];

function PerfilAtrativoPage() {
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
    router.push('https://pay.kiwify.com.br/nTN7xD7');
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
        <title>Perfil Atrativo para devs | Tech Anne</title>
        <meta
          name="description"
          key="description"
          content="Perfil Atrativo para devs - Aprenda a ter um perfil que é desejado por recrutadores de vagas de T.I. "
        />
        <meta property="og:title" content="Perfil Atrativo para devs" />
        <meta
          property="og:description"
          content="Perfil Atrativo para devs - Aprenda a ter um perfil que é desejado por recrutadores de vagas de T.I."
        />
        <meta
          property="og:url"
          content="https://techanne.com.br/techpath/perfil-atrativo-devs/"
        />
        <meta
          property="og:image"
          content="https://techanne.com.br/images/share-techanne.jpg"
        />
      </Head>
      <PageGPS>
        <Sticky className={buttonClass}>
          <aside>
            <p>Garanta seu bônus e a oferta especial</p>

            <button onClick={carrinho}>Clique aqui</button>
          </aside>
        </Sticky>

        <HeroNoPadding>
          <Wrapper className="flex">
            <Headline>
              <HeaderPerfilAtrativo>
                <h1>Perfil Atrativo Devs</h1>
              </HeaderPerfilAtrativo>
              <h2>
                Aprenda a construir um perfil que demonstra as habilidades que
                as empresas de T.I. amam!
              </h2>
              <h2></h2>
              <p>
                <strong>LinkedIn, GitHub, portfólio, currículo e mais!</strong>{' '}
                Para você se destacar, ser encontrado por recruiters e
                conquistar vagas para trabalhar com programação.{' '}
              </p>
              <ButtonPink onClick={scrollToOffer}>QUERO acessar!</ButtonPink>
            </Headline>
            <ImagemHero>
              <img
                src="/images/perfil-atrativo.png"
                alt="Perfil Atrativo para Devs"
              />
            </ImagemHero>
          </Wrapper>
        </HeroNoPadding>

        <BulletPoints>
          <Wrapper>
            <ul>
              <li>
                <figure className="publico">
                  <img
                    src="/images/perfil-atrativo/pad.png"
                    alt="Imagem ilustrativa"
                  />
                  <figcaption>
                    <p>
                      <strong>Hackeie o LinkedIn</strong> e desbloqueie todo o
                      pontencial da principal ferramenta para encontrar vagas na
                      área de T.I. nos dias atuais.
                    </p>
                    <p>
                      <strong>GitHub, portfólio e currículo</strong>: desvende
                      os segredos para se destacar, ter um perfil buscado por
                      recrutadores e que conquista entrevistas.
                    </p>
                    <p>
                      <strong>Drible a falta de experiência</strong>: em um
                      mercado cada vez mais exigente, saiba como comprovar seus
                      conhecimentos mesmo que você seja iniciante na área.
                    </p>
                    <p>
                      <strong>Aulas gravadas e direto ao ponto</strong>: para
                      você aprender, aplicar e ter resultados rápidos! Além de
                      modelos de currículo, exemplos de portfólio e checklist de
                      LinkedIn.
                    </p>
                  </figcaption>
                </figure>
              </li>
            </ul>

            <ButtonPink onClick={scrollToOffer}>evoluir meu perfil!</ButtonPink>
          </Wrapper>
        </BulletPoints>

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
                    ❌ Se sentiu perdido ao preencher seu
                    <strong> perfil no LinkedIn</strong>?
                  </li>
                  <li>
                    ❌ Enviou dezenas de currículos
                    <strong> sem retorno</strong>?
                  </li>
                  <li>
                    ❌ Conseguir uma vaga na área de T.I.
                    <strong> parece algo muito distante</strong>.
                  </li>
                  <li>
                    ❌ Aplica para vagas mas não tem um retorno,
                    <strong> não conseguindo entrevistas</strong>.
                  </li>
                  <li>
                    ❌ Desanima ao ver as <strong>vagas da área de TI</strong> e
                    todos os <strong>muitos requisitos técnicos</strong> que são
                    exigidos
                  </li>
                  <li>
                    ❌ Sente que está <strong>estagnado</strong> pois mesmo
                    insatisfeito com a sua situação{' '}
                    <strong>não consegue uma oportunidade melhor</strong>.
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
                E para isso eu criei esse material, o curso Perfil Atrativo para
                Devs!{' '}
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
                Mentoria Tech Path, GPS e mais...
              </p>
            </figcaption>
          </figure>
        </Autora>

        <SobreGPS id="oferta">
          <Wrapper>
            <figure>
              <img
                src="/images/perfil-atrativo/plataforma.png"
                alt="Imagem ilustrativa da plataforma do curso Perfil Atrativo para Devs"
              />
              <figcaption>
                <HeadingH2>Um pouco mais sobre o PAD!</HeadingH2>
                <ul>
                  <p>
                    Aprenda a ter um <strong>LinkedIn</strong>{' '}
                    <strong>estratégico</strong>, com foco em competências e
                    experiências
                  </p>
                  <p>
                    Utilize de forma correta <strong>palavras-chave</strong> em
                    seu currículo, portfólio e LinkedIn para aumentar suas
                    chances de conseguir uma vaga na área de T.I.
                  </p>
                  <p>
                    Aprenda a preencher seu perfil no LinkedIn e currículo,
                    mesmo que você tenha
                    <strong> pouca ou nenhuma experiência</strong> na área de
                    T.I. e utilize a abordagem certa para conquistar
                    oportunidades.
                  </p>
                  <p>
                    <strong> Aulas extras: </strong> Hacks no LinkedIn, busca
                    por vagas, Networking, Portfólio no GitHub Pages e mais!
                  </p>
                </ul>
              </figcaption>
            </figure>
            <figure>
              <figcaption>
                <HeadingH2>Materiais de apoio</HeadingH2>
                <p>
                  ✅ <strong>Guia Use IA ao seu favor</strong> - Guia de promps
                  para usar no ChatGPT e agilizar sua tarefa de atualizar suas
                  informações profissionais.
                  <br />
                  <br />✅ <strong>Guia LinkedIn</strong> - resumo e pontos
                  principais para aplicar
                  <br />
                  <br />✅ <strong>Guia Portfólio + GitHub</strong> - com
                  exemplos práticos
                  <br />
                  <br />✅ <strong>Template de Currículo</strong> - para copiar
                  e ajustar com suas informações
                  <br />
                  <br />✅{' '}
                  <strong>Template de Readme para projetos no GitHub</strong> -
                  valorize seus projetos para deixá-los públicos
                  <br />
                  <br />✅ <strong>
                    Checklist RaioX | Posicionamento Dev
                  </strong>{' '}
                  - para revisar seu perfil do LinkedIn
                </p>
              </figcaption>
              <img
                src="/images/perfil-atrativo/materiais.png"
                alt="Imagem ilustrativa da plataforma do curso Perfil Atrativo para Devs"
              />
            </figure>
          </Wrapper>
        </SobreGPS>

        <Price>
          <Wrapper>
            <Pacote>
              <h3>Quanto custa ganhar tempo?</h3>

              <h4>
                <span>Somente nessa oferta especial, invista em você com </span>{' '}
                valor promocional.
              </h4>

              <h5>
                Tenha acesso ao{' '}
                <span>
                  <u>Perfil Atrativo para Devs</u> + todos os materiais extras
                </span>{' '}
                por apenas:{' '}
              </h5>
            </Pacote>
            <PriceDescription>
              {id == 'oferta' ? (
                <Valor>
                  <p>12x</p>
                  <h5>
                    <span>R$ &nbsp; </span> 9<small>,74</small>
                  </h5>
                  <p className="total">ou 97,00 à vista</p>
                </Valor>
              ) : (
                <Valor>
                  <p>12x</p>
                  <h5>
                    <span>R$ &nbsp; </span> 19<small>,78</small>
                  </h5>
                  <p className="total">ou 197,00 à vista</p>
                </Valor>
              )}
            </PriceDescription>
          </Wrapper>

          <div className="btn-wrapper">
            <ButtonPink onClick={carrinho}>ACESSE HOJE MESMO!</ButtonPink>
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

export default PerfilAtrativoPage;
