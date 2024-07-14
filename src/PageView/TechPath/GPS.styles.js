import styled from 'styled-components';

export const PageGPS = styled.div`
  background: url(/images/bg/white.jpg) repeat;
  min-height: 100vh;
`;

export const Wrapper = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  display: block;
  padding: 0 20px;

  @media screen and (min-width: 1024px) {
    &.flex {
      display: flex;
    }
  }
`;

export const HeaderGPS = styled.header`
  position: relative;
  z-index: 1;
  margin: 0 auto;
  padding: 20px 0;
  background: url(/images/bg/white.jpg) repeat;

  h1 {
    display: block;
    margin: 0 auto;
    width: 250px;
    height: 65px;
    background: url(/images/gps/logo-principal-azul.png) no-repeat;
    background-size: 100%;
    font-size: 0;

    @media screen and (min-width: 420px) {
      width: 300px;
      height: 75px;
    }

    @media screen and (min-width: 768px) {
      width: 370px;
      height: 90px;
      padding: 30px 0 50px;
    }
  }

  p {
    text-align: center;
    font-size: 18px;
    padding: 15px 25px 10px;
    display: block;
    max-width: 330px;
    margin: 0 auto;
    color: ${({ theme }) => theme.pink};
    font-family: 'Uxum';
    @media screen and (min-width: 768px) {
      padding: 30px 25px 15px;
      font-size: 36px;
      max-width: 630px;
    }
  }
`;

export const HeroGPS = styled.section`
  position: relative;
  z-index: 2;
  background: url(/images/bg/white.jpg) repeat;
  padding: 0;
  &:before {
    content: '';
    display: block;
    position: absolute;
    width: 300px;
    height: 320px;
    right: -100px;
    bottom: -135px;
    background: url(/images/gps/simbolo-gradiente.png) no-repeat;
    background-size: 100%;
    z-index: 5;

    @media screen and (min-width: 1024px) {
      width: 850px;
      height: 950px;
      right: -300px;
      bottom: -420px;
      z-index: 1;
    }
  }
`;

export const HeroGPSCompra = styled.section`
  position: relative;
  z-index: 2;
  background: url(/images/bg/blue.jpg) repeat;
  padding: 0 0 60px;
`;

export const ImagemHero = styled.div`
  margin: 0 auto;
  z-index: 3;
  position: relative;
  img {
    max-width: 450px;
    margin: 50px auto 0;
    display: block;
    min-height: 220px;
    width: 100%;
    @media screen and (min-width: 768px) {
      min-width: 450px;
      min-height: 320px;
    }
  }
`;

export const Headline = styled.div`
  position: relative;
  text-align: center;
  z-index: 1;
  margin: 0 auto;

  h2 {
    margin: 0 auto;
    color: ${({ theme }) => theme.yellow};
    font-size: 24px;
    span {
      max-width: 250px;
      line-height: 100%;
    }
  }

  h3 {
    margin: 0 auto;
    color: ${({ theme }) => theme.yellow};
    font-size: 21px;
    span {
      max-width: 250px;
      line-height: 100%;
    }
  }

  p {
    line-height: 130%;
    font-size: 16px;
    color: ${({ theme }) => theme.white};

    strong {
      font-family: 'Uxum';
    }
  }

  @media screen and (max-width: 768px) {
    max-width: 500px;
    padding: 0;
    margin: 0 auto 30px;
  }

  @media screen and (min-width: 768px) {
    max-width: 900px;
    padding: 0 50px 0;
    min-width: 500px;
    h2 {
      max-width: inherit;
      font-size: 36px;
      span {
        max-width: inherit;
      }
    }
    h3 {
      max-width: inherit;
      font-size: 32px;
      span {
        max-width: inherit;
      }
    }
    p {
      font-size: 21px;
      strong {
        display: inline;
      }
    }
  }
