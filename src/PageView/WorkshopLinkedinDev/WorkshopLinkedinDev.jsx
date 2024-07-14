import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import AccordionContainer from '../../components/Accordion/Accordion';

import {
  ButtonYellow,
  ButtonPink,
  PageGPS,
  HeadingH2,
  HeroGPS,
  InfosEvento,
  Publico,
  Headline,
  BulletPoints,
  Autora,
  SobreGPS,
  Formulario,
  Faq,
  Footer,
  Wrapper,
  Sticky,
} from '../WorkshopLinkedinDev/WorkshopLinkedinDev.styles';

const accordions = [
  {
    title: 'Quanto custa participar do Workshop?',
    content: 'Evento 100% gratuito!',
  },
  {
    title: 'Como faço para me inscrever?',
    content:
      'Basta preencher suas informações no formulário aqui da página e sua vaga estará garantida!',
  },
  {
    title: 'Não sei nada de programação, o evento é para mim?',
    content:
      'Quando antes você se posicionar como profissonal que tem a intenção de entrar na área de T.I., maiores serão as suas chances. Existem formas de preencher o seu LinkedIn mesmo que você não tenha experiência na área também. Além disso, é um ótimo lugar para fazer networking e se conectar com mais pessoas!',
  },
  {
    title: 'Já atuo na área de TI, como esse evento pode me ajudar?',
    content:
      'O conhecimento que você irá adquirir no evento poderá ser aplicado em qualquer momento da sua carreira. Se você já trabalha na área, pode conseguir oportunidades melhores, salários maiores e trabalhar nas melhores empresas.',
  },

  {
    title:
      'Como terei acesso aos conteúdos, materiais e comunicações do evento?',
    content:
      'Tudo será enviado por e-mail, por isso é essencial que você esteja inscrito no evento aqui no formulário dessa página. Também haverão comunicações no grupo VIP do WhatsApp que será disponibilizado após a sua inscrição. O link do nosso encontro ao vivo do dia 06/02 será enviado também por e-mail e no grupo do WhatsApp! ',
  },
];

