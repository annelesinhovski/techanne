import styled from 'styled-components';

export const PageCadastro = styled.div`
  background-color: ${({ theme }) => theme.white};
  min-height: 100vh;
`;

export const PageConfirmacao = styled.div`
  background-color: ${({ theme }) => theme.white};
  min-height: 100vh;
`;

export const PageGPS = styled.div`
  background-color: ${({ theme }) => theme.white};
  min-height: 100vh;
`;

export const Wrapper = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 20px;
  display: block;
`;

export const Slogan = styled.p`
  font-size: 14px;
  text-align: center;
  text-transform: uppercase;
  color: ${({ theme }) => theme.blue};

  @media screen and (min-width: 360px) {
    font-size: 16px;
  }

  strong {
    display: block;
    font-size: 18px;

    @media screen and (min-width: 360px) {
      font-size: 20px;
    }

    @media screen and (min-width: 768px) {
      font-size: 24px;
    }
  }
`;

export const Header = styled.header`
  position: relative;
  z-index: 1;
  margin: 0 auto;
  padding: 30px;
  font-family: 'Uxum';

  h1 {
    display: block;
    margin: 0 auto;
    width: 250px;
    height: 65px;
    background: url(/images/logo-tech-path-horizontal-azul.svg) no-repeat;
    background-size: 100%;
    font-size: 0;

    @media screen and (min-width: 360px) {
      width: 300px;
      height: 90px;
    }

    @media screen and (min-width: 768px) {
      width: 387px;
      height: 120px;
    }
  }

  span {
    display: block;
    margin: 10px auto 0;
    text-transform: uppercase;
    text-align: center;
    font-weight: bold;
    font-size: 24px;
    color: ${({ theme }) => theme.yellow};

    @media screen and (max-width: 768px) {
      font-size: 20px;
    }
  }
