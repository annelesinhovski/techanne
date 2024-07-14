import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Container from '../../components/Container/Container';
import Footer from '../../components/Footer/Footer';
import { PageCadastro, Header, Avatar, Formulario } from './Cadastro.styles';

function Cadastro() {
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
        <title>Lista VIP | @tech.anne</title>
        <meta
          name="description"
          key="description"
          content="Tech Anne - Lista VIP e conteúdo exclusivo para cadastrados!"
        />
        <meta
          property="og:title"
          content="Tech Anne - Lista VIP e conteúdo exclusivo para cadastrados!"
        />
        <meta
          property="og:description"
          content="Tech Anne - Lista VIP e conteúdo exclusivo para cadastrados!"
        />
        <meta property="og:url" content="https://techanne.com.br/lista-vip/" />
        <meta
          property="og:image"
          key="og:image"
          content="https://techanne.com.br/images/share-techanne.jpg"
        />
      </Head>
      <PageCadastro>
        <Container>
          <Header>
            <h1>Anne Lesinhovski | @tech.anne</h1>

            <Avatar>
              <img src="/images/logo-tech-anne-blue.svg" alt="Logo Tech Anne" />
            </Avatar>

            <h3>Vem para a lista VIP!</h3>
          </Header>

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
                  <h3>
                    Faça seu cadastro no formulário abaixo para fazer parte da
                    minha lista e receber as novidades{' '}
                    <strong>sempre em primeira mão</strong> por e&#8209;mail. 
                    🤓
                  </h3>
                  <p>PS: Não se preocupe, não vou te encher de spam.</p>
                </legend>
                <div id="mc_embed_signup_scroll">
                  <div>
                    <label for="mce-FNAME">
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
                    <label for="mce-EMAIL">
                      Seu e-mail<span className="asterisk">*</span>
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
                      Cadastrar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </Formulario>
        </Container>
        <Footer />
      </PageCadastro>
    </>
  );
}

export default Cadastro;
