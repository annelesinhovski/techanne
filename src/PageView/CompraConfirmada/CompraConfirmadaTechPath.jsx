import React from 'react';
import Head from 'next/head';
import Container from '../../components/Container/Container';

import {
  PageConfirmacao,
  Header,
  Slogan,
  Formulario,
  Message,
} from '../TechPath/TechPath.styles';

function CompraConfirmadaTechPath() {
  return (
    <>
      <Head>
        <title>Mentoria Tech Path - Compra confirmado!</title>
      </Head>
      <PageConfirmacao>
        <Container>
          <Header>
            <span>Mentoria</span>
            <h1>Tech Path</h1>
          </Header>

          <Formulario>
            <Message>
              <h3>
                <span>Opa, que legal!</span> <br />
                Vi aqui que você realizou a compra pela Hotmart e sua vaga no
                minha mentoria está garantida. :)
              </h3>

              <p>
                Obrigada pela sua confiança e estou ansiosa para começarmos!
              </p>

              <p>Vamos enviar mais informações por e-mail.</p>

              <p>Fique de olho!</p>

              <p>
                Abraço,
                <br /> Anne.
              </p>
            </Message>
          </Formulario>
        </Container>
      </PageConfirmacao>
    </>
  );
}

export default CompraConfirmadaTechPath;
