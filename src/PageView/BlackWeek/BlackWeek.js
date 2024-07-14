import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Container from '../../components/Container/Container';
import AccordionContainer from '../../components/Accordion/Accordion.js';

import {
  ButtonYellow,
  ButtonPink,
  Page,
  Header,
  HeadingH2,
  Autora,
  Depoimentos,
  ProvaSocial,
  SobreGPS,
  Ementa,
  Valor,
  Faq,
  Footer,
  Wrapper,
  ListaCombos,
  BoxInfo,
} from '../BlackWeek/BlackWeek.styles.js';

const accordions = [
  {
    title: 'Não sei nada de programação, a Black Week é para mim?',
    content:
      'Quando antes você souber como são os processos seletivos na área de TI, mais foco você terá ao se preparar para conseguir sua primeira oportunidade - isso você encontra no GPS - Guia de Processos Seletivos. Se você deseja um acompanhamento individual, será bem-vindo(a) na Mentoria Tech Path - podemos fazer o seu planejamento de estudos em programação, acelerando sua preparação e consequentemente, seus resultados.',
  },
  {
    title: 'Já atuo na área de TI, como a Black Week pode me ajudar?',
    content:
      'O que você aprender com o GPS - Guia de Processos Seletivos pode ser aplicado em qualquer momento da sua carreira. Se você já trabalha na área, pode conseguir oportunidades melhores, salários maiores e trabalhar nas melhores empresas. Se você deseja um diagnóstico e uma orientação mais personalizada, a Mentoria Tech Path tabém é uma boa pedida para você.',
  },
  {
    title: 'Em quanto tempo terei resultados?',
    content:
      'Tudo vai depender do quanto você vai se dedicar e dos retornos dos processos seletivos aos quais você vai se candidatar. Mas a base do método O.P.A. (curso GPS) pode ser aplicada já nos primeiros dias e há uma sugestão de cronograma de aplicação de todas as fases de 1 mês e até 6 meses.',
  },
  {
    title: 'E se eu não gostar, ou não me adaptar ao método?',
    content:
      'Se após 7 dias você experimentar o conteúdo do GPS - Guia de Processos Seletivos! e ainda achar que ele não faz sentido para você, basta enviar um pedido de reembolso direto pela plataforma de compra, que será avaliado pela minha equipe, e logo após isso, você terá um reembolso do valor integral.',
  },
  {
    title: 'Como terei acesso aos conteúdos, materiais e bônus do curso?',
    content:
      'Tudo estará centralizado e disponível na plataforma do curso - aulas, materiais extras e comunicados! Você também poderá enviar dúvidas e outros feedbacks por lá. Se tiver qualquer dúvida, terá apoio no suporte@techanne.com.br',
  },
];

