import React from 'react';
import Head from 'next/head';
import Page from '../../components/PageDefault/PageDefault';
import Container from '../../components/Container/Container';
import ListCarousel from '../../components/ListCarousel/ListCarousel';
import {
  Chamada,
  Formacao,
  ListaFormacao,
  FotoPerfil,
  Apresentacao,
  Skills,
} from './Home.styles';

const listaSkills = [
  {
    imgSrc: '/images/icones/coding.svg',
    imgAlt:
      'Ilustração de uma tela com código, e uma mão sob o teclado digitando',
    title: 'Desenvolvimento front-end',
    description:
      'Algumas palavras-chave que fazem parte da minha rotina como desenvolvedora front-end: HTML, CSS, JavaScript, React, Next.js, Testing Library, consumo de APIs, Node.js, GIT.',
  },
  {
    imgSrc: '/images/icones/webdesign.svg',
    imgAlt:
      'Icone de um layout de uma página representado em uma tela de um navegador',
    title: 'Web Design',
    description:
      'Transformo qualquer layout em uma página, ou aplicação, da web. Prezo pelas melhores práticas para que essas performem bem nos navegadores, sem esquecer da experiência mobile.',
  },
  {
    imgSrc: '/images/icones/acessibilidade.svg',
    imgAlt:
      'Icone universal de acessibilidade - um círculo com uma figura humana no centro',
    title: 'Acessibilidade',
    description:
      'Desenho e desenvolvo aplicações seguindo diretrizes de acessibilidade, como a WCAG, tanto no design quanto no código, garantindo que essas possam ser utilizadas por todos.',
  },
  {
    imgSrc: '/images/icones/ux.svg',
    imgAlt: 'Icone com uma pessoa e um balão de fala com um coração dentro',
    title: 'Experiência do usuário',
    description:
      'Meu objetivo é garantir que, ao acessar a aplicação que desenvolvo, o usuário tenha uma boa experiência, desde o carregamento rápido ou um layout fácil de usar.',
  },
  {
    imgSrc: '/images/icones/dashboard.svg',
    imgAlt: 'Ícone com um dashboard com gráficos e dados em uma tela',
    title: 'Experimentos e métricas',
    description:
      'Insights obtidos com o uso de ferramentas como Google Analytics, Google Optimize (testes A/B) e Hotjar para análise, tomada de decisões e melhoria contínua das aplicações desenvolvidas.',
  },
  {
    imgSrc: '/images/icones/pesquisa.svg',
    imgAlt: 'Ícone de uma lupa',
    title: 'Pesquisa',
    description:
      'Assim como na área acadêmica, gosto de aplicar pesquisas com o usuário e combinar os resultados com as métricas obtidas de testes/experimentos mencionados anteriormente.',
  },
];

