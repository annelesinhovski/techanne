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
} from '../WorkshopVagaTech/WorkshopVagaTech.styles';

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
      'Quando antes você souber como são os processos seletivos na área de TI, mais foco você terá ao se preparar para conseguir sua primeira oportunidade. Com as aulas de aquecimento você vai aprender sobre áreas de atuação e roadmaps de carreira que vão te ajudar no seu direcionamento.',
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
      'Tudo será enviado por e-mail, por isso é essencial que você esteja inscrito no evento aqui no formulário dessa página. Também haverão comunicações no grupo VIP do WhatsApp que será disponibilizado após a sua inscrição. Nosso encontro ao Vivo do dia 11/09 será no Google Meet! ',
  },
];

function WVTPage() {
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
        <title>Workshop Vaga Tech</title>
        <meta
          name="description"
          key="description"
          content="Workshop Vaga Tech - Do Zero a sua 1a vaga na área de T.I., mesmo sem ter experiência! É gratuito, inscreva-se hoje mesmo!"
        />
        <meta
          property="og:title"
          content="GPS - Guia de Processos Seletivos!"
        />
        <meta
          property="og:description"
          content="Workshop Vaga Tech - Do Zero a sua 1a vaga na área de T.I., mesmo sem ter experiência! É gratuito, inscreva-se hoje mesmo!"
        />
        <meta
          property="og:url"
          content="https://techanne.com.br/workshop/vaga-tech/"
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
                src="/images/workshop-vaga-tech.png"
                alt="Workshop Vaga Tech"
              />
              <h1>
                Do zero à sua vaga na área de T.I., mesmo{' '}
                <span>sem ter experiência.</span>
              </h1>
              <InfosEvento>
                <li>
                  <figure>
                    <img src="/images/icones/calendar.svg" alt="" />
                    <figcaption>
                      <strong>QUANDO?</strong> 11/09 às 20h
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
                  action="https://annelesin.us5.list-manage.com/subscribe/post?u=3c3129431c3be45e7e6a22909&amp;id=350c42b051&amp;f_id=00281eeaf0"
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
                    ❌ Desanima ao ver as vagas da área de TI e todos os{' '}
                    <strong>muitos requisitos técnicos</strong> que são exigidos
                  </li>
                  <li>
                    ❌ Parece impossível{' '}
                    <strong>conciliar sua transição de carreira</strong> com sua
                    rotina atual e <strong>aprender tudo</strong> o que é
                    exigido nas vagas
                  </li>
                  <li>
                    ❌ Você já estuda, mas a insegurança é forte na hora de se
                    candidatar para vagas
                  </li>
                  <li>
                    ❌ Se candidata para vagas mas{' '}
                    <strong>nunca é chamado para entrevistas</strong>
                  </li>
                  <li>
                    ❌ <strong>Bate na trave</strong> toda vez que é chamado
                    para entrevistas técnicas
                  </li>
                </ul>
              </figcaption>
            </figure>
          </Wrapper>
        </Publico>

        <BulletPoints>
          <Wrapper>
            <h2>
              Para sair do ZERO e conquistar a sua vaga, esse é o caminho:
            </h2>
            <ul>
              <li>
                <p>
                  <span>1 </span>Escolher área de atuação.
                </p>
              </li>
              <li>
                <p>
                  <span>2 </span>Roadmaps e saber quais skills são mesmo
                  necessárias.
                </p>
              </li>
              <li>
                <p>
                  <span>3 </span>Conhecer a dinâmica do mercado de T.I.
                </p>
              </li>
              <li>
                <p>
                  <span>4 </span>Estudar com um plano de ação (e dentro da sua
                  realidade!)
                </p>
              </li>
              <li>
                <p>
                  <span>5 </span>Vender o seu peixe, mostrando que você tem o
                  perfil de profissional que as empresas estão buscando.
                </p>
              </li>
              <li>
                <p>
                  <strong>
                    EXTRA: Encontrar e se candidatar a vagas alinhadas ao seu
                    perfil.
                  </strong>
                </p>
              </li>
            </ul>
          </Wrapper>
        </BulletPoints>

        <SobreGPS>
          <Wrapper>
            <HeadingH2>E para te ajudar a trilhar esse caminho:</HeadingH2>
            <figure>
              <figcaption>
                <ul>
                  <li>
                    <p>✅ Aulas de aquecimento entre os dias 03/09 a 10/09.</p>
                  </li>
                  <li>
                    <p>✅ Receba as aulas e materiais por e-mail.</p>
                  </li>
                  <li>
                    <p>✅ Grupo VIP do WhatsApp com conteúdos adicionais.</p>
                  </li>
                  <li>
                    <p>
                      ✅ <strong>Encontro ao vivo no dia 11/09!</strong>
                    </p>
                  </li>
                </ul>
                <ButtonPink onClick={scrollToOffer}>
                  Garanta a sua vaga
                </ButtonPink>
              </figcaption>
              <img
                src="/images/grupo-whats.png"
                alt="Celular com a tela do WhatsApp mostrando uma conversa do grupo VIP de Tech Anne"
              />
            </figure>
          </Wrapper>
        </SobreGPS>

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

export default WVTPage;
