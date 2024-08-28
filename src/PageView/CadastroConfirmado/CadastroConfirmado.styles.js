import styled from 'styled-components';

export const PageConfirmacao = styled.div`
  background: url(/images/bg/blue.jpg) repeat;
  min-height: 100vh;
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
    width: 200px;
    height: 35px;
    background: url(/images/logo-tech-path-horizontal-amarela.svg) no-repeat;
    background-size: 100%;
    font-size: 0;

    @media screen and (min-width: 360px) {
      width: 230px;
      height: 45px;
    }

    @media screen and (min-width: 768px) {
      width: 300px;
      height: 70px;
    }
  }
`;

export const HeroGPS = styled.section`
  position: relative;
  z-index: 1;

  .flex {
    display: flex;
  }
`;

export const Wrapper = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 20px;
  display: block;
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

export const Confirmacao = styled.div`
  position: relative;
  text-align: center;
  z-index: 1;
  margin: 0 auto 50px;
  padding: 20px;

  h2 {
    margin: 20px auto;
    color: ${({ theme }) => theme.white};
    font-size: 24px;
    span {
      max-width: 250px;
      line-height: 100%;
    }
  }

  h3 {
    margin: 40px auto 20px;
    color: ${({ theme }) => theme.yellow};
    font-size: 21px;
    span {
      max-width: 250px;
      line-height: 100%;
    }
  }

  p {
    line-height: 130%;
    font-size: 18px;
    color: ${({ theme }) => theme.white};
  }

  figure {
    margin: 0;
    @media screen and (min-width: 768px) {
      display: flex;
      align-items: center;
      figcaption {
        padding: 60px 0 0;
      }
      img {
        max-width: 450px;
        width: 100%;
      }
    }

    @media screen and (max-width: 768px) {
      img {
        max-width: 250px;
        width: 100%;
      }
    }
  }

  @media screen and (min-width: 768px) {
    max-width: 1080px;
    padding: 0 50px 20px;

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

export const Evento = styled.div`
  margin: 0;
  padding: 10px 10px 30px;
  border-radius: 10px;
  background: url(/images/bg/white.jpg) repeat;

  figure {
    margin: 0 10px;
    img {
      max-width: 300px;
      margin: 15px auto;
      display: block;
      border-radius: 5px;
    }
  }

  p {
    color: ${({ theme }) => theme.blue};
    font-size: 18px;
    strong {
      font-family: 'Uxum';
    }
  }

  @media screen and (min-width: 768px) {
    padding: 20px 20px 40px;
    figure {
      display: flex;
      margin: 0 20px;
      align-items: center;
      img {
        margin: 0 20px 0 0;
        max-width: 300px;
      }
    }
  }
`;