function HomePage() {
  return (
    <>
      <Head>
        <meta
          name="description"
          key="description"
          content="Anne Lesinhovski | Liderança tech e mentoria de carreira em TI."
        />
        <meta
          property="og:title"
          key="og:title"
          content="Anne Lesinhovski | Liderança tech e mentoria de carreira em TI."
        />
        <meta
          property="og:description"
          key="og:description"
          content="Anne Lesinhovski | Liderança tech e mentoria de carreira em TI."
        />
        <meta
          property="og:url"
          key="og:url"
          content="https://techanne.com.br/"
        />
        <meta
          property="og:image"
          key="og:image"
          content="https://techanne.com.br/images/foto-perfil-2.png"
        />
      </Head>

      <Page>
        <Chamada>
          <Container>
            <h2>
              <span>Olá, eu sou a Anne!</span>
              Líder tech, creator e mentora de carreira em TI.
            </h2>
            <Formacao>
              <ListaFormacao>
                <li>
                  <figure>
                    <svg>
                      <path d="M29.4155 8.48707C29.7663 8.34482 30.0004 7.96587 30 7.54112C29.9995 7.11638 29.7646 6.73809 29.4135 6.59678L15.2924 0.912745C15.1032 0.83654 14.8968 0.83654 14.7076 0.912745L0.586524 6.59678C0.23543 6.73803 0.000469452 7.11638 7.02365e-07 7.54112C-0.000468048 7.96587 0.233731 8.34482 0.584532 8.48707L6.17842 10.7558V17.2966C6.17842 18.3761 7.16555 19.289 9.11238 20.0099C10.8093 20.6383 12.9003 20.9843 15.0001 20.9843C17.0998 20.9843 19.1907 20.6383 20.8877 20.0099C22.8346 19.289 23.8217 18.3762 23.8217 17.2966V10.7558L26.1313 9.81912V18.8825C25.1042 19.2968 24.3662 20.4151 24.3662 21.7269C24.3662 23.0387 25.1042 24.1571 26.1313 24.5714V28.4007C26.1313 28.9544 26.5248 29.4034 27.0102 29.4034C27.4956 29.4034 27.8891 28.9544 27.8891 28.4007V24.5714C28.9162 24.1571 29.6542 23.0388 29.6542 21.7269C29.6542 20.4151 28.9162 19.2968 27.8891 18.8825V9.10614L29.4155 8.48707ZM27.0101 22.7379C26.5215 22.7379 26.1239 22.2843 26.1239 21.7268C26.1239 21.1693 26.5215 20.7158 27.0101 20.7158C27.4988 20.7158 27.8964 21.1693 27.8964 21.7268C27.8964 22.2843 27.4988 22.7379 27.0101 22.7379ZM15 2.92155L26.4884 7.54594L15 12.2053L3.51158 7.54587L15 2.92155ZM22.0638 17.1454C21.8954 17.3392 21.2923 17.8032 19.9312 18.2461C18.4792 18.7187 16.7279 18.9789 15 18.9789C13.2721 18.9789 11.5208 18.7187 10.0688 18.2461C8.70768 17.8032 8.10463 17.3392 7.93617 17.1454V11.4688L14.7056 14.2143C14.8008 14.2529 14.9004 14.2722 14.9999 14.2722C15.0996 14.2722 15.1991 14.2529 15.2943 14.2143L22.0637 11.4688L22.0638 17.1454Z" />
                    </svg>
                    <figcaption>
                      <p>Bacharel em Design</p>
                    </figcaption>
                  </figure>
                </li>
                <li>
                  <figure>
                    <svg>
                      <path d="M27.8598 11.2211C27.7384 10.3091 27.7213 8.73836 28.5684 8.21093C28.5835 8.20126 28.5948 8.18729 28.6081 8.1753C29.3006 7.9538 29.7798 7.64295 29.4036 7.22466L19.188 4.14658L2.64652 6.44636C2.64652 6.44636 0.752318 6.7171 0.921532 9.65999C1.01339 11.2617 1.51575 12.0483 1.95508 12.4355L0.597699 12.8445C0.220953 13.2628 0.700122 13.5738 1.39273 13.7949C1.40589 13.8073 1.417 13.8211 1.43239 13.8308C2.27891 14.3587 2.26261 15.9292 2.14085 16.8414C-0.900242 17.7049 0.191407 17.9863 0.191407 17.9863L0.858502 18.1477C0.389271 18.5717 -0.0767374 19.3758 0.0105551 20.9008C0.179858 23.8432 1.73573 24.0462 1.73573 24.0462L12.5604 27.5646L28.8989 23.6072C28.8989 23.6072 29.9909 23.3253 26.949 22.4617C26.8267 21.551 26.8096 19.9806 27.6581 19.4514C27.6737 19.442 27.6851 19.4277 27.6977 19.4159C28.3903 19.1944 28.8691 18.8838 28.4928 18.4656L27.7827 18.2511C28.2563 17.9655 28.9677 17.2191 29.0792 15.2802C29.1561 13.9466 28.8082 13.1655 28.4054 12.7057L29.8091 12.366C29.8092 12.3665 30.9012 12.0847 27.8598 11.2211ZM14.1936 11.1834L16.9411 10.6187L26.2262 8.7106L27.6095 8.42607C27.1675 9.23508 27.186 10.3422 27.2592 11.0538C27.2752 11.2148 27.2937 11.3618 27.3116 11.4735L25.7974 11.85L14.0781 14.7654L14.1936 11.1834ZM2.39136 14.0468L3.77452 14.3314L12.6915 16.1644L13.4705 16.324L15.8067 16.8041L15.9219 20.3863L3.87695 17.3896L2.6895 17.0945C2.70696 16.9826 2.7254 16.8357 2.74214 16.6743C2.81484 15.9633 2.83373 14.8558 2.39136 14.0468ZM1.854 9.51835C1.83725 8.73558 1.97674 8.16948 2.25868 7.88173C2.43809 7.69801 2.64984 7.65978 2.79505 7.65978C2.87178 7.65978 2.92702 7.67043 2.93078 7.67043L10.0581 9.99403L13.614 11.1534L13.4973 14.7605L3.5216 11.9637L2.99516 11.8163C2.97582 11.8108 2.94958 11.807 2.92935 11.8061C2.88826 11.8032 1.90198 11.7124 1.854 9.51835ZM12.5861 26.0018L2.08427 23.0575C2.06484 23.0519 2.03888 23.0481 2.01864 23.0471C1.97683 23.0444 0.990112 22.9537 0.942392 20.7602C0.925381 19.9764 1.06559 19.4108 1.34698 19.1228C1.52685 18.9391 1.73868 18.9009 1.88363 18.9009C1.96054 18.9009 2.0156 18.9112 2.01963 18.9112C2.01963 18.9112 2.02008 18.9112 2.01963 18.9112L12.7021 22.3946L12.5861 26.0018ZM26.3475 22.2946C26.3641 22.4561 26.3825 22.6029 26.4004 22.7148L13.1667 26.0069L13.2823 22.4248L16.1116 21.8431L16.5294 21.9442L18.0955 21.4352L25.3145 19.9518L26.6984 19.6671C26.2559 20.476 26.2743 21.5836 26.3475 22.2946ZM27.0764 17.4264C27.0524 17.4269 27.0283 17.4301 27.0056 17.4373L26.0075 17.7167L16.504 20.3815L16.3878 16.7744L19.5058 15.7574L27.0557 13.2952C27.0567 13.2948 27.4528 13.2068 27.7436 13.5025C28.0251 13.7902 28.1648 14.3563 28.1483 15.1391C28.0991 17.3325 27.1124 17.4236 27.0764 17.4264Z" />
                    </svg>
                    <figcaption>
                      <p>Mestre em Tecnologia</p>
                    </figcaption>
                  </figure>
                </li>
                <li>
                  <figure>
                    <svg>
                      <path d="M25.7787 4.82471C24.3293 3.25266 22.3405 2.38684 20.1782 2.38684C18.5619 2.38684 17.0817 2.89783 15.7786 3.90549C15.1211 4.41412 14.5253 5.03641 14 5.76273C13.4749 5.03662 12.8789 4.41412 12.2212 3.90549C10.9183 2.89783 9.43808 2.38684 7.82181 2.38684C5.65952 2.38684 3.67047 3.25266 2.22104 4.82471C0.78891 6.37839 0 8.50095 0 10.8017C0 13.1697 0.882477 15.3373 2.7771 17.6235C4.47198 19.6685 6.90793 21.7445 9.72882 24.1484C10.692 24.9694 11.7839 25.8999 12.9176 26.8911C13.2171 27.1534 13.6014 27.2979 14 27.2979C14.3984 27.2979 14.7829 27.1534 15.082 26.8915C16.2157 25.9001 17.3082 24.9691 18.2718 24.1478C21.0923 21.7443 23.5282 19.6685 25.2231 17.6233C27.1177 15.3373 28 13.1697 28 10.8015C28 8.50095 27.2111 6.37839 25.7787 4.82471Z" />
                    </svg>
                    <figcaption>
                      <p>
                        Entusiasta de Experiência do usuário, Inovação e
                        Marketing.
                      </p>
                    </figcaption>
                  </figure>
                </li>
              </ListaFormacao>
            </Formacao>
            <FotoPerfil>
              <img
                src="/images/foto-perfil-2.png"
                alt="Foto de Anne Lesinnhovski, sorrindo e posando sentada em uma mesa com um computador na sua frente."
              />
            </FotoPerfil>
          </Container>
        </Chamada>
        <Apresentacao>
          <Container>
            <p>
              Sou líder tech e, hoje, moro em Curitiba/PR - Brasil trabalhando
              de forma remota para a maior foodtech da América Latina. Passei os
              últimos 12 anos atuando nos mais diferentes ambientes: de agências
              com grandes clientes a freelancer para pequenos negócios, atuei no
              setor financeiro e hoje sou Software Engineering Manager no iFood.
            </p>

            <p>
              Nesse período, utilizei as mais diferentes tecnologias e acredito
              que, antes de mais nada, sou uma solucionadora de problemas - e
              uso o meu conhecimento para isso. :)
            </p>

            <p>
              Sou curiosa que chega a doer! Já participei de hackatons e outros
              eventos na área de inovação tecnológica, fiz um mestrado em
              Tecnologia e trabalhei um ano como bolsista pesquisadora.
            </p>

            <p>
              Veja em detalhes a minha trajetória profissional{' '}
              <a
                href="https://www.linkedin.com/in/anne-lesinhovski/"
                target="_blank"
                rel="noreferrer"
              >
                na minha página do Linkedin
              </a>
              .
            </p>

            <p>
              Em meio ao contexto de pandemia desbloqueei minha skin creator e a
              minha paixão por mentorar pessoas que queiram começar ou evoluir
              sua carreira em tecnologia.
            </p>
            <p>
              Conheça meu projeto no Instagram -&nbsp;
              <a
                href="https://www.instagram.com/tech.anne/"
                target="_blank"
                rel="noreferrer"
              >
                @tech.anne
              </a>{' '}
              , e minha mentoria de carreira - &nbsp;
              <a href="/techpath/mentoria/" target="_blank" rel="noreferrer">
                Mentoria Tech Path
              </a>
              .
            </p>
          </Container>
        </Apresentacao>
        <Skills>
          <Container>
            <h3>O que mais gosto de fazer</h3>
            <ListCarousel skills={listaSkills} />
          </Container>
        </Skills>
      </Page>
    </>
  );
}

export default HomePage;
