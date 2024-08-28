import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Container from '../../../components/Container/Container';
import ListCarousel from '../../../components/ListCarousel/ListCarousel';
import AccordionContainer from '../../../components/Accordion/Accordion';

import {
  ButtonYellow,
  ButtonPink,
  PageGPS,
  HeaderGPS,
  HeadingH2,
  HeroGPS,
  Publico,
  DevPerdido,
  BoxInfo,
  HeadlineListaVIP,
  BulletPoints,
  Conexao,
  Ementa,
  Topicos,
  Objetivos,
  Autora,
  Hacks,
  SobreGPS,
  Depoimentos,
  ProvaSocial,
  Bonus,
  Video,
  Price,
  PriceDescriptionVIP,
  ValorVIP,
  Pacote,
  Garantia,
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
    router.push('https://pay.kiwify.com.br/8gPBi7t');
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
          <p>Roadmap completo para processos seletivos na área de T.I.</p>
        </HeaderGPS>

        <Sticky className={buttonClass}>
          <aside>
            {id == 'oferta' ? (
              <p>Clique e ganhe 3 sessões de mentoria AO VIVO!</p>
            ) : (
              <p>Faça sua matrícula com R$200 de desconto!</p>
            )}

            <button onClick={carrinho}>Clique aqui</button>
          </aside>
        </Sticky>

        <HeroGPS>
          <Wrapper className="flex">
            <HeadlineListaVIP>
              <h2>Seja aprovado(a) em vagas para trabalhar com programação</h2>
              {id == 'oferta' ? (
                <ul>
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
                      Acesse o preparatório para esteira de entrevistas: do RH
                      às avaliações técnicas.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>
                        Somente nesta página ganhe 3 sessões de mentoria AO VIVO
                        e um programa de aceleração de 8 semanas
                      </strong>
                    </p>
                  </li>
                </ul>
              ) : (
                <ul>
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
                      Acesse o preparatório para esteira de entrevistas: do RH
                      às avaliações técnicas.
                    </p>
                  </li>
                </ul>
              )}

              <ButtonPink onClick={scrollToOffer}>QUERO O GPS!</ButtonPink>
            </HeadlineListaVIP>
            <Video>
              <iframe
                id="panda-5017d7de-80b9-457a-8901-06c507938c91"
                src="https://player-vz-b15dee16-54e.tv.pandavideo.com.br/embed/?v=5017d7de-80b9-457a-8901-06c507938c91"
                allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
                allowFullScreen={true}
                width="100%"
                height="100%"
                fetchpriority="high"
              />
            </Video>
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
                  TI e <strong>acelerar a sua aprovação</strong>
                  para sua vaga dos sonhos.
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

        <Autora>
          <figure>
            <img
              src="/images/foto-perfil-2.png"
              alt="Foto de Anne Lesinhovski segurando um notebook e sorrindo"
              className="foto-margin"
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
                300+ pessoas acompanhadas em suas carreiras no último ano com o
                Tech Path (mentoria e cursos).
              </p>
            </figcaption>
          </figure>
        </Autora>

        <Hacks>
          <Wrapper>
            <h3>
              Alguns dos hacks que você vai aprender para desbloquear sua vagas
              dos sonhos no mercado de TI:
            </h3>
            <figure>
              {/* <img src="/images/icones/coding.svg" alt="" /> */}
              <figcaption>
                <p>
                  🤯 Porque você NÃO deve estudar exaustivamente para só depois
                  aplicar para vagas{' '}
                </p>
              </figcaption>
            </figure>
            <figure>
              {/* <img src="/images/icones/coding.svg" alt="" /> */}
              <figcaption>
                <p>
                  🧲 Construa um LinkedIn que vai atrair recruiters hoje mesmo
                  com as skills que você tem (e aprenda a evoluí-las com o
                  tempo)
                </p>
              </figcaption>
            </figure>
            <figure>
              {/* <img src="/images/icones/coding.svg" alt="" /> */}
              <figcaption>
                <p>
                  ⚖️ Aplique o método O.P.A para montar um plano de ação de
                  transição de carreira que se encaixa na sua realidade
                </p>
              </figcaption>
            </figure>
            <figure>
              {/* <img src="/images/icones/coding.svg" alt="" /> */}
              <figcaption>
                <p>
                  🔑 Use ferramentas disponíveis no mercado para construir um
                  perfil atrativo - LinkedIn, GitHub, Portfólio, Currículo
                </p>
              </figcaption>
            </figure>
            <figure>
              {/* <img src="/images/icones/coding.svg" alt="" /> */}
              <figcaption>
                <p>
                  🧑‍💻 A prática leva à... sua vaga dos sonhos! Não precisa ser
                  perfeito. Você tem que praticar com foco para chegar nas
                  entrevistas técnicas e mostrar o seu melhor.
                </p>
              </figcaption>
            </figure>
          </Wrapper>
        </Hacks>

        <SobreGPS>
          <Wrapper>
            <HeadingH2>Um pouco mais sobre o GPS!</HeadingH2>
            <figure>
              <img
                src="/images/gps/sobre-gps.png"
                alt="Imagem ilustrativa de GPS"
              />
              <figcaption>
                <ul>
                  <li>
                    <strong>Aulas gravadas</strong> divididas em 3 módulos
                    principais - Organizar, Preparar e Agir (método O.P.A.)
                  </li>
                  <li>
                    <strong>Plano de ação</strong> que te trará clareza de todo
                    o processo até conquistar a sua vaga (com sugestão de
                    cronograma!)
                  </li>
                  <li>
                    <strong>Guia Aplicando para vagas</strong>: onde encontrar
                    vagas, abordagem com recruiters e como definir seu valor no
                    mercado (pretensão salarial).
                  </li>
                  <li>
                    Tudo sobre <strong>processos seletivos na PRÁTICA</strong>:
                    quais são as etapas, tipos de avaliação técnica (desafios,
                    live coding e entrevistas), o que fazer depois das
                    entrevistas e feedbacks
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
              </figcaption>
            </figure>
          </Wrapper>
        </SobreGPS>

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

        <Bonus>
          <Wrapper>
            <h3>
              E para ficar melhor ainda, além do método completo, vou te
              entregar 5 bônus incríveis para acelerar seu processo:
            </h3>
            <ul>
              <li>
                <h4>Bônus #01</h4>
                <figure>
                  <img src="/images/gps/bonus/vaga-tech.jpg" />
                  <figcaption>
                    <p>
                      <strong>E-book | Vaga Tech</strong> - Guia com hacks para
                      ficar mais próximo da sua vaga para trabalhar com
                      programação.
                    </p>
                    <p>
                      Valor: <s>R$ 97,00</s> &rarr;{' '}
                      <span className="price">Nessa oferta: Grátis!</span>
                    </p>
                  </figcaption>
                </figure>
              </li>
              <li>
                <h4>Bônus #02</h4>
                <figure>
                  <img src="/images/gps/bonus/perfil-atrativo.jpg" />
                  <figcaption>
                    <p>
                      <strong>Curso | Perfil atrativo para devs</strong> -
                      Aprenda a ter um perfil que é desejado por recrutadores de
                      vagas de T.I. (LinkedIn, GitHub, portfólio, currículo e
                      mais!)
                    </p>
                    <p>
                      Valor: <s>R$ 197,00</s> &rarr;{' '}
                      <span className="price">Nessa oferta: Grátis!</span>
                    </p>
                  </figcaption>
                </figure>
              </li>
              <li>
                <h4>Bônus #03</h4>
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
                <h4>Bônus #04</h4>
                <figure>
                  <img src="/images/gps/bonus/aulas-extras.jpg" />
                  <figcaption>
                    <p>
                      <strong>Aulas Extras</strong> - Hackeando o LinkedIn,
                      Portfólio no GitHub Pages, Workshop Vaga Tech e mais...
                    </p>
                    <p>
                      Valor: <s>R$ 97,00</s> &rarr;{' '}
                      <span className="price">Nessa oferta: Grátis!</span>
                      <br />
                      <br />
                      <br />
                    </p>
                  </figcaption>
                </figure>
              </li>
              <li>
                <h4>Bônus #05</h4>
                <figure>
                  <img src="/images/gps/bonus/comunidade.jpg" />
                  <figcaption>
                    <p>
                      <strong>Grupo VIP no WhatsApp</strong> - Para você
                      aumentar seu networking e trocar experiências com outros
                      alunos.
                    </p>
                    <p>
                      Valor: <s>R$ 49,00/mês</s> &rarr;{' '}
                      <span className="price">Nessa oferta: Grátis!</span>
                    </p>
                  </figcaption>
                </figure>
              </li>
            </ul>
          </Wrapper>
        </Bonus>

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

              {id == 'oferta' ? (
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
                      Bônus #03 - 3 encontros mensais AO VIVO
                      <span>
                        → <s>R$ 349</s>
                      </span>
                    </p>
                  </li>
                  <li>
                    <p>
                      Bônus #04 - Acompanhamento em grupo VIP{' '}
                      <span>
                        → <s>IMENSURÁVEL</s>
                      </span>
                    </p>
                  </li>
                </ul>
              ) : (
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
                      Bônus #03 - Acompanhamento em grupo VIP{' '}
                      <span>
                        → <s>IMENSURÁVEL</s>
                      </span>
                    </p>
                  </li>
                </ul>
              )}
            </Pacote>

            <div className="cadastro">
              <aside>
                <p>
                  <strong>Conhecimento significa liberdade,</strong> por isso
                  sei que tudo que você terá acesso valeria mais de R$
                  <s>1.197</s>.
                </p>

                <p>
                  Mas <strong>somente nesta página</strong>, você tem a
                  oportunidade de se tornar meu aluno no GPS e ganhar de
                  presente tudos os bônus potência listados acima.
                </p>

                <p>
                  E tem mais, preparamos um <strong>preço exclusivo</strong>{' '}
                  para os Tech Anners que estiverem decididos a crescer as suas
                  carreiras.
                </p>

                <p>Por isso, somente por tempo limitado…</p>
              </aside>

              <PriceDescriptionVIP>
                <ValorVIP>
                  <p>De R$ 1297 por….</p>
                  <h5>12x R$ 39,86</h5>
                  <p className="total">Oferta por tempo limitado &darr;</p>
                  <ButtonYellow onClick={carrinho}>
                    Garanta sua vaga
                  </ButtonYellow>
                </ValorVIP>
              </PriceDescriptionVIP>
            </div>
          </Wrapper>
        </Price>

        <Garantia>
          <Wrapper>
            <HeadingH2>
              Ainda em <span>dúvida?</span>
            </HeadingH2>
            <p>
              Se após <strong>7 dias</strong> você experimentar o conteúdo do
              GPS - Guia de Processos Seletivos! e ainda achar que ele não faz
              sentido para você, basta enviar um pedido para a minha equipe e
              você terá um <em>reembolso do valor integral</em>, sem
              questionamentos.
            </p>
          </Wrapper>
        </Garantia>

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
