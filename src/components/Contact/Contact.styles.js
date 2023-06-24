import styled from 'styled-components';

export const Formulario = styled.form`
  label {
    text-align: left;
    color: ${({ theme }) => theme.white};
    display: block;
    font-size: 18px;
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
    color: ${({ theme }) => theme.blue};
    background: ${({ theme }) => theme.yellow};
    text-transform: uppercase;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
    &:disabled {
      background: ${({ theme }) => theme.yellow};
      color: ${({ theme }) => theme.blue};
      cursor: not-allowed;
      &:after {
        content: 'Preencha os campos acima para liberar a sua vaga!';
        display: block;
        position: absolute;
        top: 60px;
        font-size: 10px;
        text-align: center;
        width: 100%;
      }
    }
  }
`;
