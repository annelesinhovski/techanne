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
    router.push('https://chat.whatsapp.com/By16XrJwPAQ8jqcqojCIjS');
  };

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
          content="https://techanne.com.br/images/share-techanne.jpg"
        />
      </Head>
      <PageConfirmacao>
        <HeaderGPS>
          <Wrapper>
            <h1>Tech Path</h1>
          </Wrapper>
        </HeaderGPS>

        <HeroGPS>
          <Wrapper>
            <Confirmacao>
              <figure>
                <img
                  src="/images/lista.png"
                  alt="Imagem ilustrativa com Tech Anne segurando um celular. É possível ver os selos da marca escritos: I love TI, Fala galera e Evoluir Carreira."
                />
                <figcaption>
                  <h2>Inscrição confirmada!</h2>

                  <p>
                    Agora você faz parte da minha lista de e-mail.
                    <br />
                    Te mandarei as novidades sempre em primeira mão. E fica
                    tranquilo(a), não vou te encher de spam. :)
                  </p>

                  <p>Não deixe de entrar no Grupo VIP do WhatsApp abaixo 👇</p>
                </figcaption>
              </figure>
            </Confirmacao>
            <Evento>
              <figure>
                <img
                  src="/images/grupo-whats.png"
                  alt="Aulao LinkedIn para Devs"
                />
                <figcaption>
                  <p>
                    <strong>Entre no Grupo VIP do WhatsApp!</strong>
                    <br />
                    <br /> Assim você não perde nenhuma das comunicações - e não
                    se preocupe, só admins vão enviar mensagens e apenas o
                    necessário nesse grupo. <br />
                    <br />
                    E quem sabe você não vem ser meu aluno com condições
                    incríveis? 💻⚡
                    <br />
                    <br />
                    Te vejo lá? 👇
                  </p>
                  <ButtonPink onClick={linkWhats}>Acessar grupo vip</ButtonPink>
                </figcaption>
              </figure>
            </Evento>
          </Wrapper>
        </HeroGPS>
      </PageConfirmacao>
    </>
  );
}

export default CadastroConfirmado;
