import React, { useState } from 'react';
import Head from 'next/head';
import Container from '../../../components/Container/Container';

import {
  PageLista,
  HeaderLista,
  ListadeEspera,
  FotoDestaque,
  Formulario,
  Footer,
} from '../TechPath.styles';

function ListaEspera() {
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
        <title>Mentoria Tech Path</title>
        <meta
          name="description"
          key="description"
          content="Mentoria Tech Path - Tudo o que você precisa para ter uma carreira de sucesso em tech"
        />
        <meta
          property="og:title"
          content="Mentoria Tech Path - Entre na lista de espera!"
        />
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
      <PageLista>
        <Container>
          <ListadeEspera>
            <FotoDestaque>
              <img
                src="/images/techpath/anne.png"
                alt="Foto de Anne sentada atrás de uma mesa, sorrindo e olhando para a tela. Na imagem também é possível ver um computador e um microfone sob uma mesa."
              />
            </FotoDestaque>
            <aside>
              <HeaderLista>
                <span>Mentoria</span>
                <h1>Tech Path</h1>
              </HeaderLista>

              <h2>
                Comece seu caminho para uma<span>carreira tech de sucesso</span>
              </h2>

              <h3>
                <strong>Próxima turma:</strong> Fevereiro/2024
              </h3>

              <p>
                <strong>Vagas limitadas!</strong> Entre na lista de espera 👇
              </p>

              <Formulario>
                <div id="mc_embed_signup">
                  <form
                    onSubmit={() => {
                      setIsSubmitting(true);
                    }}
                    action="https://annelesin.us5.list-manage.com/subscribe/post?u=3c3129431c3be45e7e6a22909&amp;id=350c42b051&amp;f_id=00281eeaf0"
                    method="post"
                    id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form"
                  >
                    <div id="mc_embed_signup_scroll">
                      <div>
                        <label htmlFor="mce-FNAME">
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
                        <label htmlFor="mce-EMAIL">
                          Seu melhor e-mail<span className="asterisk">*</span>
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
                          value="Cadastrar"
                          name="cadastrar"
                          id="mc-embedded-subscribe"
                        >
                          Quero participar
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </Formulario>
            </aside>
          </ListadeEspera>
        </Container>

        <Footer>
          <img
            src="/images/logo-tech-path-horizontal-amarela.svg"
            alt="Logo Tech Path"
          />
          <p>Copyright © Tech Path 2024</p>

          <p>
            Dúvidas e suporte: <br />
            contato@techanne.com.br
          </p>
        </Footer>
      </PageLista>
    </>
  );
}

export default ListaEspera;