function BlackWeek() {
  const router = useRouter();

  const gpsOferta = (e) => {
    e.preventDefault();
    router.push('https://pay.kiwify.com.br/QT4dJrE');
  };

  return (
    <>
      <Head>
        <title>Black Week | Tech Anne</title>
        <meta
          name="description"
          key="description"
          content="Black Week Tech Anne | Melhores condições já vistas!"
        />
        <meta
          property="og:title"
          content="Black Week Tech Anne | Melhores condições já vistas!"
        />
        <meta
          property="og:description"
          content="Black Week Tech Anne | Melhores condições já vistas!"
        />
        <meta property="og:url" content="https://techanne.com.br/black-week/" />
        <meta
          property="og:image"
          content="https://techanne.com.br/images/black-week.png"
        />
      </Head>
      <Page>
        <Header>
          <div className="chamada">
            <h1>Black Week Tech Anne</h1>
            <p>
              O menor valor já visto para você{' '}
              <span>investir na sua carreira</span>{' '}
              <em className="hideMobile">
                e começar 2024 acelerando na direção dos seus objetivos
              </em>
              .
            </p>
          </div>

          <HeadingH2 className="mentoria">
            <span>Por essa você não esperava:</span>
            Combos de Mentoria individual!
          </HeadingH2>

          <ListaCombos>
            <a
              href="https://pay.kiwify.com.br/cP1dVAO"
              alt=""
              className="BannerBF"
            >
              <img src="/images/Bronze_BF.png" alt="" />
            </a>
            <a
              href="https://pay.kiwify.com.br/bz2mj32"
              alt=""
              className="BannerBF"
            >
              <img src="/images/Prata_BF.png" alt="" />
            </a>
            <a
              href="https://pay.kiwify.com.br/RelvnEI"
              alt=""
              className="BannerBF"
            >
              <img src="/images/Ouro_BF.png" alt="" />
            </a>
          </ListaCombos>
        </Header>

        <SobreGPS>
          <Wrapper>
            <img
              src="/images/gps/logo-principal.png"
              alt="Guia de Processos Seletivos"
              className="logo"
            />

            <HeadingH2>
              Método completo para conquistar sua vaga,
              <span>pela metade do preço!</span>
            </HeadingH2>

            <figure>
              <img
                src="/images/gps/sobre-gps.png"
                alt="Imagem ilustrativa de GPS"
              />
              <figcaption>
                <Valor className="combo">
                  <p>12x</p>
                  <h5>
                    <span>R$</span>19<small>,78</small>
                  </h5>
                  <p className="total">ou 197,00 à vista</p>
                </Valor>
                <ul>
                  <li>
                    <strong>Roadmap completo para processos seletivos!</strong>{' '}
                    <br />
                    Método estruturado que em 6 semanas te prepara, com aulas
                    direto ao ponto, para conquistar entrevistas e realizar
                    etapas de avaliação e entrevistas técnicas.
                  </li>
                  <li>
                    <strong>Aulas gravadas</strong> divididas em 3 módulos
                    principais - Organizar, Preparar e Agir (método O.P.A.)
                  </li>

                  <li>
                    <strong>Guia Aplicando para vagas</strong>: onde encontrar e
                    aplicar para vagas.
                  </li>
                  <li>
                    <strong>Processos seletivos na PRÁTICA</strong>: etapas e
                    tipos de avaliação técnica (desafios, live coding e
                    entrevistas).
                  </li>
                  <li>
                    PREPARATION KIT! Guia com tudo o que você precisa para{' '}
                    <strong>
                      treinar muito para testes e avaliações técnicas
                    </strong>{' '}
                    (listas de exercícios, desafios, roteiros de entrevistas e
                    mais)
                  </li>
                </ul>

                <ButtonPink onClick={gpsOferta}>QUERO O GPS!</ButtonPink>
              </figcaption>
            </figure>
          </Wrapper>
        </SobreGPS>

        <Ementa>
          <HeadingH2>E tem mais desconto...</HeadingH2>
          <ListaCombos>
            <BoxInfo>
              <a href="https://pay.kiwify.com.br/5qlI3G8">
                <img src="/images/gps/bonus/vaga-tech.jpg" alt="" />

                <p className="title">
                  Guia com hacks para ficar mais próximo da sua vaga para
                  trabalhar com programação. Direto ao ponto!
                </p>

                <Valor className="combo">
                  <p>&nbsp;</p>
                  <h5>
                    <span>R$</span>24<small>,95</small>
                  </h5>
                  <p className="total">à vista</p>
                </Valor>

                <em>
                  <strong>Ganhe os bônus:</strong> E-book Top Skills, Guia no
                  Notion, Acesso à Comunidade Tech Path e Vagas da semana.
                  Direto ao ponto!
                </em>
                <ButtonPink>GARANTA O SEU!</ButtonPink>
              </a>
            </BoxInfo>
            <BoxInfo>
              <a href="https://pay.kiwify.com.br/FDR8iQK">
                <img src="/images/gps/bonus/perfil-atrativo.jpg" alt="" />

                <p className="title">
                  Conquiste entrevistas para trabalhar com programação, montando
                  o melhor LinkedIn, currículo, portfólio e mais!
                </p>

                <Valor className="combo">
                  <p>&nbsp;</p>
                  <h5>
                    <span>R$</span>98<small>,50</small>
                  </h5>
                  <p className="total">à vista</p>
                </Valor>

                <em>
                  <strong>Ganhe os bônus:</strong> Aulas extras - explore ao
                  máximo o LinkedIn, abordagem com recruiters e Portfólio no
                  GitHub Pages.
                </em>
                <ButtonPink>GARANTA O SEU!</ButtonPink>
              </a>
            </BoxInfo>
            <BoxInfo>
              <a href="https://pay.kiwify.com.br/7IYUoXV">
                <img src="/images/gps/bonus/desafie-se.jpg" alt="" />

                <p className="title">
                  Lista com 30 exercícios de programação para treino de live
                  coding! (com respostas e explicação inclusas!)
                </p>

                <Valor className="combo">
                  <p>&nbsp;</p>
                  <h5>
                    <span>R$</span>19<small>,90</small>
                  </h5>
                  <p className="total">à vista</p>
                </Valor>

                <em>
                  Em diferentes níveis para testar os seus conhecimentos -
                  fácil, intermediário e difícil. Acesso via Notion ou PDF.
                </em>

                <ButtonPink>GARANTA O SEU!</ButtonPink>
              </a>
            </BoxInfo>
          </ListaCombos>
        </Ementa>

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
                200+ pessoas acompanhadas em suas carreiras no último ano e mais
                de 50 mil pessoas consumindo seu conteúdo tech
              </p>
            </figcaption>
          </figure>
        </Autora>

        <Depoimentos>
          <HeadingH2>
            Será que <span>é para você?</span>
            <small>O que outros alunos estão falando:</small>
          </HeadingH2>

          <Container>
            <ProvaSocial>
              <ul>
                <li>
                  <img src="/images/gps/depoimentos/gabriel.png" />
                  <img src="/images/gps/depoimentos/vitoria-02.png" />
                  <img src="/images/gps/depoimentos/arthur.png" />
                  <img src="/images/gps/depoimentos/leonardo05.jpg" />
                </li>
                <li>
                  <img src="/images/gps/depoimentos/jaque-02.jpg" />
                  <img src="/images/gps/depoimentos/leonardo.jpg" />
                  <img src="/images/gps/depoimentos/matheus.png" />
                  <img src="/images/gps/depoimentos/layla.jpg" />
                </li>
                <li>
                  <img src="/images/gps/depoimentos/gabi.jpg" />

                  <img src="/images/gps/depoimentos/leonardo03.jpg" />
                </li>
              </ul>
            </ProvaSocial>
          </Container>
        </Depoimentos>

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
      </Page>
    </>
  );
}

export default BlackWeek;