function WLDPage() {
  const router = useRouter();
  const { id } = router.query;
  const [showButton, setShowButton] = useState(false);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToOffer = () => {
    const targetId = 'cadastro';
    const element = document.getElementById(targetId);
    const topOffset = element.offsetTop;

    window.scrollTo({
      top: topOffset,
      behavior: 'smooth',
    });
  };

  const buttonClass = showButton ? 'sticky-button show' : 'sticky-button';

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
        <title>LinkedIn para Devs</title>
        <meta
          name="description"
          key="description"
          content="Aulão LinkedIn para Devs - Desenvolva um perfil irresistível e conquiste
        oportunidades na área de T.I. - É gratuito, inscreva-se hoje mesmo!"
        />

        <meta property="og:title" content="Aulão LinkedIn para Devs" />
        <meta
          property="og:description"
          content="Aulão LinkedIn para Devs - Desenvolva um perfil irresistível e conquiste oportunidades na área de T.I. - É gratuito, inscreva-se hoje mesmo!"
        />
        <meta
          property="og:url"
          content="https://techanne.com.br/linkedin-devs/"
        />
        <meta
          property="og:image"
          content="https://techanne.com.br/images/share-techanne.jpg"
        />
      </Head>
      <PageGPS>
        <Sticky className={buttonClass}>
          <aside>
            <p>Faça seu cadastro e garanta a sua vaga!</p>
            <button onClick={scrollToOffer}>Clique aqui</button>
          </aside>
        </Sticky>
        <HeroGPS>
          <Wrapper className="flex">
            <Headline>
              <img
                src="/images/aulao-linkedin-devs.png"
                alt="Workshop Vaga Tech"
              />
              <h1>
                Desenvolva um <span>perfil incrível</span> e conquiste
                oportunidades na área de T.I.
              </h1>
              <InfosEvento>
                <li>
                  <figure>
                    <img src="/images/icones/calendar.svg" alt="" />
                    <figcaption>
                      <strong>QUANDO?</strong> 06/02 às 19h30
                    </figcaption>
                  </figure>
                </li>
                <li>
                  <figure>
                    <img src="/images/icones/video.svg" alt="" />
                    <figcaption>
                      <strong>EVENTO ON-LINE</strong> 100% GRATUITO
                    </figcaption>
                  </figure>
                </li>
              </InfosEvento>
            </Headline>
            <Formulario id="cadastro">
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
                    <h3>INSCRIÇÕES ABERTAS </h3>
                    <span>
                      Maximize seu potencial de empregabilidade na área de T.I.
                      com estratégias avançadas! 👇
                    </span>
                  </legend>
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
                        Seu e-mail<span className="asterisk">*</span>
                      </label>
                      <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        name="EMAIL"
                        id="mce-EMAIL"
                      />
                    </div>
                    <div hidden="">
                      <input type="hidden" name="tags" value="4277135" />
                    </div>
                    <div>
                      <button
                        disabled={!validateForm() || isSubmitting}
                        type="submit"
                        value="Cadastrar"
                        name="cadastrar"
                        id="mc-embedded-subscribe"
                      >
                        Garanta sua vaga
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </Formulario>
          </Wrapper>
        </HeroGPS>

        <Publico>
          <Wrapper>
            <HeadingH2>
              Se você se identifica com isto,{' '}
              <span>o workshop é para você:</span>
            </HeadingH2>
            <figure className="publico">
              <img
                src="/images/gps/dificuldades-03.png"
                alt="Imagem ilustrativa de pessoas estudando, fazendo call e entrevistas online para conseguir uma vaga na área de tecnologia"
              />
              <figcaption>
                <ul>
                  <li>
                    ❌ Se sentiu perdido ao preencher seu
                    <strong> perfil no LinkedIn</strong>?
                  </li>
                  <li>
                    ❌ Enviou dezenas de currículos
                    <strong> sem retorno</strong>?
                  </li>
                  <li>
                    ❌ Conseguir uma vaga na área de T.I.
                    <strong> parece algo muito distante</strong>.
                  </li>
                  <li>
                    ❌ Aplica para vagas mas não tem um retorno,
                    <strong> não conseguindo entrevistas</strong>.
                  </li>
                  <li>
                    ❌ Desanima ao ver as <strong>vagas da área de TI</strong> e
                    todos os <strong>muitos requisitos técnicos</strong> que são
                    exigidos
                  </li>
                  <li>
                    ❌ Sente que está <strong>estagnado</strong> pois mesmo
                    insatisfeito com a sua situação{' '}
                    <strong>não consegue uma oportunidade melhor</strong>.
                  </li>
                </ul>
              </figcaption>
            </figure>
          </Wrapper>
        </Publico>

        <Autora>
          <figure>
            <img
              src="/images/foto-perfil-2.png"
              alt="Foto de Anne Lesinhovski segurando um notebook e sorrindo"
            />
            <figcaption>
              <span>Olá, eu sou Tech Anne! 👋</span>
              <h4>Com quem você vai aprender?</h4>

              <p>13 anos no mercado de tecnologia</p>

              <p>Tech manager em uma big tech</p>

              <p>
                Palestrante em eventos como FRONTIN e The Developer´s Conference
              </p>

              <p>
                Eleita 2x consecutivas como umas das 50 pessoas mais influentes
                da área de programação no Brasil pela #50ToFollow
              </p>

              <p>
                200+ pessoas acompanhadas em suas carreiras no último ano com a
                Mentoria Tech Path
              </p>
              <ButtonYellow onClick={scrollToOffer}>
                Garanta a sua vaga
              </ButtonYellow>
            </figcaption>
          </figure>
        </Autora>

        <Faq>
          <Wrapper>
            <HeadingH2>
              <span>Perguntas frequentes</span>
            </HeadingH2>
            <p className="instrucao">Clique para ver as respostas &darr;</p>
            <AccordionContainer accordions={accordions} />
          </Wrapper>
        </Faq>

        <Footer>
          <img
            src="/images/logo-tech-path-horizontal-amarela.svg"
            alt="Logo GPS"
          />
          <p>Copyright © Tech Path 2024</p>

          <p>
            Dúvidas e suporte: <br />
            contato@techanne.com.br
          </p>
        </Footer>
      </PageGPS>
    </>
  );
}

export default WLDPage;
