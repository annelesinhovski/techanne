import React from 'react';
import Head from 'next/head';
import Container from '../../components/Container/Container';
import Footer from '../../components/Footer/Footer';
import Social from '../../components/Social/Social';
import {
  PageLinks,
  Header,
  Avatar,
  ListaLinks,
  LinkItem,
  LinkItemSecundario,
} from './LinksUteis.styles';

function LinksUteis() {
  return (
    <>
      <Head>
        <title>Links úteis | @tech.anne</title>
      </Head>
      <PageLinks>
        <Container>
          <Header>
            <h1>Anne Lesinhovski | @tech.anne</h1>

            <Avatar>
              <img src="/images/logo-tech-anne-blue.svg" alt="Logo Tech Anne" />
            </Avatar>
            <Social dark />

            <h3>Links úteis aqui</h3>
          </Header>
          <ListaLinks>
            <li>
              <LinkItem
                href="https://techanne.herospark.co/p/processo-seletivo-na-real"
                target="_blank"
              >
                PROCESSO SELETIVO NA REAL{' '}
                <small>Evento ao vivo, on-line e gratuito!</small>
              </LinkItem>
            </li>
            <li>
              <LinkItem href="/lista-vip/" target="_blank">
                Minha lista <small>Newsletter, novidades e mais!</small>
              </LinkItem>
            </li>
            <li>
              <LinkItem href="/techpath/mentoria/" target="_blank">
                Mentoria Tech Path <small>Lista de espera</small>
              </LinkItem>
            </li>
            <li>
              <LinkItem href="/files/media-kit.pdf" target="_blank">
                Quer fazer uma parceria? <small>Veja meu media kit</small>
              </LinkItem>
            </li>
            <li>
              <LinkItem
                href="https://www.youtube.com/c/techanne?sub_confirmation=1"
                target="_blank"
              >
                Canal no Youtube
              </LinkItem>
            </li>

            <li></li>
            <li></li>
            <li></li>
            <li>
              <h4>Assista outros vídeos:</h4>

              <LinkItemSecundario
                href="https://www.youtube.com/watch?v=oTtskSK8RpA&t=2s"
                target="_blank"
              >
                Podcast - CTO Talks
              </LinkItemSecundario>

              <LinkItemSecundario
                href="https://www.youtube.com/watch?v=XGauVf5-1IE&t=135s"
                target="_blank"
              >
                Participação Frontin SENIOR
              </LinkItemSecundario>

              <LinkItemSecundario
                href="https://www.youtube.com/watch?v=GGIGMIK6tRI&t=2849s"
                target="_blank"
              >
                Transição de carreira (LIVE)
              </LinkItemSecundario>

              <LinkItemSecundario
                href="https://www.youtube.com/watch?v=2mEncxY6-A8"
                target="_blank"
              >
                Mulher em tech (LIVE + convidadas)
              </LinkItemSecundario>

              <LinkItemSecundario
                href="https://www.youtube.com/watch?v=_HNmwnXHzYo"
                target="_blank"
              >
                Carreira como dev (LIVE)
              </LinkItemSecundario>

              <LinkItemSecundario
                href="https://www.youtube.com/watch?v=XTDP6kxMtoc&t=3207s"
                target="_blank"
              >
                Acessibilidade (LIVE)
              </LinkItemSecundario>
            </li>
          </ListaLinks>
        </Container>
        <Footer />
      </PageLinks>
    </>
  );
}

export default LinksUteis;
