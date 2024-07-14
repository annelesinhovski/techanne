import styled from 'styled-components';

export const Titulo = styled.div`
  background: ${({ theme }) => theme.pink};
  padding: 5px 10px;
  margin: 15px 0 0;
  border-radius: 5px;
  cursor: pointer;
  h5 {
    font-size: 21px;
    color: ${({ theme }) => theme.blue};
    margin: 0;
  }
`;

export const Resposta = styled.p`
  color: ${({ theme }) => theme.blue};
  font-size: 18px;
  padding: 0 10px;
  margin: 10px 0 20px;
`;
