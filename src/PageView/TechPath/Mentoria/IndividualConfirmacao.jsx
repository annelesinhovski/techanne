import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Container from '../../../components/Container/Container';

import {
  PageCadastro,
  Header,
  HeadingH2,
  HeadingH3,
  ButtonPink,
  Headline,
  Wrapper,
  Footer,
  HeroMentoria,
} from '../TechPath.styles';

function IndividualConfirmacao() {
  const router = useRouter();

  const calendario = (e) => {
    e.preventDefault();
    router.push('https://calendly.com/tech-anne/mentoria-individual');
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
          content="https://techanne.com.br/techpath/mentoria/"
        />
        <meta
          property="og:image"
          content="https://techanne.com.br/images/share-techanne.jpg"
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
              <HeadingH2>Compra confirmada!</HeadingH2>

              <HeadingH3>
                Você garantiu sua vaga na mentoria individual e agora vai
                acelerar sua carreira.
              </HeadingH3>

              <p>
                Caso tenha qualquer dúvida, ou precise de suporte, entre em
                contato comigo pelo suporte@techanne.com.br <br /> Vai ser um
                prazer te ajudar!
              </p>

              <p>
                Agora o próximo passo é reservar no link abaixo o seu horário
                comigo.
              </p>

              <ButtonPink onClick={calendario}>Agendar sessão</ButtonPink>

              <br />
              <br />
              <span>
                <small>
                  Importante: Se você optou pelo acompanhamento de 3 meses,
                  agora você irá marcar apenas a primeira sessão. Irei te mandar
                  todo mês a agenda para combinarmos os próximos encontros!
                </small>
              </span>
            </Wrapper>
          </Headline>
        </HeroMentoria>
      </PageCadastro>
    </>
  );
}

export default IndividualConfirmacao;