`;

export const HeaderGPS = styled.header`
  position: relative;
  z-index: 1;
  margin: 0 auto;
  padding: 30px;
  background: url(/images/bg/blue.jpg) repeat;

  h1 {
    display: block;
    margin: 0 auto;
    width: 250px;
    height: 65px;
    background: url(/images/gps/logo-principal.png) no-repeat;
    background-size: 100%;
    font-size: 0;

    @media screen and (min-width: 360px) {
      width: 300px;
      height: 75px;
    }

    @media screen and (min-width: 768px) {
      width: 400px;
      height: 100px;
    }
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

export const HeadingH3 = styled.h3`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 24px;
  margin: 25px 0 0;
  line-height: 100%;
  color: ${({ theme }) => theme.pink};

  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`;

export const Cadastro = styled.section`
  position: relative;
  z-index: 1;
  margin: 10px auto 80px;
  color: ${({ theme }) => theme.blue};

  @media screen and (min-width: 768px) {
    display: flex;
    margin: 20px auto 80px;
    justify-content: space-between;
  }
`;

export const Chamada = styled.div`
  text-align: center;

  h2 {
    span {
      max-width: 250px;
      line-height: 100%;
    }
  }

  p {
    font-size: 20px;
  }

  @media screen and (min-width: 768px) {
    max-width: 580px;
    h2 {
      span {
        max-width: inherit;
      }
    }
    p {
      font-size: 24px;
    }
  }
`;

export const Data = styled.div`
  font-size: 24px;
  font-weight: bold;
  display: block;
  margin: 0 auto;
  max-width: 320px;
  text-align: center;
  background: ${({ theme }) => theme.lightBlue};

  @media screen and (max-width: 360px) {
    span {
      display: block;
    }
  }

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Ementa = styled.section`
  position: relative;
  z-index: 3;
  margin: 50px 0;

  h2 {
    margin: 30px auto 50px;
  }

  @media screen and (max-width: 768px) {
    margin: 100px 0 150px;
  }

  .btn-wrapper {
    display: flex;
    justify-content: center;
    margin: 0 auto 200px;
    @media screen and (min-width: 768px) {
      margin: 60px auto 0;
    }
  }
`;

export const Topicos = styled.div`
  display: flex;
  justify-content: center;
`;

export const Message = styled.div`
  margin: 20px auto 50px;
  color: ${({ theme }) => theme.blue};
  max-width: 600px;

  @media screen and (max-width: 768px) {
    max-width: 280px;
  }

  h3 {
    font-size: 36px;
    span {
      color: ${({ theme }) => theme.yellow};
    }

    @media screen and (max-width: 768px) {
      font-size: 24px;
    }
  }

  p {
    font-size: 24px;
    @media screen and (max-width: 768px) {
      font-size: 18px;
    }
  }
`;

export const Autora = styled.section`
  position: relative;
  z-index: 2;
  padding: 80px 0;
  background: ${({ theme }) => theme.blue};
  color: ${({ theme }) => theme.white};
  margin: 50px 0 0;

  &:after {
    position: absolute;
    top: -7px;
    content: '';
    display: block;
    width: 100%;
    height: 3px;
    background: url('/images/icones/separador-amarelo.svg') center repeat-x;
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
        margin: -220px 0 30px;
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
        width: 155px;
        text-align: center;
        border-radius: 10px;
        font-weight: bold;

        @media screen and (max-width: 768px) {
          font-size: 16px;
          width: 145px;
        }
      }
      h4 {
        margin: 20px 0 0;
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

export const Hero = styled.section`
  position: relative;
  z-index: 1;
  @media screen and (min-width: 980px) {
    display: flex;
  }
`;

export const HeroGPS = styled.section`
  position: relative;
  z-index: 1;
  background: url(/images/bg/blue.jpg) repeat;

  .flex {
    display: flex;
  }
`;

export const Headline = styled.div`
  position: relative;
  text-align: center;
  z-index: 1;
  margin: 0 auto 50px;

  h2 {
    max-width: 280px;
    margin: 0 auto;
    span {
      max-width: 280px;
      line-height: 100%;
    }
  }

  p {
    line-height: 130%;
    font-size: 18px;
    color: ${({ theme }) => theme.blue};

    strong {
      display: block;
      padding: 10px 0 0;
    }
  }

  @media screen and (min-width: 768px) {
    max-width: 500px;
    h2 {
      max-width: inherit;
      font-size: 36px;
      span {
        max-width: inherit;
      }
    }
    p {
      font-size: 24px;
      strong {
        display: inline;
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
    max-width: 260px;
    margin: 0 auto 30px;
    text-align: left;
    @media screen and (min-width: 768px) {
      max-width: inherit;
      display: flex;
      justify-content: space-around;
    }

    aside {
      max-width: 500px;
    }
  }

  h3 {
    max-width: 450px;
    text-transform: uppercase;
    font-size: 32px;
    color: ${({ theme }) => theme.yellow};

    @media screen and (min-width: 768px) {
      font-size: 52px;
      margin: 30px 0;
    }
  }

  h4 {
    display: block;
    margin: 30px auto;
    text-align: center;
    font-size: 0;
    width: 270px;
    height: 175px;
    background: url('/images/techpath/letreiro-mobile.png') no-repeat;
    background-size: 100%;

    @media screen and (min-width: 768px) {
      width: 550px;
      height: 150px;
      background: url('/images/techpath/letreiro.png') no-repeat;
      background-size: 100%;
    }
  }

  p {
    font-size: 18px;
    color: ${({ theme }) => theme.blue};
    @media screen and (min-width: 768px) {
      font-size: 24px;
    }
  }

  .btn-wrapper {
    display: block;
    color: ${({ theme }) => theme.blue};
    
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
  padding: 150px 0 50px;
  background: url(/images/bg-organic.svg) no-repeat top 80px left -700px;

  @media screen and (min-width: 768px) {
    background: url(/images/bg-organic.svg) no-repeat top -100px left -480px;
  }

  .btn-wrapper {
    display: flex;
    justify-content: center;
  }
`;

export const ProvaSocial = styled.div`
  margin: 50px 0;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const Video = styled.div`
  margin: 0 auto 50px;
  iframe {
    max-width: 100%;
    margin: 0 auto;
    display: block;
  }
`;

export const Carousel = styled.div`
  max-width: 580px;
  margin: 0 auto 50px;
  padding: 0 20px;

  div {
    figure {
      padding: 0 20px;
      display: flex;
      align-items: center;
      margin: 0 0 10px;

      img {
        max-width: 80px;
        border-radius: 100px;
        border: 5px solid ${({ theme }) => theme.yellow};
      }

      figcaption {
        color: ${({ theme }) => theme.blue};
        p {
          margin: 0 0 0 20px;
          font-size: 24px;
          font-weight: bold;
          small {
            display: block;
            font-size: 18px;
            font-weight: normal;
          }
        }
      }
    }

    aside {
      padding: 0 20px;
      color: ${({ theme }) => theme.blue};
      line-height: 120%;
      margin: 0 0 40px;
    }
  }
`;

export const Price = styled.section`
  position: relative;
  padding: 100px 0 30px;
  background: ${({ theme }) => theme.blue};
  color: ${({ theme }) => theme.white};
  margin: 0;

  @media screen and (min-width: 768px) {
    padding: 100px 0 50px;
  }

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

  .btn-wrapper {
    display: flex;
    justify-content: center;
    margin: 50px auto -175px;
    @media screen and (min-width: 768px) {
      margin: 20px auto -175px;
    }
  }
`;

export const PriceDescription = styled.div`
  max-width: 1080px;
  margin: 50px auto;
  justify-content: space-between;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Valor = styled.div`
  margin: 0 auto 50px;

  .bonus {
    display: block;
    text-align: center;
    margin: 10px 0;
  }

  p {
    color: ${({ theme }) => theme.lightBlue};
    font-size: 22px;
    text-transform: uppercase;
    margin: 0;

    strike {
      display: block;
      padding: 5px 0;
    }
  }

  h5 {
    display: flex;
    align-items: center;
    margin: 0;
    color: ${({ theme }) => theme.yellow};
    font-size: 136px;

    span {
      font-size: 24px;
      font-weight: normal;
    }

    small {
      font-size: 24px;
      margin: 70px 0 0 -20px;
    }
  }
`;

export const Pacote = styled.aside`
  margin: 0 auto;

  h6 {
    display: inline-block;
    margin: 0 0 10px;
    padding: 2px 5px 0;
    text-transform: uppercase;
    font-size: 24px;
    background: ${({ theme }) => theme.yellow};
    color: ${({ theme }) => theme.blue};
  }

  ul {
    max-width: 280px;
    padding: 0 15px;

    @media screen and (min-width: 768px) {
      max-width: 350px;
    }

    li {
      p {
        font-size: 18px;
        margin: 15px 0 5px;
      }

      small {
        font-size: 14px;
      }
    }
  }
`;

export const Footer = styled.footer`
  padding: 120px 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  img {
    max-width: 260px;
    margin: 0 auto;
  }
`;

// Lista de espera

export const PageLista = styled.div`
  background-color: ${({ theme }) => theme.blue};
  min-height: 100vh;
  color: ${({ theme }) => theme.white};

  &:before {
    content: '';
    position: absolute;
    display: block;
    width: 948px;
    height: 1068px;
    // background: url(/images/bg-organic.svg) no-repeat -480px -100px;
    background: url(/images/bg-organic-yellow.svg) no-repeat;
    z-index: 1;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;

export const HeaderLista = styled.header`
  position: relative;
  z-index: 1;
  margin: 0 auto;
  padding: 30px;
  font-family: 'Uxum';

  h1 {
    display: block;
    margin: 0 auto;
    width: 150px;
    height: 75px;
    background: url(/images/logo-tech-path-horizontal-amarela.svg) no-repeat;
    background-size: 100%;
    font-size: 0;

    @media screen and (min-width: 360px) {
      width: 200px;
      height: 100px;
    }

    @media screen and (min-width: 768px) {
      width: 250px;
      height: 120px;
    }
  }

  span {
    display: block;
    margin: 10px auto 0;
    text-transform: uppercase;
    text-align: center;
    font-weight: bold;
    font-size: 22px;
    color: ${({ theme }) => theme.yellow};

    @media screen and (max-width: 768px) {
      font-size: 18px;
    }
  }
`;

export const FotoDestaque = styled.figure`
  z-index: 4;
  position: relative;
  width: 450px;
  img {
    width: 100%;
    border-radius: 5px;
  }

  @media screen and (max-width: 768px) {
    max-width: 250px;
    margin: 0 auto;
    img {
      width: 100%;
      border-radius: 50px;
      margin: 50px 0 0 0;
    }
  }
`;

export const ListadeEspera = styled.div`
  z-index: 4;
  position: relative;
  padding: 20px 0 0;
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }

  h2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 32px;
    margin: 0;
    line-height: 100%;
    color: ${({ theme }) => theme.white};

    background: ;

    @media screen and (min-width: 768px) {
      font-size: 38px;
      span {
        font-size: 48px;
      }
    }

    span {
      display: block;
      margin: 5px 0;
      padding: 2px 5px;
      background: ${({ theme }) => theme.yellow};
      color: ${({ theme }) => theme.blue};
    }
  }

  h3 {
    color: ${({ theme }) => theme.yellow};
    font-size: 24px;
  }

  aside {
    max-width: 600px;
    text-align: center;
    color: ${({ theme }) => theme.white};
    p {
      font-size: 24px;
    }
  }
