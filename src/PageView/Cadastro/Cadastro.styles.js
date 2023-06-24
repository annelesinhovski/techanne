import styled from 'styled-components';

export const PageCadastro = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  display: flex;
  flex-direction: column;
  align-content: space-between;

  justify-content: space-between;
  height: 100vh;
  &:after {
    content: '';
    display: block;
    width: 100px;
    height: 130px;
    background: url('/images/icones/espirais-amarelo.svg') center no-repeat;
    background-size: 100%;
    position: absolute;
    z-index: 9999;
    left: -30px;
    top: -20px;
    transform: rotate(40deg);
  }
`;

export const Header = styled.header`
  flex: 1;
  margin: 0 auto;
  text-align: center;
  max-width: 340px;
  h1 {
    font-family: 'Uxum';
    margin: 50px 0 0;
    color: ${({ theme }) => theme.pink};
    text-align: center;
    font-size: 16px;
  }
  h3 {
    position: relative;
    color: ${({ theme }) => theme.pink};
    text-align: center;
    font-size: 22px;
    margin: 30px 0 50px;
    &:after {
      content: '';
      display: block;
      width: 60px;
      height: 60px;
      background: url('/images/icones/seta-amarela.svg') center no-repeat;
      background-size: 100%;
      position: absolute;
      z-index: 9999;
      right: 15px;
      top: 10px;
      transform: rotate(10deg);
    }
  }
`;

export const Avatar = styled.figure`
  max-width: 300px;
  margin: 0 auto -25px;
  img {
    width: 100%;
  }
`;

export const Formulario = styled.div`
  margin: 30px 0 80px;
  max-width: 340px;
  form {
    min-width: 260px;

    legend {
      margin: 0 0 10px;
      color: ${({ theme }) => theme.blue};

      h3 {
        font-weight: normal;
        font-size: 18px;
        font-family: 'Clear sans';
      }

      p {
        font-size: 13px;
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
      border: 2px solid ${({ theme }) => theme.pink};
      color: ${({ theme }) => theme.carrara};
      background: ${({ theme }) => theme.pink};
      text-transform: uppercase;
      font-weight: bold;
      font-size: 16px;
      cursor: pointer;
      &:disabled {
        background: ${({ theme }) => theme.carrara};
        color: ${({ theme }) => theme.pink};

        cursor: not-allowed;
        &:after {
          color: ${({ theme }) => theme.pink};
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

export const Message = styled.div`
  margin: 20px auto 50px;
  color: ${({ theme }) => theme.blue};
`;
