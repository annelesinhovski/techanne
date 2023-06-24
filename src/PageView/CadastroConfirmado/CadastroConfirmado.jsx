import React from 'react';
import Head from 'next/head';
import Container from '../../components/Container/Container';

import {
  HeaderLista,
  PageLista,
  ListadeEspera,
  FotoDestaque,
  Footer,
} from '../../PageView/TechPath/TechPath.styles';

function CadastroConfirmado() {
  return (
    <>
      <Head>
        <title>Tech Path</title>
        <meta
          name="description"
          key="description"
          content="Tech Path - Tudo o que você precisa para ter uma carreira de sucesso em tech"
        />
        <meta property="og:title" content="Tech Path - Cadastro confirmado!" />
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
          content="https://techanne.com.br/images/share-techpath.jpg"
        />
      </Head>
      <PageLista>
        <Container>
          <ListadeEspera>
            <FotoDestaque>
              <img
                src="/images/techpath/anne.jpg"
                alt="Foto de Anne sentada atrás de uma mesa, sorrindo e olhando para a tela. Na imagem também é possível ver um computador e um microfone sob uma mesa."
              />
            </FotoDestaque>
            <aside>
              <HeaderLista>
                <h1>Tech Path</h1>
              </HeaderLista>

              <h3>
                Opa, que legal! <br />
                Muito obrigada pela sua inscrição. :)
              </h3>

              <p>
                Agora você faz parte da minha lista e te mandarei as novidades
                sempre em primeira mão por e-mail.
              </p>

              <p>Fique de olho :)</p>

              <p>PS: Não se preocupe, não vou te encher de spam.</p>
              <p>
                Abraço,
                <br /> Anne.
              </p>
            </aside>
          </ListadeEspera>
        </Container>
        <Footer>
          <img src="/images/logo-techpath-yellow.svg" alt="Logo Tech Path" />
          <p>Copyright © Tech Path 2023</p>

          <p>
            Dúvidas e suporte: <br />
            contato@techanne.com.br
          </p>
        </Footer>
      </PageLista>
    </>
  );
}

export default CadastroConfirmado;
