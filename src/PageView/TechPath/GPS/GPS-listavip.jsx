import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Container from '../../../components/Container/Container.jsx';
import ListCarousel from '../../../components/ListCarousel/ListCarousel.jsx';
import AccordionContainer from '../../../components/Accordion/Accordion.js';

import {
  ButtonYellow,
  ButtonPink,
  PageGPS,
  HeaderGPS,
  HeadingH2,
  HeroGPS,
  HeadlineListaVIP,
  BulletPoints,
  Conexao,
  Ementa,
  Topicos,
  Objetivos,
  Autora,
  Depoimentos,
  ValorVIP,
  ProvaSocial,
  BoxInfo,
  ImagemHero,
  DevPerdido,
  Price,
  PriceDescriptionVIP,
  Pacote,
  Faq,
  Footer,
  Wrapper,
  Sticky,
} from '../GPS.styles.js';

const listaTopicos = [
  {
    imgSrc: '/images/icones/coding.svg',
    imgAlt:
      'Ilustração de uma tela com código, e uma mão sob o teclado digitando',
    title: 'FASE 1: ORGANIZAR ',
    description: (
      <>
        <p>
          <em>Conhecendo o terreno e ganhando confiança.</em>
        </p>
        <p>
          <strong>Você vai aprender:</strong> <br />
          Analise estratégica de vagas, definir seu DREAM JOB, fazer uma auto
          avaliação de perfil atual e montar um plano de ação para chegar lá.
        </p>
      </>
    ),
  },
  {
    imgSrc: '/images/icones/pesquisa.svg',
    imgAlt: 'Ícone de uma lupa',
    title: 'FASE 2: PREPARAR',
    description: (
      <>
        <p>
          <em>O que é preciso para ser recrutado/a?</em>
        </p>
        <p>
          <strong>Você vai aprender:</strong> <br />
          Como ter um perfil atrativo para empresas e recrutadores de vagas,
          como encontrar e aplicar para vagas alinhadas ao seu perfil.
        </p>
      </>
    ),
  },
  {
    imgSrc: '/images/icones/ux.svg',
    imgAlt: 'Icone com uma pessoa e um balão de fala com um coração dentro',
    title: 'FASE 3: AGIR',
    description: (
      <>
        <p>
          <em>Entrevista marcada, e agora? </em>
        </p>
        <p>
          <strong>Você vai aprender:</strong> <br />
          Como são processos seletivos na vida real - etapas, perguntas mais
          comuns, como se comportar e como se preparar para testes e avaliações
          técnicas.
        </p>
      </>
    ),
  },
];

const accordions = [
  {
    title: 'Não sei nada de programação, o curso é para mim?',
    content:
      'Quando antes você souber como são os processos seletivos na área de TI, mais foco você terá ao se preparar para conseguir sua primeira oportunidade. O método O.P.A. pode, inclusive, ser um guia na hora de montar o seu planejamento de estudos em programação, acelerando sua preparação e consequentemente, seus resultados.',
  },
  {
    title: 'Já atuo na área de TI, como esse método pode me ajudar?',
    content:
      'Com certeza! O método O.P.A. e o que se aprende com o GPS - Guia de Processos Seletivos pode ser aplicado em qualquer momento da sua carreira. Se você já trabalha na área, pode conseguir oportunidades melhores, salários maiores e trabalhar nas melhores empresas.',
  },
  {
    title: 'Em quanto tempo terei resultados?',
    content:
      'Tudo vai depender do quanto você vai se dedicar e dos retornos dos processos seletivos aos quais você vai se candidatar. Mas a base do método O.P.A. pode ser aplicada já nos primeiros dias e há uma sugestão de cronograma de aplicação de todas as fases de 1 mês e até 6 meses.',
  },
  {
    title: 'E se eu não gostar, ou não me adaptar ao método?',
    content:
      'Se após 7 dias você experimentar o conteúdo do GPS - Guia de Processos Seletivos! e ainda achar que ele não faz sentido para você, basta enviar um pedido de reembolso direto pela plataforma de compra, que será avaliado pela minha equipe, e logo após isso, você terá um reembolso do valor integral.',
  },
  {
    title: 'Como terei acesso aos conteúdos, materiais e bônus do curso?',
    content:
      'Tudo estará centralizado e disponível na plataforma do curso - aulas, materiais extras e comunicados! Você também poderá enviar dúvidas e outros feedbacks por lá.',
  },
];