`;

export const HeadlineListaVIP = styled.div`
  position: relative;
  text-align: left;
  z-index: 1;
  margin: 0 auto;

  h2 {
    margin: 0 auto;
    color: ${({ theme }) => theme.yellow};
    font-size: 24px;
    span {
      max-width: 250px;
      line-height: 100%;
      border-bottom: 3px solid ${({ theme }) => theme.pink};
    }
  }

  p {
    line-height: 130%;
    font-size: 16px;
    color: ${({ theme }) => theme.blue};

    strong {
      font-family: 'Uxum';
    }
  }

  ul {
    padding: 5px 20px 10px;
    li {
      color: ${({ theme }) => theme.yellow};
      p {
      }
    }
  }

  @media screen and (max-width: 768px) {
    max-width: 500px;
    padding: 0;
    margin: 0 auto 30px;
  }

  @media screen and (min-width: 768px) {
    max-width: 900px;
    padding: 0 50px 0;
    min-width: 600px;
    h2 {
      max-width: inherit;
      font-size: 28px;
      span {
        max-width: inherit;
      }
    }
    ul {
      li {
        p {
          font-size: 18px;
        }
      }
    }
    p {
      font-size: 18px;
      strong {
        display: inline;
      }
    }
  }
`;

export const Confirmacao = styled.div`
  position: relative;
  text-align: center;
  z-index: 1;
  margin: 0 auto 50px;

  h2 {
    margin: 0 auto;
    color: ${({ theme }) => theme.yellow};
    font-size: 24px;
    span {
      max-width: 250px;
      line-height: 100%;
    }
  }

  figure {
    margin: 0;
    @media screen and (min-width: 768px) {
      display: flex;
      figcaption {
        padding: 60px 0 0;
      }
    }

    img {
      max-width: 350px;
      width: 100%;
    }
  }

  p {
    line-height: 130%;
    font-size: 21px;
    color: ${({ theme }) => theme.white};

    strong {
      display: block;
      padding: 10px 0 0;
    }
  }

  @media screen and (min-width: 768px) {
    max-width: 860px;
    padding: 0 50px 0;

    h2 {
      max-width: inherit;
      font-size: 32px;
      span {
        max-width: inherit;
      }
    }

    p {
      font-size: 21px;
      strong {
        display: inline;
      }
    }
  }
`;

export const BulletPoints = styled.div`
  position: relative;
  z-index: 1;
  margin: 0 auto;
  padding: 55px 0 30px;
  background: url(/images/bg/yellow.jpg) repeat;

  @media screen and (min-width: 768px) {
    padding: 30px 0;
    font-size: 21px;
  }

  ul {
    margin: 0 0 50px 0;
    padding: 0;
    li {
      list-style: none;
      position: relative;

      p {
        font-size: 18px;
        color: ${({ theme }) => theme.blue};
        @media screen and (min-width: 768px) {
          font-size: 21px;
        }

        strong {
          font-family: 'Uxum';
        }
      }

      figure {
        padding: 0;
        margin: 0 auto;

        @media screen and (min-width: 1024px) {
          display: flex;
          margin: 0;
        }

        img {
          max-width: 300px;
          margin: 0 auto;
          display: block;
        }
        figcaption {
          padding: 10px;
          @media screen and (min-width: 1024px) {
            padding: 50px 20px;
          }
          p {
            position: relative;
            padding: 0 0 0 35px;
            &:before {
              content: '';
              display: block;
              position: absolute;
              width: 32px;
              height: 32px;
              left: 0;
              top: -3px;
              background: url('/images/gps/icon-bullet-azul.svg') no-repeat;
              background-size: 100%;
            }
          }
        }
      }
    }
  }

  button {
    margin: 0 auto -50px;
    display: block;
  }
