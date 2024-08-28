import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import {
  PageConfirmacao,
  HeaderGPS,
  HeroGPS,
  Confirmacao,
  Wrapper,
  ButtonPink,
  Evento,
} from '../CadastroConfirmado/CadastroConfirmado.styles';

function CadastroConfirmado() {
  const router = useRouter();

  const linkWhats = (e) => {
    e.preventDefault();
    router.push('https://chat.whatsapp.com/IxnDW6CpM0l1i7k7KS7V7D');
  };

  return (
    <>
      <Head>
        <title>Tech Path</title>
        <meta
          name="description"
          key="description"
          content="Tech Anne - Tudo o que você precisa para ter uma carreira de sucesso em tech"
        />
        <meta property="og:title" content="Tech Anne - Cadastro confirmado!" />
        <meta
          property="og:description"
          content="Tech Anne - Tudo o que você precisa para ter uma carreira de sucesso em tech"
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
      <PageConfirmacao>
        <HeroGPS>
          <Wrapper>
            <Confirmacao>
              <figure>
                <img
                  src="/images/lista.png"
                  alt="Imagem ilustrativa com Tech Anne segurando um celular. É possível ver os selos da marca escritos: I love TI, Fala galera e Evoluir Carreira."
                />
                <figcaption>
                  <h2>Quase lá...</h2>

                  <p>
                    Agora você faz parte da minha lista de e-mail, e não se
                    preocupe pois não vou te encher de SPAM{' '}
                    <em>(sim, também acho chato!)</em>.
                  </p>

                  <h3>Para concluir seu cadastro como Tech Anner VIP:</h3>

                  <p>
                    Entre no link abaixo na comunidade do WhatApp para
                    comunicados, avisos de lives, e muitas oportunidades para
                    sua carreira tech. 👇
                  </p>

                  <ButtonPink onClick={linkWhats}>
                    Concluir inscrição
                  </ButtonPink>
                </figcaption>
              </figure>
            </Confirmacao>
          </Wrapper>
        </HeroGPS>
      </PageConfirmacao>
    </>
  );
}

export default CadastroConfirmado;
