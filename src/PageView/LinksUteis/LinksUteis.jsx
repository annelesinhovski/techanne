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
  LabelPink,
  LabelBlue,
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

            <h3>Vamos acelerar sua carreira?</h3>
          </Header>
          <ListaLinks>
            <li>
              <LinkItem href="/techpath/mentoria/individual" target="_blank">
                Mentoria Tech Path{' '}
                <small>Vagas limitadas | Agende hoje mesmo!</small>
              </LinkItem>
              <LabelPink>AO VIVO</LabelPink>
              <LabelBlue>Sessão única ou pacote</LabelBlue>
              <p className="sobre">
                <strong>
                  Acompanhamento individual para carreiras únicas.
                </strong>{' '}
                De acordo com as suas necessidades e o seu momento. Para quem
                busca uma primeira ou nova oportunidade (troca de emprego),
                recolocação e transição de carreira.
              </p>
            </li>

            <li>
              <LinkItem href="/techpath/gps" target="_blank">
                GPS
                <small>Guia de Processos Seletivos</small>
              </LinkItem>
              <LabelPink>CURSO GRAVADO</LabelPink>
              <LabelBlue>Estude no seu ritmo</LabelBlue>
              <LabelPink>Método completo</LabelPink>
              <p className="sobre">
                <strong>
                  Conquiste sua vaga para trabalhar com programação.
                </strong>{' '}
                Seja recrutado(a) para entrevistas e prepare-se para avaliações
                técnicas e desafios de programação com mais de 40 hacks práticos
                e aulas direto ao ponto.
              </p>
            </li>

            <li>
              <LinkItem href="/techpath/perfil-atrativo-devs/" target="_blank">
                PAD
                <small>Perfil Atrativo para Devs</small>
              </LinkItem>
              <LabelPink>CURSO GRAVADO</LabelPink>
              <LabelBlue>Uso fácil</LabelBlue>
              <LabelPink>materiais de apoio e templates</LabelPink>
              <p className="sobre">
                <strong>LinkedIn, GitHub, portfólio, currículo e mais!</strong>{' '}
                Para você se destacar, ser encontrado por recruiters e
                conquistar vagas para trabalhar com programação.
              </p>
            </li>

            <li>
              <LinkItem
                href="https://pay.kiwify.com.br/3GrsCX8"
                target="_blank"
              >
                Análise de LinkedIn{' '}
                <small>Seja notado e conquiste sua vaga tech</small>
              </LinkItem>

              <LabelBlue>DOSSIÊ COMPLETO</LabelBlue>
              <LabelPink>FORMATO PDF</LabelPink>
              <p className="sobre">
                <strong>Vou revisar seu perfil de forma personalizada,</strong>{' '}
                de acordo com seu objetivo profissional na área de T.I. Você
                receberá um dossiê completo com todos os pontos de melhoria para
                que seu perfil seja mais notado no LinkedIn.
              </p>
            </li>

            <li>
              <LinkItem href="/techpath/ebook-vaga-tech/" target="_blank">
                E-book | Vaga Tech
                <small>Leia, aplique e tenha resultados</small>
              </LinkItem>
              <LabelPink>Livro digital (PDF)</LabelPink>
              <LabelBlue>Direto ao ponto</LabelBlue>
              <p className="sobre">
                <strong>
                  Guia com 25+ hacks para ficar mais próximo da sua vaga para
                  trabalhar com programação.
                </strong>{' '}
                Busca por vagas, LinkedIn, currículo, portfólio e entrevistas.
                Sem enrolação. Direto ao que interessa.
              </p>
            </li>

            {/* <li>
              <LinkItem href="/techpath/mentoria/" target="_blank">
                Mentoria Tech Path <small>Lista de espera</small>
              </LinkItem>
              <LabelPink>AULAS GRAVADAS e ao vivo</LabelPink>
              <LabelBlue>EM GRUPO</LabelBlue>
              <p className="sobre">
                <strong>
                  Comece seu caminho para uma carreira tech de sucesso!
                </strong>
                &nbsp; Um programa de mentoria de 6 meses para você destravar
                sua carreira como dev. Não fique de fora da próxima turma!
              </p>
            </li> */}
            <li>
              <h4>Outros links:</h4>
              <LinkItem href="/lista-vip/" target="_blank">
                Minha lista <small>Newsletter, novidades e mais!</small>
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
                href="https://www.youtube.com/watch?v=K_AbDu_-nxc"
                target="_blank"
              >
                Revelo XPerts Tech Leaders | Criando Times Tech de Alto
                Desempenho
              </LinkItemSecundario>

              <LinkItemSecundario
                href="https://www.youtube.com/watch?v=UsHbuF5eTB8"
                target="_blank"
              >
                Podcast - Emílias | Mulheres na computação
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