`;

export const HeadingH2 = styled.h2`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 32px;
  margin: 0;
  line-height: 100%;
  color: ${({ theme }) => theme.blue};

  background: ;

  @media screen and (min-width: 768px) {
    font-size: 44px;
  }

  span {
    display: block;
    background: ${({ theme }) => theme.yellow};
  }

  small {
    font-weight: normal;
    font-size: 22px;
    padding: 15px 0;
    text-align: center;
    margin: 0 50px;

    @media screen and (min-width: 768px) {
      font-size: 24px;
    }
  }
`;

export const Ementa = styled.section`
  background: ${({ theme }) => theme.pink};
  position: relative;
  z-index: 3;
  padding: 50px 0;
  h2 {
    margin: 30px auto 50px;
  }

  figure {
    img {
      max-width: 100%;
    }
  }

  article img {
    display: none;
  }

  p {
    font-size: 21px;
    color: ${({ theme }) => theme.blue};

    strong {
      font-family: 'Uxum';
    }
  }

  @media screen and (max-width: 768px) {
    margin: 100px 0 0;
  }

  @media screen and (min-width: 768px) {
    figure {
      display: flex;
      padding: 0;
    }
  }

  button {
    display: block;
    margin: 50px auto -80px;
  }
`;

export const Topicos = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;

  h4 {
    color: ${({ theme }) => theme.yellow};
  }

  p {
    margin: 0 0 20px;
  }

  em {
    font-style: italic;
  }

  strong {
    font-family: 'Uxum';
    margin-top: 15px;
  }
`;

export const Objetivos = styled.section`
  background: ${({ theme }) => theme.blue};
  position: relative;
  padding: 100px 0;

  @media screen and (max-width: 768px) {
    padding: 50px 0 150px;
  }

  h3 {
    margin: 0;
    color: ${({ theme }) => theme.pink};
    font-size: 24px;
    @media screen and (min-width: 768px) {
      font-size: 36px;
    }
  }

  ul {
    list-style: none;
    padding: 0;
    li {
      p {
        font-size: 18px;
        color: ${({ theme }) => theme.white};
      }
    }
  }
`;

export const Autora = styled.section`
  position: relative;
  z-index: 2;

  margin: 180px 0 20px;

  .foto-margin {
    @media screen and (max-width: 768px) {
      margin: -270px 0 40px;
    }
  }

  figure {
    max-width: 1080px;
    margin: 0 auto;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 768px) {
      flex-direction: column;
    }

    img {
      position: relative;
      z-index: 1;
      max-width: 450px;
      border-radius: 250px;
      border: 3px dashed ${({ theme }) => theme.yellow};

      @media screen and (max-width: 768px) {
        max-width: 250px;
        border-radius: 130px;
      }
    }

    figcaption {
      @media screen and (max-width: 768px) {
        padding: 0 20px;
      }

      span {
        display: block;
        padding: 3px 7px;
        background-color: ${({ theme }) => theme.lightBlue};
        color: ${({ theme }) => theme.blue};
        font-size: 18px;
        width: 250px;
        text-align: center;
        border-radius: 10px;
        font-weight: bold;

        @media screen and (max-width: 768px) {
          font-size: 16px;
          width: 220px;
        }
      }
      h4 {
        margin: 10px 0 0;
        font-size: 45px;
        color: ${({ theme }) => theme.yellow};

        @media screen and (max-width: 768px) {
          font-size: 34px;
        }
      }

      p {
        font-size: 22px;
        max-width: 540px;
        line-height: 120%;
        color: ${({ theme }) => theme.blue};

        @media screen and (max-width: 768px) {
          font-size: 16px;
        }
      }
    }
  }

  .btn-wrapper {
    display: flex;
    justify-content: center;
    margin: 50px auto -155px;
    @media screen and (min-width: 768px) {
      margin: 20px auto -155px;
    }
  }
`;

