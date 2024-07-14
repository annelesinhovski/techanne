import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

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
} from '../../PageView/TechPath/TechPath.styles';

function ComboConfirmacao() {
  const router = useRouter();

  const calendario = (e) => {
    e.preventDefault();
    router.push('https://calendly.com/tech-anne/mentoria-individual');
  };

  return (
    <>
      <Head>
        <title>Tech Week | Compra confirmada</title>
        <meta
          name="description"
          key="description"
          content="Tech Path - Tudo o que você precisa para ter uma carreira de sucesso em tech"
        />
        <meta property="og:title" content="Tech Week" />
        <meta
          property="og:description"
          content="Tech Path - Tudo o que você precisa para ter uma carreira de sucesso em tech"
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
                Você garantiu seu combo da Black Week e agora vai acelerar sua
                carreira.
              </HeadingH3>

              <p>
                Você deverá receber dois e-mails: um de confirmação de compra e
                outro de acesso à plataforma{' '}
                <u>para acessar os produtos do seu combo</u>.
              </p>

              <p>
                Sobre a mentoria individual, agora o próximo passo é reservar no
                link abaixo o seu horário comigo.
              </p>

              <ButtonPink onClick={calendario}>Agendar sessão</ButtonPink>

              <br />
              <br />
              <span>
                <small>
                  Importante: Se você optou pelo acompanhamento de 3 ou 6 meses,
                  agora você irá marcar apenas a primeira sessão. Irei te mandar
                  todo mês a agenda para combinarmos os próximos encontros!
                </small>
              </span>

              <p>
                Caso tenha qualquer dúvida, ou precise de suporte, entre em
                contato comigo pelo suporte@techanne.com.br <br /> Vai ser um
                prazer te ajudar!
              </p>
            </Wrapper>
          </Headline>
        </HeroMentoria>
      </PageCadastro>
    </>
  );
}

export default ComboConfirmacao;
