import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Container from '../../../components/Container/Container';
import ListCarousel from '../../../components/ListCarousel/ListCarousel';

import {
  PageCadastro,
  Header,
  HeadingH2,
  HeadingH3,
  ButtonPink,
  ButtonYellow,
  Headline,
  Ementa,
  Topicos,
  Autora,
  Depoimentos,
  ProvaSocial,
  Video,
  Carousel,
  Price,
  PriceDescription,
  Valor,
  Footer,
  HeroMentoria,
  BulletPoints,
} from '../TechPath.styles';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Wrapper } from '../GPS.styles';

const settings = {
  className: '',
  dots: true,
  infinite: true,
  adaptiveHeight: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const listaTopicos = [
  {
    imgSrc: '/images/icones/coding.svg',
    imgAlt:
      'Ilustração de uma tela com código, e uma mão sob o teclado digitando',
    title: 'Começando do ZERO',
    description:
      'Entenda melhor o mercado tech - áreas de atuação, como se preparar e formas de trabalho (CLT x PJ x Freelancer).',
  },
  {
    imgSrc: '/images/icones/pesquisa.svg',
    imgAlt: 'Ícone de uma lupa',
    title: 'Para quem já está no mercado',
    description:
      'Diagnóstico do seu perfil como profissional de TI para traçar um plano de ação e ir para o próximo nível da sua carreira. ',
  },
  {
    imgSrc: '/images/icones/ux.svg',
    imgAlt: 'Icone com uma pessoa e um balão de fala com um coração dentro',
    title: 'Mapeamento do mercado',
    description: (
      <>
        Aprenda a olhar o mercado de modo estratégico - entenda o que as
        empresas buscam nos profissionais.
      </>
    ),
  },
  {
    imgSrc: '/images/icones/coding.svg',
    imgAlt:
      'Ilustração de uma tela com código, e uma mão sob o teclado digitando',
    title: 'Roadmap de carreira e PDI',
    description:
      'Conheça qual caminho percorrer e defina seus objetivos de carreira em um Plano de Desenvolvimento Individual (PDI).',
  },
  {
    imgSrc: '/images/icones/pesquisa.svg',
    imgAlt: 'Ícone de uma lupa',
    title: 'Branding pessoal',
    description:
      'Use ferramentas a seu favor para se apresentar no mercado da forma correta e  se destacar (Currículo, LinkedIn e GitHub).',
  },
  {
    imgSrc: '/images/icones/ux.svg',
    imgAlt: 'Icone com uma pessoa e um balão de fala com um coração dentro',
    title: 'Processos seletivos',
    description: (
      <>
        Como ocorrem e como me preparar? Abordagem de recrutadores, entrevistas,
        testes técnicos e muito mais.
      </>
    ),
  },
];

function Individual() {
  const router = useRouter();

  const sessaoUnica = (e) => {
    e.preventDefault();
    router.push('https://pay.kiwify.com.br/y1YiaZK');
  };

  const sessaoPacote = (e) => {
    e.preventDefault();
    router.push('https://pay.kiwify.com.br/dO5oF4y');
  };

  const sessaoPacoteSemestral = (e) => {
    e.preventDefault();
    router.push('https://pay.kiwify.com.br/x8i9IJe');
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

  return (
    <>
      <Head>
        <title>Mentoria Tech Path</title>
        <meta
          name="description"
          key="description"
          content="Mentoria Tech Path - Tudo o que você precisa para ter uma carreira de sucesso em tech"
        />
        <meta property="og:title" content="Mentoria Tech Path" />
        <meta
          property="og:description"
          content="Mentoria Tech Path - Tudo o que você precisa para ter uma carreira de sucesso em tech"
        />
        <meta
          property="og:url"
          content="https://annelesin.com.br/techpath/mentoria/individual"
        />
        <meta
          property="og:image"
          content="https://annelesin.com.br/images/share-techanne.jpg"
        />
      </Head>
      <PageCadastro>
        <HeroMentoria>
          <Header>
            <span>Mentoria</span>
            <h1>Tech Path</h1>
          </Header>
          <Headline>
            <Wrapper>
              <HeadingH2>
                <span>Acompanhamento individual</span> para carreiras únicas.
              </HeadingH2>

              <HeadingH3>
                De acordo com as suas necessidades e o seu momento.
              </HeadingH3>

              <p>
                Para quem busca uma primeira ou nova oportunidade (troca de
                emprego), recolocação e transição de carreira.
              </p>

              <ButtonPink onClick={scrollToOffer}>Agende sua sessão</ButtonPink>
            </Wrapper>
          </Headline>
        </HeroMentoria>

        <BulletPoints>
          <Wrapper>
            <HeadingH3>
              Veja como é simples garantir sua vaga para mentoria individual:
            </HeadingH3>

            <ul>
              <li>
                <p>
                  Decida entre fazer apenas uma&nbsp;
                  <span onClick={scrollToOffer}>sessão individual</span> ou
                  adquirir um{' '}
                  <span onClick={scrollToOffer}>pacote de 3 ou 6 meses</span>
                  &nbsp;de acompanhamento (no pacote você tem desconto nas
                  sessões e bônus!).
                </p>
              </li>
              <li>
                <p>
                  Logo após realizar o pagamento, você será redirecionado(a)
                  para uma página de confirmação! Lá você terá acesso ao link da
                  agenda para fazer a reserva do seu horário.
                </p>
              </li>
              <li>
                <p>
                  Caso você tenha dúvidas após a compra, envie uma mensagem para
                  suporte@techanne.com.br e tentaremos encontrar a melhor opção
                  para você!
                </p>
              </li>
            </ul>
          </Wrapper>
        </BulletPoints>

        <HeadingH2>
          Como eu poderei <span>te orientar?</span>
        </HeadingH2>

        <Container>
          <Ementa>
            <Topicos>
              <ListCarousel skills={listaTopicos} />
            </Topicos>
            <div className="btn-wrapper">
              <ButtonYellow onClick={scrollToOffer}>
                Agende sua sessão
              </ButtonYellow>
            </div>
          </Ementa>
        </Container>

        <Autora>
          <figure>
            <img
              src="/images/foto-perfil-2.png"
              alt="Foto de Anne Lesinhovski segurando um notebook e sorrindo"
            />
            <figcaption>
              <span>Anne Lesinhovski</span>
              <h4>O que posso falar sobre mim?</h4>

              <p>
                Hoje sou Software Engineering Manager no iFood e tenho uma
                bagagem de mais de 10 anos de experiência no mercado de
                tecnologia como dev front-end.
              </p>

              <p>
                Tive meu primeiro contato com a programação na época de estágio,
                mas me considero autodidata - já que o meu curso não era da área
                de tecnologia. Ou seja, aprendi tudo na raça e tive que estudar
                por conta. Ralei, mas deu certo!
              </p>

              <p>
                Nos últimos anos, aprendi muitas coisas e sei que apenas estudar
                e aplicar para vagas não é o suficiente para ter uma carreira de
                sucesso em tech. É preciso ir além.{' '}
              </p>
              <p>
                E todo esse aprendizado eu compartilho com você na Mentoria Tech
                Path.
              </p>

              <ButtonYellow onClick={scrollToOffer}>
                Agende sua sessão
              </ButtonYellow>
            </figcaption>
          </figure>
        </Autora>

        <Depoimentos>
          <HeadingH2>
            Será que <span>é para você?</span>
            <small>Veja o que os mentorados anteriores tem a dizer</small>
          </HeadingH2>

          <Container>
            <ProvaSocial>
              <Video>
                <iframe
                  width="480"
                  height="270"
                  src="https://www.youtube.com/embed/5NGkqXILCJ8?controls=0"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </Video>
              <Carousel>
                <Slider {...settings}>
                  <div>
                    <figure>
                      <img
                        src="/images/techpath/depoimentos/ruvila.jpg"
                        alt="Avatar"
                      />
                      <figcaption>
                        <p>
                          Rúvila Magalhães Avelino{' '}
                          <small>Software engineer @ Creditas </small>
                        </p>
                      </figcaption>
                    </figure>
                    <aside>
                      “A mentoria foi uma experiência sensacional e agregou
                      muito conteúdo para todo o grupo. Foi excelente conversar
                      com pessoas de diferentes áreas e sair da minha bolha. A
                      Anne tem uma metodologia muito legal que faz todo mundo
                      repensar a própria carreira de forma muito mais
                      estratégica! Estou saindo dessa experiência muito mais
                      focada, decidida, confiante e protagonista da minha
                      própria carreira.”
                    </aside>
                  </div>
                  <div>
                    <figure>
                      <img
                        src="/images/techpath/depoimentos/victoria.jpg"
                        alt="Avatar"
                      />
                      <figcaption>
                        <p>
                          Victória César <small>Front-End Developer</small>
                        </p>
                      </figcaption>
                    </figure>
                    <aside>
                      “A mentoria carreira de dev impactou muito na forma como
                      penso sobre mim mesma, me deu mais confiança para saber
                      que sim, é possível! Que com organização semestral podemos
                      atingir coisas que muitas vezes ficariam no papel.
                      Agradeço muito a Anne pela oportunidade e por mostrar
                      formas de mapear nossas habilidades e também o mercado de
                      tecnologia, porque fazendo isso podemos focar e trabalhar
                      nos pontos de melhorias para atingir nossas metas e subir
                      o próximo degrau da carreira.”
                    </aside>
                  </div>
                  <div>
                    <figure>
                      <img
                        src="/images/techpath/depoimentos/matheus.jpg"
                        alt="Avatar"
                      />
                      <figcaption>
                        <p>
                          Matheus de Farias Cavalcanti Santos{' '}
                          <small>Software Engineer at CESAR</small>
                        </p>
                      </figcaption>
                    </figure>
                    <aside>
                      “A Mentoria Carreira de Dev, para mim, foi uma excelente
                      oportunidade de crescimento pessoal e profissional.
                      Durante a mentoria, a Anne nos ajuda a entender onde
                      estamos, onde queremos chegar e o que é preciso fazer para
                      alcançar nossos objetivos. Ela nos mostra como analisar o
                      mercado e entender quais requisitos o mercado está
                      pedindo, nos ajuda a entender onde nós nos encontramos
                      diante de tantos requisitos presentes nas vagas e nos
                      orienta em como atender tais requisitos e conseguir a vaga
                      desejada. Além disso, a Anne é uma profissional super
                      solícita e acessível com uma vontade muito grande em
                      ajudar pessoas à ingressarem na área de tecnologia. Vale
                      muito a pena fazer a Mentoria Carreira de Dev!!!”
                    </aside>
                  </div>
                  <div>
                    <figure>
                      <img
                        src="/images/techpath/depoimentos/jessica.jpg"
                        alt="Avatar"
                      />
                      <figcaption>
                        <p>
                          Jessica Camargos{' '}
                          <small>Software Engineer | Back-end</small>
                        </p>
                      </figcaption>
                    </figure>
                    <aside>
                      “Do início da Mentoria para o final, eu tive uma virada de
                      chave muito grande na minha vida profissional, e a
                      mentoria me ajudou a ver meu melhor. Pontuar meus pontos
                      positivos foi difícil mas foi incrível. Seguir os
                      conselhos, ter mais auto confiança, saber que não sou
                      obrigada a saber tudo e que está tudo bem.”
                    </aside>
                  </div>
                  <div>
                    <figure>
                      <img
                        src="/images/techpath/depoimentos/victor.jpg"
                        alt="Avatar"
                      />
                      <figcaption>
                        <p>
                          Victor Hugo Faria Vanelli <small>Desenvolvedor</small>
                        </p>
                      </figcaption>
                    </figure>
                    <aside>
                      “Depois da mentoria parei da fazer as coisas por "achismo"
                      e comecei a ter uma método de carreira a ser seguido! Foi
                      espetacular participar desta mentoria!”
                    </aside>
                  </div>
                  <div>
                    <figure>
                      <img
                        src="/images/techpath/depoimentos/huann.jpg"
                        alt="Avatar"
                      />
                      <figcaption>
                        <p>
                          Huann Almeida <small>Migrando para dev </small>
                        </p>
                      </figcaption>
                    </figure>
                    <aside>
                      “Pra mim veio no melhor momento da minha carreira Dev.
                      Ainda estou bem no início e estava bem perdido, com muito
                      receio, sem saber o rumo que tomar, até porque são muitos
                      caminhos que podemos escolher dentro da carreira de
                      desenvolvedor. Durante os encontros, me senti super a
                      vontade, num clima de "hora do cafezinho" 😁. Mas além
                      desse aspecto, pude absorver muita informação relevante,
                      escutar a Anne fez abrir muito os meus olhos pra onde eu
                      devo focar, o que me deu muita segurança! Desde a primeira
                      aula eu pude perceber que ia dar muito certo e em um mês
                      deu. Hoje eu tenho a sensação que vou dominar o mercado!
                      😁 Comecei como um newbie na área e hoje já estou fazendo
                      uma network pra migrar de setor dentro da empresa que
                      estou (como assistente de vendas), o que consegui fomentar
                      e amadurecer durante a mentoria. Fora isso, hoje eu sei
                      muito mais do mercado, da carreira em si. Me sinto muito
                      feliz por ter feito parte do primeiro time e os resultados
                      estão por vir.”
                    </aside>
                  </div>

                  <div>
                    <figure>
                      <img
                        src="/images/techpath/depoimentos/cintia.jpg"
                        alt="Avatar"
                      />
                      <figcaption>
                        <p>
                          Cintia Schutt{' '}
                          <small>Junior Software Developer (Canadá)</small>
                        </p>
                      </figcaption>
                    </figure>
                    <aside>
                      “A mentoria da Anne foi excelente. Tivemos acesso a um
                      material preparado com muito cuidado, ela foi capaz de
                      transmitir todo seu conhecimento de mercado de uma forma
                      didatica. Eu me sentia bombardeada de tanta informacao e
                      nao sabia por onde comecar a planejar minha carreira, a
                      mentoria me ajudou a entender as possibilidades, me
                      mostrou ferramentas pra me ajudarem nesse processo e
                      melhor ainda, trouxe muitas pessoas de diferente lugares
                      trocando experiencia, pessoas que estao em diferentes
                      momentos e que fizeram me sentir nao tao sozinha nesse
                      percurso. Eu indico demais a mentoria, se quer comecar a
                      planejar tua carreira, saber por onde comecar, quais as
                      tuas opcoes, como se preparar pra subir de nivel e muito
                      mais, nem perde tempo e se increve na proxima turma :)
                      Anne tu e show!”
                    </aside>
                  </div>

                  <div>
                    <figure>
                      <img
                        src="/images/techpath/depoimentos/filipe.jpg"
                        alt="Avatar"
                      />
                      <figcaption>
                        <p>
                          Filipe Tiago Martins Antunes{' '}
                          <small>Front-end Developer</small>
                        </p>
                      </figcaption>
                    </figure>
                    <aside>
                      “A Mentoria Carreira de Dev me trouxe a consciência de que
                      eu sou responsável pela minha carreira, que eu possuo as
                      ferramentas para me planejar e me preparar e que eu sou
                      capaz de chegar muito longe. Agora eu sei como definir
                      objetivos e metas para poder me planejar, sei como me
                      preparar para os próximos desafios e sei quais os próximos
                      desafios da jornada. A Anne me trouxe a noção que uma
                      carreira é feita por um ser humano, com forças e desafios,
                      e que com planejamento e as ferramentas corretas, posso
                      chegar longe!”
                    </aside>
                  </div>
                </Slider>
              </Carousel>
            </ProvaSocial>
            <div className="btn-wrapper">
              <ButtonYellow onClick={scrollToOffer}>
                Agende sua sessão
              </ButtonYellow>
            </div>
          </Container>
        </Depoimentos>

        <Price id="oferta">
          <HeadingH2>
            Qual o valor do <span>acompanhamento?</span>
          </HeadingH2>
          <Container>
            <PriceDescription>
              <Valor>
                <p>Sessão única</p>
                <h5>
                  <span>R$ &nbsp;</span> 169<small>,00</small>
                </h5>
                <ButtonPink onClick={sessaoUnica}>Garanta sua vaga</ButtonPink>
              </Valor>
              <Valor>
                <p>Pacote 3 sessões</p>
                <h5>
                  <span>R$</span>399<small>,00</small>
                </h5>
                <ButtonPink onClick={sessaoPacote}>Garanta sua vaga</ButtonPink>
                <small className="bonus">
                  Ganhe planner + template de PDI no Notion
                </small>
              </Valor>
              <Valor>
                <p>Pacote 6 sessões</p>
                <h5>
                  <span>R$</span>797<small>,00</small>
                </h5>
                <ButtonPink onClick={sessaoPacoteSemestral}>
                  Garanta sua vaga
                </ButtonPink>
                <small className="bonus">
                  Ganhe acesso a todos os meus cursos!
                </small>
              </Valor>
            </PriceDescription>
          </Container>
        </Price>
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
      </PageCadastro>
    </>
  );
}

export default Individual;