export const Hacks = styled.section`
  position: relative;
  z-index: 2;
  background: url(/images/bg/yellow.jpg) repeat;
  margin: 150px 0 0;
  display: block;
  padding: 50px 0;

  @media screen and (min-width: 768px) {
    margin: 150px 0 0;
  }

  h3 {
    color: ${({ theme }) => theme.blue};
    font-size: 24px;
    @media screen and (min-width: 768px) {
      font-size: 36px;
    }
  }
  figure {
    margin: 0;

    img {
      max-width: 50px;
    }
    figcaption {
      color: ${({ theme }) => theme.blue};

      p {
        font-size: 18px;
        padding: 0;
        @media screen and (min-width: 768px) {
          font-size: 21px;
          padding: 0 0 20px;
        }
      }
    }
  }
`;

export const SobreGPS = styled.section`
  position: relative;
  z-index: 1;
  padding: 80px 0;
  text-align: center;
  background: url(/images/bg/blue.jpg) repeat;

  h2 {
    color: ${({ theme }) => theme.pink};
  }

  figure {
    display: block;

    margin: 0 auto 30px;
    text-align: left;
    img {
      max-width: 100%;
    }
    @media screen and (min-width: 768px) {
      max-width: inherit;
      display: flex;
      justify-content: space-around;
      img {
        max-width: 500px;
      }
    }
    figcaption {
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        li {
          position: relative;
          font-size: 18px;
          padding: 10px 0 10px 35px;
          color: ${({ theme }) => theme.white};
          &:before {
            content: '';
            display: block;
            position: absolute;
            width: 32px;
            height: 32px;
            left: 0;
            top: 10px;
            background: url('/images/gps/icon-bullet-white.svg') no-repeat;
            background-size: 100%;
          }
          strong {
            font-family: 'Uxum';
          }
        }
        @media screen and (min-width: 768px) {
          padding: 40px 0;
        }
      }
    }
  }
`;

export const Publico = styled.section`
  position: relative;
  z-index: 1;
  margin: 80px auto;
  text-align: center;

  .publico {
    display: block;
    max-width: 320px;
    margin: 20px auto 30px;
    text-align: left;

    img {
      max-width: 80%;
      margin: 30px 10% 0;
    }
    @media screen and (min-width: 768px) {
      max-width: inherit;
      display: flex;
      justify-content: space-around;
      img {
        max-width: 90%;
        margin: 0;
      }
    }

    aside {
      max-width: 500px;
    }
  }

  ul {
    list-style: none;
    margin: 30px 0;
    padding: 0;
    li {
      font-size: 18px;
      color: ${({ theme }) => theme.blue};
      margin: 15px 0;
      strong {
        font-family: 'uxum';
      }
      @media screen and (min-width: 768px) {
        font-size: 21px;
      }
    }
    @media screen and (min-width: 768px) {
      margin: 30px 0;
      padding: 0 0 0 10px;
    }
  }
`;

export const DevPerdido = styled.section`
  position: relative;
  z-index: 1;
  margin: 80px auto;
  text-align: center;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

export const BoxInfo = styled.div`
  margin: 5px 10px 50px;
  padding: 20px 10px;
  background: ${({ theme }) => theme.white};
  border-radius: 5px;
  font-size: 16px;
  color: ${({ theme }) => theme.blue};

  p {
    margin: 0 0 5px;
  }

  .title {
    color: ${({ theme }) => theme.pink};
    font-family: 'Uxum';
    font-weight: bold;
    text-decoration: none;
    font-size: 21px;
    padding: 10px;
    @media screen and (min-width: 768px) {
      font-size: 21px;
    }
  }

  img {
    max-width: 80px;
    margin: -50px auto 20px;
    border-radius: 40px;
  }

  ul {
    padding: 0 20px;
    li {
      list-style: none;
      border-bottom: 1px solid #ede;
      padding: 10px 5px 5px;
    }
  }