function GPSPage() {
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
    router.push('https://techanne.com.br/lista-vip/');
  };

  const carrinhoOferta = (e) => {
    e.preventDefault();
    router.push('https://pay.kiwify.com.br/OYP4keP');
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
        <title>GPS - Guia de Processos Seletivos</title>
        <meta
          name="description"
          key="description"
          content="GPS - Guia de Processos Seletivos! Conquiste sua vaga para trabalhar com programação."
        />
        <meta
          property="og:title"
          content="GPS - Guia de Processos Seletivos!"
        />
        <meta
          property="og:description"
          content="GPS - Guia de Processos Seletivos! Conquiste sua vaga para trabalhar com programação."
        />
        <meta
          property="og:url"
          content="https://techanne.com.br/techpath/gps/"
        />
        <meta
          property="og:image"
          content="https://techanne.com.br/images/share-gps.jpg"
        />
      </Head>
      <PageGPS>
        <HeaderGPS>
          <h1>GPS - Guia de Processos Seletivos</h1>
        </HeaderGPS>
        <Sticky className={buttonClass}>
          <aside>
            <p>Conquiste sua vaga dos sonhos na área de T.I.</p>

            {id == 'oferta' ? (
              <button onClick={carrinhoOferta}>Entre na LISTA VIP</button>
            ) : (
              <button onClick={carrinho}>Entre na LISTA VIP</button>
            )}
          </aside>
        </Sticky>

        <HeroGPS>
          <Wrapper className="flex">
            <HeadlineListaVIP>
              <h2>
                Está chegando a hora de você se preparar para{' '}
                <span>conquistar seu sonho grande</span>.
              </h2>

              <ul>
                <li>
                  <p>
                    Roadmap completo para processos seletivos na área de T.I.
                  </p>
                </li>
                <li>
                  <p>
                    Entenda as habilidades que te levarão para o próximo nível
                    da sua carreira.
                  </p>
                </li>
                <li>
                  <p>
                    Seja selecionado(a) para entrevistas por meio de um perfil
                    atrativo usando LinkedIn, GitHub, Portfólio e currículo.
                  </p>
                </li>
                <li>
                  <p>
                    Acesse o preparatório para esteira de entrevistas: do RH às
                    avaliações técnicas.
                  </p>
                </li>
              </ul>

              <p>
                <strong>Dia 18/04</strong> – Oportunidade exclusiva. <br />
                Entre na Lista VIP para receber todas as informações.
              </p>
              <ButtonPink onClick={scrollToOffer}>
                Entrar na lista VIP
              </ButtonPink>
            </HeadlineListaVIP>
            <ImagemHero>
              <img src="/images/gps/hero-gps-2.png" alt="Hero GPS" />
            </ImagemHero>
          </Wrapper>
        </HeroGPS>

        <BulletPoints>
          <Wrapper>
            <DevPerdido>
              <BoxInfo>
                <img src="/images/gps/sem-gps.jpg" alt="" />

                <p className="title">Sem GPS</p>

                <ul>
                  <li>
                    <p>❌ Não tem um plano bem definido</p>
                  </li>
                  <li>
                    <p>
                      ❌ Coloca muito esforço em estudos que não vão trazer
                      resultados no curto/médio prazo
                    </p>
                  </li>
                  <li>
                    <p>❌ Aplica para vagas de forma aleatória</p>
                  </li>
                  <li>
                    <p>❌ Não é chamado para entrevistas</p>
                  </li>
                  <li>
                    <p>❌ Não sabe mostrar o seu melhor em entrevistas</p>
                  </li>
                  <li>
                    <p>
                      ❌ Deixa o nervosismo tomar conta e reprova nas avaliações
                      técnicas
                    </p>
                  </li>
                </ul>
              </BoxInfo>
              <BoxInfo>
                <img src="/images/gps/com-gps.jpg" alt="" />

                <p className="title">Com GPS</p>

                <ul>
                  <li>
                    <p>
                      ✅ Tem um plano de ação para atingir seu próximo nível de
                      carreira
                    </p>
                  </li>
                  <li>
                    <p>
                      ✅ Adquire habilidades estratégicas que trarão retorno e
                      crescimento
                    </p>
                  </li>
                  <li>
                    <p>
                      ✅ Aplica para vagas alinhadas com seu perfil de forma
                      realista
                    </p>
                  </li>
                  <li>
                    <p>✅ Recebe convites para entrevistas</p>
                  </li>
                  <li>
                    <p>✅ Sabe se vender e negociar em uma entrevista</p>
                  </li>
                  <li>
                    <p>
                      ✅ Tem a melhor preparação e tem tudo sob controle no
                      momento de avaliações técnicas
                    </p>
                  </li>
                </ul>
              </BoxInfo>
            </DevPerdido>

            <ButtonPink onClick={scrollToOffer}>QUERO O GPS!</ButtonPink>
          </Wrapper>
        </BulletPoints>

        <Conexao>
          <Wrapper>
            <h3>Acredite, eu sei pelo que você está passando.</h3>

            <figure>
              <img src="/images/gps/antes.jpg" alt="" />
              <figcaption>
                <p>
                  Comecei a estudar programação de forma totalmente{' '}
                  <strong>autodidata</strong>. Por esse motivo, me faltava
                  confiança e por muitos anos <strong>fiquei travada</strong>{' '}
                  por acreditar que eu precisava saber muito mais coisas antes
                  de aplicar para vagas ou pedir uma pretensão salarial mais
                  alta. <br />
                  <br />
                  Estava completamente <strong>perdida</strong> e não sabia que
                  era possível, com o direcionamento certo, alcançar novos
                  níveis na minha carreira.
                  <br />
                  <br />
                  Até que o jogo virou...
                </p>
              </figcaption>
            </figure>

            <figure>
              <img src="/images/gps/depois.jpg" alt="" />
              <figcaption>
                <p>
                  Nos últimos anos, <strong>aprendi muitas coisas</strong>{' '}
                  aplicando para vagas e fazendo processos seletivos nas mais
                  diferentes empresas, dentro e fora do Brasil.{' '}
                  <strong>
                    Em 3 anos evoluí de dev pleno para líder tech em uma big
                    tech.
                  </strong>
                  <br />
                  <br />E sei que estudar sem foco e aplicar para vagas de forma
                  aleatória não é o suficiente. É preciso ir além.{' '}
                </p>

                <p>
                  <strong>
                    E para isso eu criei o GPS - Guia de Processos Seletivos!
                  </strong>
                </p>
              </figcaption>
            </figure>
          </Wrapper>
        </Conexao>

        <Ementa>
          <Wrapper>
            <HeadingH2>
              <span>Conheça o GPS</span>
            </HeadingH2>
            <figure>
              <figcaption>
                <p>
                  O GPS é baseado no <strong>Método O.P.A.</strong>, sigla para:
                  Organizar, Preparar e Agir.
                </p>
                <p>
                  Esse método te ensina a maneira certa de se{' '}
                  <strong>preparar para processos seletivos</strong> na área de
                  TI e <strong>acelerar a sua aprovação</strong> para a vaga dos
                  sonhos.
                </p>
              </figcaption>
              <img src="/images/gps/metodo-opa.png" alt="Método OPA" />
            </figure>

            <Topicos>
              <ListCarousel skills={listaTopicos} />
            </Topicos>
          </Wrapper>
        </Ementa>

        <Objetivos>
          <Wrapper>
            <h3>O GPS - Guia de Processos Seletivos! é para você que:</h3>
            <ul>
              <li>
                <p>
                  ✅ Quer conquistar uma vaga no mercado de TI, principalmente
                  nas áreas de desenvolvimento e programação;
                </p>
              </li>
              <li>
                <p>
                  ✅ Está em transição de carreira e busca sua primeira
                  oportunidade;
                </p>
              </li>
              <li>
                <p>
                  ✅ Já atua no mercado de TI, mas quer ter acesso às melhores
                  oportunidades de emprego;
                </p>
              </li>
              <li>
                <p>
                  ✅ Quer se preparar de forma focada e ter seus resultados
                  acelerados.
                </p>
              </li>
            </ul>
          </Wrapper>
        </Objetivos>

        <Depoimentos>
          <HeadingH2>
            Será que <span>é para você?</span>
            <small>O que estão falando do método:</small>
          </HeadingH2>

          <Container>
            <ProvaSocial>
              <ul>
                <li>
                  <img src="/images/gps/depoimentos/gabi03.jpg" />
                  <img src="/images/gps/depoimentos/natalia.jpg" />
                  <img src="/images/gps/depoimentos/matheus03.jpg" />

                  <img src="/images/gps/depoimentos/arthur.png" />
                </li>
                <li>
                  <img src="/images/gps/depoimentos/jaque-02.jpg" />

                  <img src="/images/gps/depoimentos/matheus.png" />
                  <img src="/images/gps/depoimentos/leonardo.jpg" />
                  <img src="/images/gps/depoimentos/leonardo05.jpg" />
                </li>
                <li>
                  <img src="/images/gps/depoimentos/vitoria-02.png" />
                  <img src="/images/gps/depoimentos/gabriel.png" />
                  <img src="/images/gps/depoimentos/leonardo03.jpg" />
                  <img src="/images/gps/depoimentos/cyro.jpg" />
                </li>
              </ul>
            </ProvaSocial>
          </Container>
        </Depoimentos>

        <Price id="oferta">
          <Wrapper>
            <Pacote>
              <aside>
                O <strong>GPS - Guia de Processos seletivos!</strong> é um
                método capaz de levar sua{' '}
                <strong>carreira para o próximo nivel</strong>, porque ele foi
                criado para ser fora da curva e completo.
                <hr />
                <h3>Recapitulando o que você terá acesso:</h3>
              </aside>

              <ul>
                <li>
                  <p>
                    Método completo GPS - Guia de Processos seletivos!{' '}
                    <span>
                      → <s>R$ 597</s>
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    Plano de ação com cronograma{' '}
                    <span>
                      → <s>R$ 97</s>
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    Guia Aplicando para vagas{' '}
                    <span>
                      → <s>R$ 47</s>
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    Guia no notion{' '}
                    <span>
                      → <s>R$ 97</s>
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    Aulas extras{' '}
                    <span>
                      → <s>R$ 149</s>
                    </span>
                  </p>
                </li>

                <li>
                  <h4>BÔNUS POTÊNCIA</h4>
                </li>

                <li>
                  <p>
                    Bônus #01 - E-book Vaga Tech{' '}
                    <span>
                      → <s>R$ 97</s>
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    Bônus #02 - Curso PAD (Perfil Atrativo para Devs){' '}
                    <span>
                      → <s>R$ 197</s>
                    </span>
                  </p>
                </li>

                <li>
                  <p>
                    Bônus #04 - 3 encontros mensais AO VIVO
                    <span>
                      → <s>R$ 349</s>
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    Bônus #05 - Acompanhamento de 8 semanas em grupo VIP{' '}
                    <span>
                      → <s>IMENSURÁVEL</s>
                    </span>
                  </p>
                </li>
              </ul>
            </Pacote>

            <div className="cadastro">
              <aside>
                <p>
                  <strong>Conhecimento significa liberdade,</strong> por isso
                  sei que tudo que você terá acesso valeria mais de R$
                  <s>1.997</s>.
                </p>

                <p>
                  Mas no próximo dia <strong>18/04</strong>, você se tornará meu
                  aluno no GPS e ganhará de presente tudos os bônus potência
                  listados acima.
                </p>

                <p>
                  E tem mais, preparamos um <strong>preço exclusivo</strong>{' '}
                  para os Tech Anners que estiverem decididos a crescer as suas
                  carreiras.
                </p>

                <p>Por isso, somente para a lista VIP…</p>
              </aside>

              <PriceDescriptionVIP>
                <ValorVIP>
                  <p>De R$ 1297 por….</p>
                  <h5>SEGREDO</h5>
                  <p className="total">Revelação apenas para os VIPs &darr;</p>
                  <ButtonYellow onClick={carrinho}>
                    Clique para ser VIP
                  </ButtonYellow>
                </ValorVIP>
              </PriceDescriptionVIP>
            </div>
          </Wrapper>
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
                300+ pessoas acompanhadas em suas carreiras no último ano com a
                Mentoria Tech Path
              </p>
            </figcaption>
          </figure>
        </Autora>

        <Footer>
          <img src="/images/gps/logo-principal-azul.png" alt="Logo GPS" />
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

export default GPSPage;
