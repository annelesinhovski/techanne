import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Container from '../../../components/Container/Container';
import ListCarousel from '../../../components/ListCarousel/ListCarousel';
import { Button } from '../../../components/Button/Button';
import Social from '../../../components/Social/Social';

import {
  PageCadastro,
  Header,
  HeadingH2,
  Publico,
  Headline,
  Hero,
  Beneficios,
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
  Pacote,
  Footer,
} from '../TechPath.styles';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

function Masterclass() {
  const router = useRouter();

  const listaEsperaPage = (e) => {
    e.preventDefault();
    router.push('/techpath/mentoria/lista-de-espera');
  };

  const carrinho = (e) => {
    e.preventDefault();
    router.push('https://go.hotmart.com/B66020103U?dp=1');
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
          content="https://annelesin.com.br/techpath/mentoria/"
        />
        <meta
          property="og:image"
          content="https://annelesin.com.br/images/share-techpath.jpg"
        />
      </Head>
      <PageCadastro>
        <Header>
          <span>Mentoria</span>
          <h1>Tech Path</h1>
        </Header>
        <Container>
          <Hero>
            <Video>
              <iframe
                width="580"
                height="300"
                src="https://www.youtube.com/embed/SuJ7W-VhtZQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Video>
            <Headline>
              <HeadingH2>
                Comece seu caminho para<span>uma carreira tech de sucesso</span>
              </HeadingH2>
              <p>
                <strong>Um programa de mentoria</strong> de 8 semanas para você
                destravar sua carreira como dev.
                <br />
              </p>
              <p>
                <strong>Não fique de fora da próxima turma!</strong>
                <br />
              </p>
              <Button onClick={listaEsperaPage}>Lista de espera</Button>
            </Headline>
          </Hero>

          <Publico>
            <div className="publico">
              <h3>a mentoria tech path É para você que:</h3>
              <aside>
                <p>
                  Deseja <strong>iniciar a sua carreira em TI</strong> mas se
                  sente perdido, inseguro ou quer{' '}
                  <strong>migrar de carreira</strong> e não tem tempo a perder.
                </p>
                <p>
                  <strong>
                    Já está no mercado, mas sabe que pode ser mais!
                  </strong>{' '}
                  Quer evoluir, ter mais resultados e atingir seus objetivos de
                  carreira.
                </p>
              </aside>
            </div>

            <div className="btn-wrapper">
              <Button onClick={listaEsperaPage}>quero fazer parte</Button>
            </div>

            <h4>Leve sua carreira para o próximo nível.</h4>
          </Publico>
        </Container>

        <HeadingH2>
          Como você <span>vai se preparar</span>
        </HeadingH2>

        <Beneficios>
          <ul>
            <li>
              <p>
                <span>9</span>Módulos <small>(50+ aulas)</small>
              </p>
            </li>
            <li>
              <p>
                <small>ENCONTROS</small>AO VIVO
              </p>
            </li>
            <li>
              <p>
                Material <small>de apoio</small>
              </p>
            </li>
            <li>
              <p>
                Comunidade <small>exclusiva</small>
              </p>
            </li>
          </ul>
        </Beneficios>

        <Container>
          <Ementa>
            <Topicos>
              <ListCarousel skills={listaTopicos} />
            </Topicos>
            <div className="btn-wrapper">
              <Button onClick={listaEsperaPage}>Lista de espera</Button>
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
              <Social />
            </figcaption>
          </figure>

          <div className="btn-wrapper">
            <Button onClick={listaEsperaPage}>Lista de espera</Button>
          </div>
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
              <Button onClick={listaEsperaPage}>Lista de espera</Button>
            </div>
          </Container>
        </Depoimentos>

        {/* <Price>
          <HeadingH2>
            E quanto tudo isso <span>vai custar?</span>
          </HeadingH2>
          <Container>
            <PriceDescription>
              <Valor>
                <p>
                  <strike>De: R$ 1190</strike>
                  Por
                </p>
                <h5>
                  <span>R$</span>699<small>,00</small>
                </h5>
              </Valor>
              <Pacote>
                <h6>benefícios exclusivos</h6>
                <ul>
                  <li>
                    <p>8 semanas de mentoria</p>
                  </li>
                  <li>
                    <p>Aulas gravadas e encontros ao vivo</p>{' '}
                    <small>
                      (Os encontros ao vivo serão em grupo e serão gravados para
                      você assistir quando puder).
                    </small>
                  </li>
                  <li>
                    <p>Comunidade exclusiva no Discord</p>
                  </li>
                  <li>
                    <p>Material de apoio</p>
                  </li>
                  <li>
                    <p>Suporte ao longo da mentoria</p>
                  </li>
                  <li>
                    <p>Acesso de 1 ano</p>
                  </li>
                  <li>
                    <p>Pagamento seguro e suporte Hotmart</p>
                  </li>
                  <li>
                    <p>Garantia de 7 dias</p>
                  </li>
                </ul>
              </Pacote>
            </PriceDescription>
            <div className="btn-wrapper">
              <Button onClick={listaEsperaPage}>Lista de espera</Button>
            </div>
          </Container>
        </Price> */}
        <Footer>
          <img
            src="/images/logo-tech-path-horizontal-amarela.svg"
            alt="Logo Tech Path"
          />
          <p>Copyright © Tech Path 2023</p>

          <p>
            Dúvidas e suporte: <br />
            contato@techanne.com.br
          </p>
        </Footer>
      </PageCadastro>
    </>
  );
}

export default Masterclass;