`;

export const Conexao = styled.section`
  position: relative;
  z-index: 1;
  margin: 80px auto;
  text-align: center;

  h3 {
    color: ${({ theme }) => theme.pink};
    font-size: 24px;
    @media screen and (min-width: 768px) {
      font-size: 36px;
    }
  }

  p {
    color: ${({ theme }) => theme.blue};
    strong {
      font-family: 'Uxum';
    }
    font-size: 18px;
    @media screen and (min-width: 768px) {
      font-size: 21px;
    }
  }

  figure {
    margin: 40px 0;
    img {
      border-radius: 2px;
      box-shadow: 5px 5px 0px 0px ${({ theme }) => theme.yellow};
      max-width: 100%;
    }
    figcaption {
      padding: 0 10px;
      text-align: left;
    }
    @media screen and (min-width: 768px) {
      display: flex;
      figcaption {
        padding: 0 30px;
      }
    }
  }
`;

export const Beneficios = styled.section`
  margin: 50px 0 80px;
  background: ${({ theme }) => theme.yellow};
  color: ${({ theme }) => theme.blue};

  ul {
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    max-width: 300px;
    margin: 0 auto;

    @media screen and (min-width: 768px) {
      flex-wrap: nowrap;
      max-width: inherit;
    }

    li {
      list-style: none;
      padding: 0 10px;

      @media screen and (min-width: 768px) {
        padding: 0 30px;
      }

      p {
        margin: 10px 0;
        font-size: 22px;
        text-transform: uppercase;
        text-align: center;
        font-weight: bold;
        font-family: 'Uxum';

        @media screen and (min-width: 768px) {
          margin: 30px 0;
          font-size: 44px;
        }

        span {
          font-size: 26px;

          @media screen and (min-width: 768px) {
            font-size: 85px;
          }
        }

        small {
          font-size: 16px;
          display: block;

          @media screen and (min-width: 768px) {
            font-size: 22px;
          }
        }
      }
    }
  }
`;

export const Depoimentos = styled.section`
  position: relative;
  z-index: 1;
  padding: 100px 0 50px;
`;

export const ProvaSocial = styled.div`
  margin: 50px 0;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;

    @media screen and (max-width: 768px) {
      display: block;
    }

    li {
      max-width: 33%;
      display: inline-block;

      @media screen and (max-width: 768px) {
        max-width: 65%;
        margin: 0 auto;
        display: block;
      }

      img {
        max-width: 97%;
        border-radius: 20px;
        margin: 5px 0;
        filter: grayscale(0.7);
      }
    }
  }
`;

export const Bonus = styled.section`
  position: relative;
  z-index: 1;
  padding: 50px 0;
  text-align: center;
  background: url(/images/bg/yellow.jpg) repeat;

  h3 {
    color: ${({ theme }) => theme.pink};
    font-size: 21px;
    @media screen and (min-width: 768px) {
      font-size: 36px;
    }
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      font-size: 18px;
      padding: 10px 0;
      color: ${({ theme }) => theme.blue};

      @media screen and (min-width: 768px) {
        display: inline-block;
        figure {
          padding: 0;
        }
      }

      @media screen and (max-width: 768px) {
        figure {
          br {
            display: none;
          }
        }
      }

      figure {
        max-width: 420px;
        img {
          max-width: 100%;
        }
      }

      h4 {
        position: relative;
        &:before {
          content: '';
          display: inline-block;
          width: 32px;
          height: 32px;
          margin: 0 0 -10px 0;
          background: url('/images/gps/icon-bullet-azul.svg') no-repeat;
          background-size: 100%;
        }
      }

      p {
        strong {
          font-family: 'Uxum';
          font-weight: bold;
        }
        span {
          font-family: 'Uxum';
          font-weight: bold;
          color: ${({ theme }) => theme.pink};
          @media screen and (max-width: 640px) {
            display: block;
          }
        }
      }
    }
  }
`;

export const Video = styled.div`
  margin: 0 auto 150px;
  z-index: 5;
  position: relative;
  @media screen and (max-width: 768px) {
    margin: 0 auto 50px;
  }
  iframe {
    max-width: 100%;
    margin: 0 auto;
    display: block;
    min-height: 220px;
    @media screen and (min-width: 768px) {
      min-width: 570px;
      min-height: 320px;
    }
  }