`;

export const Formulario = styled.div`
  position: relative;
  margin: 30px 0 0;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  z-index: 1;

  @media screen and (min-width: 768px) {
    min-width: 480px;
    margin: 0;
  }

  form {
    min-width: 260px;
    padding: 0 15px;

    @media screen and (min-width: 768px) {
      padding: 0 30px;
    }

    legend {
      margin: 0 0 10px;
      color: ${({ theme }) => theme.blue};

      h3 {
        font-weight: bold;
        font-size: 22px;
        text-align: center;
        margin: 10px 0;

        @media screen and (min-width: 768px) {
          font-size: 36px;
        }
      }

      p {
        font-size: 13px;
      }
    }

    label {
      text-align: left;
      font-size: 18px;
      color: ${({ theme }) => theme.white};
      display: block;
      padding: 20px 0 5px;
      .asterisk {
        color: #f14951;
      }
    }

    input[type='text'],
    input[type='email'] {
      width: 100%;
      padding: 15px 10px;
      border-radius: 5px;
      border: 2px solid ${({ theme }) => theme.lightBlue};
      &.focus-visible {
        border: 2px solid ${({ theme }) => theme.yellow};
        outline: 1px solid ${({ theme }) => theme.yellow};
      }
    }

    button {
      position: relative;
      border: none;
      padding: 15px 0;
      margin: 20px 0;
      width: 100%;
      border-radius: 5px;
      font-family: 'Uxum';
      color: ${({ theme }) => theme.blue};
      background: ${({ theme }) => theme.yellow};
      text-transform: uppercase;
      font-weight: bold;
      font-size: 18px;
      cursor: pointer;
      &:disabled {
        color: ${({ theme }) => theme.blue};
        background: ${({ theme }) => theme.lightBlue};
        cursor: not-allowed;
        &:after {
          color: ${({ theme }) => theme.white};
          content: 'Preencha os campos acima para liberar a sua vaga!';
          display: block;
          position: absolute;
          top: 60px;
          font-size: 12px;
          text-align: center;
          width: 100%;
          font-family: 'Clear sans';
        }
      }
    }
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

export const BulletPoints = styled.div`
  position: relative;
  z-index: 1;
  margin: 0 auto 50px;
  padding: 30px 0 30px;
  background: url(/images/bg/yellow.jpg) repeat;

  @media screen and (min-width: 768px) {
    padding: 30px 0;
    font-size: 21px;
  }

  h3 {
    margin: 30px 0 30px;
  }

  p {
    font-size: 21px;
    color: ${({ theme }) => theme.blue};

    @media screen and (max-width: 768px) {
      font-size: 18px;
    }

    strong {
      font-family: 'Uxum';
    }
  }

  ul {
    margin: 0 0 50px 0;
    padding: 0;
    li {
      list-style: none;
      position: relative;
      padding: 0 0 0 30px;
      &:before {
        content: '';
        display: block;
        position: absolute;
        width: 24px;
        height: 24px;
        left: 0;
        top: 3px;
        background: url('/images/icones/ico-seta.svg') no-repeat;
        background-size: 100%;
      }
      p {
        a,
        span {
          color: ${({ theme }) => theme.pink};
          text-decoration: underline;
          cursor: pointer;
        }
      }
    }
  }

  button {
    margin: 0 auto -50px;
    display: block;
  }
`;

export const HeroMentoria = styled.section`
  position: relative;
  z-index: 2;
  background: url(/images/bg/white.jpg) repeat;
  padding: 0 0 30px;
`;
