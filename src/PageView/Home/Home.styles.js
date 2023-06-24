import styled from 'styled-components';

export const Chamada = styled.section`
  position: relative;
  padding: 30px 0;

  @media screen and (max-width: 768px) {
    padding: 20px 0 120px;
  }
  h2 {
    color: ${({ theme }) => theme.blue};
    font-size: 40px;
    line-height: 130%;
    max-width: 740px;
    margin: 0 0 30px;
    span {
      display: block;
    }
    @media screen and (max-width: 768px) {
      font-size: 30px;
      max-width: 450px;
      margin: 0 auto 30px;
      text-align: center;
    }
    @media screen and (max-width: 400px) {
      font-size: 24px;
      max-width: 280px;
    }
  }
`;

export const Formacao = styled.aside`
  padding: 20px 0;
  @media screen and (max-width: 768px) {
    width: 280px;
    z-index: 2;
    position: absolute;
    right: 50%;
    top: 480px;
    transform: translate(140px, 0);
    &:after {
      content: '';
      display: block;
      width: 100%;
      height: 3px;
      margin: 20px 0 0;
      background: url('/images/icones/separador-mobile.svg') center no-repeat;
    }
  }
`;

export const ListaFormacao = styled.ul`
  padding: 0;
  margin: 0;
  max-width: 520px;
  li {
    list-style: none;
    figure {
      display: flex;
      align-items: flex-start;
      margin: 0;
      @media screen and (max-width: 768px) {
        color: ${({ theme }) => theme.white};
      }
      svg {
        width: 40px;
        height: 40px;
        margin: 0 10px 0 0;
        path {
          fill: ${({ theme }) => theme.blue};
        }
        @media screen and (max-width: 768px) {
          path {
            fill: ${({ theme }) => theme.white};
          }
        }
      }
      figcaption {
        width: 90%;
        p {
          margin: 0 0 15px;
          line-height: 120%;
          color: ${({ theme }) => theme.blue};
          font-weight: 600;
          font-size: 24px;
          @media screen and (max-width: 768px) {
            color: ${({ theme }) => theme.white};
            font-size: 20px;
            padding: 4px 0 0;
          }
        }
      }
    }
  }
`;

export const FotoPerfil = styled.figure`
  position: absolute;
  right: 0;
  bottom: -120px;
  z-index: 2;
  width: 415px;
  height: 415px;
  img {
    width: 100%;
    border: 5px dashed ${({ theme }) => theme.pink};
    border-radius: 250px;
  }
  @media screen and (max-width: 768px) {
    width: 265px;
    height: 265px;
    bottom: inherit;
    right: 50%;
    top: 180px;
    transform: translate(170px, 0);
  }
`;

export const Apresentacao = styled.section`
  position: relative;
  padding: 50px 0;
  background: ${({ theme }) => theme.blue};
  color: ${({ theme }) => theme.white};
  @media screen and (max-width: 768px) {
    margin: 0;
    padding: 390px 0 50px;
  }
  p {
    font-size: 22px;
    line-height: 150%;
    max-width: 580px;
    margin: 30px auto;
    font-weight: normal;
    @media screen and (max-width: 768px) {
      font-size: 18px;
      max-width: 265px;
    }
    a {
      color: ${({ theme }) => theme.yellow};
    }
  }
  &:after {
    position: absolute;
    bottom: 5px;
    content: '';
    display: block;
    width: 100%;
    height: 3px;
    background: url('/images/icones/separador-amarelo.svg') center repeat-x;
  }
`;

export const Skills = styled.section`
  position: relative;
  padding: 50px 0;
  background: ${({ theme }) => theme.yellow};
  color: ${({ theme }) => theme.blue};
  h3 {
    text-align: center;
    font-size: 40px;
    margin: 0 auto 60px;
    @media screen and (max-width: 768px) {
      font-size: 30px;
      max-width: 200px;
    }
  }
`;