`;

export const Price = styled.section`
  position: relative;
  padding: 50px 0 120px;
  background: ${({ theme }) => theme.blue};
  color: ${({ theme }) => theme.white};
  margin: 0;

  &:after {
    position: absolute;
    top: -7px;
    content: '';
    display: block;
    width: 100%;
    height: 3px;
    background: url('/images/icones/separador-amarelo.svg') center repeat-x;
  }

  h2 {
    color: ${({ theme }) => theme.lightBlue};
    span {
      color: ${({ theme }) => theme.blue};
      background: ${({ theme }) => theme.lightBlue};
    }
  }

  button {
    margin: 0 auto -130px;
    display: block;
  }

  .cadastro {
    margin: 80px 0;
    font-size: 18px;
    strong {
      color: ${({ theme }) => theme.yellow};
      font-family: 'Uxum';
    }
    @media screen and (min-width: 768px) {
      display: flex;
      align-items: center;
      aside {
        max-width: 600px;
      }
    }
  }
`;

export const PriceDescription = styled.div`
  max-width: 680px;
  margin: 50px auto;
  justify-content: space-between;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const PriceDescriptionVIP = styled.div`
  max-width: 480px;
  margin: 50px auto;
  text-align: center;

  @media screen and (min-width: 768px) {
  }
`;

export const Valor = styled.div`
  margin: 0 auto 50px;

  p {
    color: ${({ theme }) => theme.lightBlue};
    font-size: 32px;
    text-transform: uppercase;
    margin: 0 0 -20px;
  }

  h5 {
    display: flex;
    align-items: center;
    margin: 0;
    color: ${({ theme }) => theme.yellow};
    font-size: 136px;

    span {
      font-size: 32px;
      font-weight: normal;
    }

    small {
      font-size: 32px;
      margin: 70px 0 0;
    }
  }

  .total {
    color: ${({ theme }) => theme.yellow};
    text-align: center;
    font-size: 21px;
    text-transform: none;
  }
`;

export const ValorVIP = styled.div`
  margin: 0 auto 50px;

  p {
    color: ${({ theme }) => theme.white};
    font-size: 18px;
    text-transform: uppercase;
    margin: 0;
  }

  h5 {
    margin: 0;
    color: ${({ theme }) => theme.yellow};
    font-size: 56px;
  }

  .total {
    color: ${({ theme }) => theme.pink};
    text-align: center;
    font-size: 18px;
    text-transform: none;
    margin: 0 0 10px;
  }
`;

export const Pacote = styled.aside`
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
  }

  aside {
    font-size: 18px;
    margin: 15px 0 5px;
    padding-right: 10px;
    color: ${({ theme }) => theme.white};
    strong {
      color: ${({ theme }) => theme.pink};
      font-family: 'Uxum';
    }
    hr {
      color: ${({ theme }) => theme.pink};
    }
  }

  h3 {
    display: inline-block;
    margin: 0 0 10px;
    padding: 2px 5px 0;
    color: ${({ theme }) => theme.yellow};
    font-size: 24px;
    @media screen and (min-width: 768px) {
      font-size: 36px;
    }
  }

  h5 {
    max-width: 600px;
    margin: 60px auto 0;
    font-size: 24px;
    text-align: center;
    color: ${({ theme }) => theme.pink};
    span {
      color: ${({ theme }) => theme.yellow};
    }
  }

  ul {
    padding: 15px 30px;
    margin: 0;
    border-radius: 5px;
    border: 3px solid ${({ theme }) => theme.pink};

    @media screen and (min-width: 768px) {
      min-width: 720px;
    }

    li {
      list-style: none;
      p {
        font-size: 18px;
        margin: 15px 0 5px;
        color: ${({ theme }) => theme.white};
        span {
          @media screen and (max-width: 768px) {
            display: block;
          }
        }
      }
    }
  }

  h4 {
    color: ${({ theme }) => theme.pink};
    font-size: 24px;
    margin: 30px 0 0;
    span {
      display: block;
      font-size: 80%;
      color: ${({ theme }) => theme.white};
    }
  }

  p {
    margin: 20px 0;
  }
`;

