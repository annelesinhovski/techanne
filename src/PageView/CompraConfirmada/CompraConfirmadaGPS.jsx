import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import AccordionContainer from '../../components/Accordion/Accordion';

import {
  PageGPS,
  HeaderGPS,
  HeroGPSCompra,
  Confirmacao,
  Wrapper,
  ButtonPink,
} from '../TechPath/GPS.styles';

import {
  HeadingH3,
  HeadingH2,
  BulletPoints,
  Footer,
} from '../../PageView/TechPath/TechPath.styles';

import { BoxInfo } from '../TechPath/LPGeral.styles';

function CompraConfirmadaTechPath() {
  const router = useRouter();

  const linkListaVIP = (e) => {
    e.preventDefault();
    router.push('/lista-vip');
  };

  const accordions = [
    {
      title: 'Começando do ZERO',
      content:
        'Entenda melhor o mercado tech - áreas de atuação, como se preparar e formas de trabalho (CLT x PJ x Freelancer).',
    },
    {
      title: 'Para quem já está no mercado',
      content:
        'Diagnóstico do seu perfil como profissional de TI para traçar um plano de ação e ir para o próximo nível da sua carreira.',
    },
    {
      title: 'Mapeamento do mercado',
      content:
        'Aprenda a olhar o mercado de modo estratégico - entenda o que as empresas buscam nos profissionais.',
    },
    {
      title: 'Roadmap de carreira e PDI',
      content:
        'Conheça qual caminho percorrer e defina seus objetivos de carreira em um Plano de Desenvolvimento Individual (PDI).',
    },
    {
      title: 'Branding pessoal',
      content:
        'Use ferramentas a seu favor para se apresentar no mercado da forma correta e se destacar (Currículo, LinkedIn e GitHub).',
    },
    {
      title: 'Processos seletivos',
      content:
        'Como ocorrem e como me preparar? Abordagem de recrutadores, entrevistas, testes técnicos e muito mais.',
    },
  ];

  return (
    <>
      <Head>
        <title>GPS - Compra confirmada!</title>
      </Head>
      <PageGPS>
        <HeaderGPS>
          <Wrapper>
            <h1>GPS - Guia de Processos Seletivos</h1>
          </Wrapper>
        </HeaderGPS>

        <HeroGPSCompra>
          <Wrapper className="flex">
            <Confirmacao>
              <figure>
                <img
                  src="/images/gps/sobre-gps.png"
                  alt="Imagem ilustrativa de GPS"
                />
                <figcaption>
                  <h2>
                    Sua compra segura está confirmada e seu acesso ao GPS! está
                    garantido. <br />
                  </h2>

                  <p>
                    Você deverá receber dois e-mails: <br /> um de confirmação
                    de compra e outro de acesso à plataforma. Fique de olho!{' '}
                    <br />
                    <br />
                  </p>
                </figcaption>
              </figure>
            </Confirmacao>
          </Wrapper>
        </HeroGPSCompra>
        <BulletPoints>
          <Wrapper>
            <HeadingH2>
              Somente aqui nesta página eu tenho um convite para você.
            </HeadingH2>
            <HeadingH3>
              Porque eu quero MUITO que você alcance os seus objetivos e tenha a
              sua carreira potencializada, assim como eu fiz!
            </HeadingH3>

            <p>
              Estou te oferecendo uma vaga na{' '}
              <strong>Mentoria Tech Path!</strong>, meu acompanhamento mais
              personalizado.
            </p>

            <p>
              Nela poderemos falar sobre todas as dúvidas que você tem sobre os
              próximos passos na sua carreira em tecnologia.
            </p>

            <p>
              Nos encontraremos no Google Meet, em uma reunião no estilo 1:1, e
              estes são apenas alguns assuntos que podemos abordar - clique nos
              itens &darr;
            </p>

            <AccordionContainer accordions={accordions} />

            <p>
              <strong>
                <br />
                <br />E somente aqui nos links abaixo eu te ofereço essa vaga
                com desconto:
              </strong>
            </p>

            <BoxInfo>
              <a href="https://pay.kiwify.com.br/ND1uzaA">
                <p className="title">Mentoria Tech Path - 6 meses</p>
                <p className="price">
                  Valor: <s>R$ 797,00</s> &rarr;{' '}
                  <span>Nessa oferta: R$ 720</span>
                </p>
                <em>Bônus: Ganhe acesso a todos os meus cursos!</em>
              </a>
            </BoxInfo>

            <BoxInfo>
              <a href="https://pay.kiwify.com.br/RCAPLXc">
                <p className="title">Mentoria Tech Path - 3 meses</p>
                <p className="price">
                  Valor: <s>R$ 399,00</s> &rarr;{' '}
                  <span>Nessa oferta: R$ 360</span>
                </p>
                <em>Bônus: Planner digital + template de PDI</em>
              </a>
            </BoxInfo>

            <BoxInfo>
              <a href="https://pay.kiwify.com.br/f1pNZKd">
                <p className="title">Mentoria Tech Path - sessão única</p>
                <p className="price">
                  Valor: <s>R$ 169,00</s> &rarr;{' '}
                  <span>Nessa oferta: R$ 150</span>
                </p>
              </a>
            </BoxInfo>
          </Wrapper>
        </BulletPoints>
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

export default CompraConfirmadaTechPath;
