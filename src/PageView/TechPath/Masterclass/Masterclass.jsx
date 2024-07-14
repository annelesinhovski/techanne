import React, { useState } from 'react';
import Head from 'next/head';
import Container from '../../../components/Container/Container';
import ListCarousel from '../../../components/ListCarousel/ListCarousel';
import {
  PageCadastro,
  Header,
  Slogan,
  HeadingH2,
  Cadastro,
  Chamada,
  Data,
  Formulario,
  Ementa,
  Topicos,
  Autora,
} from '../TechPath.styles';
import Social from '../../../components/Social/Social';

const listaTopicos = [
  {
    imgSrc: '/images/icones/coding.svg',
    imgAlt:
      'Ilustração de uma tela com código, e uma mão sob o teclado digitando',
    title: 'O que é preciso para começar?',
    description:
      'Saiba se você tem o perfil e o que as empresas estão buscando dos profissionais.',
  },
  {
    imgSrc: '/images/icones/pesquisa.svg',
    imgAlt: 'Ícone de uma lupa',
    title: 'Processos seletivos',
    description:
      'Como são os processos seletivos para entrar na área de TI e como você pode se preparar da melhor forma.',
  },
  {
    imgSrc: '/images/icones/ux.svg',
    imgAlt: 'Icone com uma pessoa e um balão de fala com um coração dentro',
    title: 'Branding pessoal',
    description: (
      <>
        Quais são as <strong>ferramentas</strong> que você pode usar a seu favor
        para se apresentar no mercado da forma correta e se{' '}
        <strong>destacar</strong>.
      </>
    ),
  },
];

function Masterclass() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  function validateEmail(em) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(em).toLowerCase());
  }

  const validateForm = () => {
    if (nome.length < 3 || !validateEmail(email)) {
      return false;
    }

    return true;
  };

  return (
    <>
      <Head>
        <title>Masterclass Tech Path</title>
        <meta
          name="description"
          key="description"
          content="Masterclass Tech Path - Tudo o que você precisa para ter uma carreira de sucesso em tech"
        />
        <meta property="og:title" content="Masterclass Tech Path" />
        <meta
          property="og:description"
          content="Masterclass Tech Path - Tudo o que você precisa para ter uma carreira de sucesso em tech"
        />
        <meta
          property="og:url"
          content="https://techanne.com.br/techpath/masterclass/"
        />
        <meta
          property="og:image"
          content="https://techanne.com.br/images/share-techanne.jpg"
        />
      </Head>
      <PageCadastro>
        <Header>
          <span>Masterclass</span>
          <h1>Tech Path</h1>
          <Slogan>
            <strong>7 de Fevereiro - 20 horas</strong>Ao vivo, online e gratuito
          </Slogan>
        </Header>
        <Container>
          <Cadastro>
            <Chamada>
              <HeadingH2>
                Destrave sua <span>carreira em tech</span>
              </HeadingH2>
              <p>
                Uma aula para você aprender{' '}
                <strong>tudo o que você precisa</strong> para ter uma{' '}
                <strong>carreira de sucesso</strong> no mercado de tecnologia!
              </p>
            </Chamada>
            <Formulario>
              <div id="mc_embed_signup">
                <form
                  onSubmit={() => {
                    setIsSubmitting(true);
                  }}
                  action="https://annelesin.us5.list-manage.com/subscribe/post?u=3c3129431c3be45e7e6a22909&amp;id=350c42b051"
                  method="post"
                  id="mc-embedded-subscribe-form"
                  name="mc-embedded-subscribe-form"
                >
                  <legend>
                    <Data>
                      Dia 07 de Fevereiro <span>às 20h</span>
                    </Data>
                    <h3>
                      <strong>Garanta já sua vaga!</strong>
                    </h3>
                  </legend>
                  <div id="mc_embed_signup_scroll">
                    <div>
                      <label htmlFor="mce-FNAME">
                        Seu nome<span className="asterisk">*</span>
                      </label>
                      <input
                        onChange={(e) => setNome(e.target.value)}
                        type="text"
                        name="FNAME"
                        id="mce-FNAME"
                      />
                    </div>
                    <div>
                      <label htmlFor="mce-EMAIL">
                        Seu melhor e-mail<span className="asterisk">*</span>
                      </label>
                      <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        name="EMAIL"
                        id="mce-EMAIL"
                      />
                    </div>
                    <div>
                      <button
                        disabled={!validateForm() || isSubmitting}
                        type="submit"
                        value="Cadastrar"
                        name="cadastrar"
                        id="mc-embedded-subscribe"
                      >
                        Quero participar
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </Formulario>
          </Cadastro>
          <Ementa>
            <HeadingH2>
              Conteúdo da <span>Masterclass</span>
            </HeadingH2>
            <Topicos>
              <ListCarousel skills={listaTopicos} />
            </Topicos>
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
                Hoje sou desenvolvedora sênior e líder de front-end com mais de
                10 anos de experiência no mercado de tecnologia.
              </p>
              <p>
                Aprendi muitas coisas e sei que apenas estudar e aplicar para
                vagas não é o suficiente para ter uma carreira de sucesso em
                tech. É preciso ir além.{' '}
              </p>
              <p>
                E todo esse aprendizado eu compartilho com você de{' '}
                <strong>FORMA GRATUITA</strong> na MasterClass Tech Path.
              </p>
              <Social />
            </figcaption>
          </figure>
        </Autora>
      </PageCadastro>
    </>
  );
}

export default Masterclass;
