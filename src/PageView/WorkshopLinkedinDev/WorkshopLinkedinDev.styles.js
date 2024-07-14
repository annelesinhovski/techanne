import styled from 'styled-components';

export const PageGPS = styled.div`
  background-color: ${({ theme }) => theme.white};
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

export const HeroGPS = styled.section`
  position: relative;
  z-index: 2;
  background: url(/images/bg/white.jpg) repeat;
  padding: 15px 0;
`;

export const InfosEvento = styled.ul`
  display: flex;
  list-style: none;
  padding: 30px 0;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    li {
      margin: 10px 0;
    }
  }

  li {
    figure {
      display: flex;
      align-items: center;
      margin: 0;
      img {
        max-width: 64px;
        margin: 0 10px 0 0;
      }
      figcaption {
        color: ${({ theme }) => theme.blue};
        font-family: 'Uxum';
        text-align: left;
        font-size: 18px;
        line-height: 150%;
        strong {
          display: block;
          color: ${({ theme }) => theme.pink};
        }
      }
    }
  }
`;

export const Headline = styled.div`
  position: relative;
  text-align: center;
  z-index: 1;
  margin: 30px auto;

  img {
    max-width: 250px;
  }

  h1 {
    margin: 0 auto;
    color: ${({ theme }) => theme.yellow};
    font-size: 24px;
    span {
      border-bottom: 4px solid ${({ theme }) => theme.pink};
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
    max-width: 380px;
    padding: 0;
    margin: 0 auto 30px;
  }

  @media screen and (min-width: 768px) {
    max-width: 900px;
    padding: 0 50px 0;

    img {
      max-width: 400px;
    }
    h1 {
      max-width: inherit;
      font-size: 28px;
    }

    p {
      font-size: 21px;
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
  background: url(/images/bg/white.jpg) repeat;

  h2 {
    color: ${({ theme }) => theme.blue};
  }

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
      padding: 0;

      p {
        display: flex;
        font-size: 21px;
        color: ${({ theme }) => theme.blue};

        strong {
          font-family: 'Uxum';
        }

        span {
          display: inline-block;
          background-color: ${({ theme }) => theme.pink};
          color: ${({ theme }) => theme.blue};
          padding: 3px 12px;
          border-radius: 20px;
          font-family: 'Uxum';
          font-weight: bold;
          font-size: 21px;
          width: 35px;
          height: 35px;
          margin: 0 5px 0 0;
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

export const Autora = styled.section`
  position: relative;
  z-index: 2;

  margin: 80px 0 0;

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
  padding: 80px 0 160px;
  text-align: center;
  background: url(/images/bg/blue.jpg) repeat;
  @media screen and (min-width: 768px) {
    padding: 80px 0 10px;
  }

  h2 {
    color: ${({ theme }) => theme.pink};
    margin: 0 0 30px;
  }

  figure {
    display: flex;
    flex-direction: column-reverse;

    margin: 0 auto 30px;
    text-align: left;
    img {
      max-width: 100%;
    }
    @media screen and (min-width: 768px) {
      max-width: inherit;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      img {
        max-width: 470px;
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
          padding: 10px 0;
          margin: 0;
          color: ${({ theme }) => theme.white};

          p {
            margin: 0;
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
  padding: 80px 0 150px;
  text-align: center;
  background: url(/images/bg/yellow.jpg) repeat;

  @media screen and (min-width: 768px) {
    padding: 80px 0;
  }

  .publico {
    display: block;
    max-width: 320px;
    margin: 0 auto 30px;
    text-align: left;

    img {
      max-width: 100%;
    }
    @media screen and (min-width: 768px) {
      max-width: inherit;
      display: flex;
      justify-content: space-around;
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
      font-size: 16px;
      color: ${({ theme }) => theme.blue};
      margin: 10px 0;
      strong {
        font-family: 'uxum';
      }
      @media screen and (min-width: 768px) {
        font-size: 21px;
      }
    }
    @media screen and (min-width: 768px) {
      margin: 30px 0;
      padding: 20px 0 0 30px;
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
    li {
      max-width: 33%;
      display: inline-block;
      img {
        max-width: 97%;
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

export const Formulario = styled.div`
  margin: 30px auto;
  padding: 30px;
  max-width: 440px;
  z-index: 3;
  position: relative;
  background-color: ${({ theme }) => theme.pink};
  border-radius: 10px;

  box-shadow: ${({ theme }) => theme.blue} 0px 0px 0px 2px inset,
    ${({ theme }) => theme.yellow} 10px 10px 0px -3px,
    ${({ theme }) => theme.blue} 10px 10px;

  form {
    min-width: 280px;

    legend {
      margin: 0 0 10px;
      color: ${({ theme }) => theme.white};

      h3 {
        font-weight: normal;
        font-size: 30px;
        font-family: 'Uxum';
        color: ${({ theme }) => theme.blue};
        margin: 5px 0;
      }

      span {
        margin: 0 0 10px;
        font-size: 18px;
        color: ${({ theme }) => theme.white};
      }
    }

    label {
      color: ${({ theme }) => theme.blue};
      font-weight: bold;
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
      border: 2px solid ${({ theme }) => theme.pink};
      &.focus-visible {
        border: 2px solid ${({ theme }) => theme.yellow};
        outline: 1px solid ${({ theme }) => theme.yellow};
      }
    }

    button[type='submit'] {
      position: relative;
      font-family: 'Uxum';
      border: none;
      padding: 15px 0;
      margin: 30px 0;
      width: 100%;
      border-radius: 5px;
      border: 2px solid ${({ theme }) => theme.blue};
      color: ${({ theme }) => theme.white};
      background: ${({ theme }) => theme.blue};
      text-transform: uppercase;
      font-weight: bold;
      font-size: 18px;
      cursor: pointer;
      &:disabled {
        background: ${({ theme }) => theme.blue};
        color: ${({ theme }) => theme.white};

        cursor: not-allowed;
        &:after {
          color: ${({ theme }) => theme.white};
          content: 'Preencha os campos acima com seus dados :)';
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

export const Price = styled.section`
  position: relative;
  padding: 100px 0;
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

export const Pacote = styled.aside`
  margin: 0 auto;

  h3 {
    display: inline-block;
    margin: 0 0 10px;
    padding: 2px 5px 0;
    text-transform: uppercase;
    background: ${({ theme }) => theme.yellow};
    color: ${({ theme }) => theme.blue};
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
    padding: 15px;
    margin: 0;
    padding: 0;

    li {
      list-style: none;
      p {
        font-size: 18px;
        margin: 15px 0 5px;
        color: ${({ theme }) => theme.yellow};
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
  margin: 150px 0;
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
