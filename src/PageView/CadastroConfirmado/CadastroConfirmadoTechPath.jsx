import React from 'react';
import Head from 'next/head';
import Container from '../../components/Container/Container';

import {
  PageConfirmacao,
  Header,
  Slogan,
  Formulario,
  Message,
} from '../../PageView/TechPath/TechPath.styles';

function CadastroConfirmadoTechPath() {
  return (
    <>
      <Head>
        <title>Masterclass Tech Path - Cadastro confirmado!</title>
      </Head>
      <PageConfirmacao>
        <Container>
          <Header>
            <span>Masterclass</span>
            <h1>Tech Path</h1>
            <Slogan>
              <strong>7 de Fevereiro - 20 horas</strong>Ao vivo, online e
              gratuito
            </Slogan>
          </Header>

          <Formulario>
            <Message>
              <h3>
                <span>Opa, que legal!</span> <br />
                Sua vaga no evento está garantida. :)
              </h3>

              <p> Vamos enviar mais informações por e-mail.</p>

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

export default CadastroConfirmadoTechPath;
