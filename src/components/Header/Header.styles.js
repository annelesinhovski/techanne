import styled from 'styled-components';

export const StyledHeader = styled.header`
  padding: 30px;
  color: ${({ theme }) => theme.blue};
  display: flex;
  @media screen and (max-width: 768px) {
    padding: 20px;
  }
  h1 {
    background: url('/images/logo-tech-anne-rosa.svg') no-repeat;
    width: 150px;
    height: 70px;
    font-size: 0;
    display: block;
    margin: 0 auto;
    background-size: 100%;
    @media screen and (min-width: 768px) {
      transform: translate(70px, 0);
      width: 200px;
      height: 100px;
    }
  }
`;

export const RedesSociais = styled.div`
  float: right;
  margin: -10px 0 0;
  p {
    margin: 0;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