export const Garantia = styled.section`
  margin: 150px 0 100px;
  display: block;

  p {
    color: ${({ theme }) => theme.blue};
    font-size: 21px;
    strong {
      font-family: 'Uxum';
    }
  }
`;

export const Faq = styled.section`
  margin: 80px 0;
  display: block;
  .instrucao {
    font-size: 16px;
    color: ${({ theme }) => theme.blue};
    text-align: center;
    margin: 10px 0 30px;
  }
`;

export const Footer = styled.footer`
  padding: 120px 0 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  img {
    max-width: 260px;
    margin: 0 auto;
  }
`;

export const ButtonYellow = styled.button`
  width: 270px;
  height: 60px;
  padding: 14px;
  border: none;
  border-radius: 10px;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: bold;
  font-family: 'Uxum';
  cursor: pointer;
  background: ${({ theme }) => theme.yellow};
  color: ${({ theme }) => theme.blue};
  border: 2px solid ${({ theme }) => theme.yellow};
  transition: background 0.3s linear, border 0.3s linear;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.4);
  border-bottom: 4px solid ${({ theme }) => theme.yellow};

  &:hover {
    box-shadow: 0 0 rgba(0, 0, 0, 0.4);
    border-bottom-width: 2px;
    transform: translateY(2px);
  }

  @media screen and (min-width: 768px) {
    width: 320px;
    font-size: 24px;
  }
`;

export const ButtonPink = styled.button`
  width: 270px;
  height: 60px;
  padding: 14px;
  border: none;
  border-radius: 10px;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: bold;
  font-family: 'Uxum';
  cursor: pointer;
  background: ${({ theme }) => theme.pink};
  color: ${({ theme }) => theme.blue};
  border: 2px solid ${({ theme }) => theme.pink};
  transition: background 0.3s linear, border 0.3s linear;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.4);
  border-bottom: 4px solid ${({ theme }) => theme.pink};

  &:hover {
    box-shadow: 0 0 rgba(0, 0, 0, 0.4);
    border-bottom-width: 2px;
    transform: translateY(2px);
  }

  @media screen and (min-width: 768px) {
    width: 320px;
    font-size: 24px;
  }
`;

export const Sticky = styled.div`
  position: fixed;
  z-index: 9999;
  width: 100%;
  bottom: 0;
  padding: 12px 0;
  background: ${({ theme }) => theme.pink};
  opacity: 0;
  transition: all 0.2s linear;
  box-shadow: 0px -3px 5px 0px rgba(0, 0, 0, 0.2);

  @media screen and (min-width: 768px) {
    bottom: inherit;
    top: 0;
    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.2);
  }

  &.show {
    opacity: 1;
  }

  aside {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 25px;
  }

  p {
    display: inline-block;
    font-size: 16px;
    font-weight: bold;
    font-family: 'Uxum';
    color: ${({ theme }) => theme.blue};
    margin: 0 20px 0 0;
    padding: 0;

    @media screen and (min-width: 768px) {
      font-size: 21px;
    }
  }

  button {
    min-width: 150px;
    padding: 5px;
    border: none;
    border-radius: 5px;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: bold;
    font-family: 'Uxum';
    cursor: pointer;
    background: ${({ theme }) => theme.yellow};
    color: ${({ theme }) => theme.blue};
    border: 2px solid ${({ theme }) => theme.yellow};
    transition: background 0.3s linear, border 0.3s linear;
    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.4);
    border-bottom: 4px solid ${({ theme }) => theme.yellow};

    &:hover {
      box-shadow: 0 0 rgba(0, 0, 0, 0.4);
      border-bottom-width: 2px;
      transform: translateY(2px);
    }
  }
`;
