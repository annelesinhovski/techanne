import styled from 'styled-components';

export const PageLinks = styled.div`
  position: relative;
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
  h1 {
    font-family: 'Uxum';
    margin: 50px 0 0;
    color: ${({ theme }) => theme.pink};
    text-align: center;
    font-size: 16px;
  }
  h3 {
    position: relative;
    font-family: 'Uxum';
    color: ${({ theme }) => theme.blue};
    text-align: center;
    font-size: 22px;
    margin: 30px auto 50px;
    max-width: 190px;
    &:after {
      content: '';
      display: block;
      width: 60px;
      height: 60px;
      background: url('/images/icones/seta-amarela.svg') center no-repeat;
      background-size: 100%;
      position: absolute;
      z-index: 9999;
      right: -25px;
      top: 25px;
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

export const ListaLinks = styled.ul`
  flex: 1;
  padding: 0;
  margin: 30px auto 80px;
  max-width: 400px;
  li {
    list-style: none;
    padding: 0;
    margin: 12px 0;

    h4 {
      font-size: 21px;
      margin: 50px 0 15px;
      color: ${({ theme }) => theme.pink};
      text-transform: uppercase;
    }

    .sobre {
      font-size: 14px;
      color: ${({ theme }) => theme.blue};
      margin: 15px 0 40px;
      strong {
        font-family: 'Uxum';
      }
    }
  }
`;

export const LinkItem = styled.a`
  font-family: 'Uxum';
  font-size: 21px;
  font-weight: bold;
  list-style: none;
  display: block;
  padding: 10px;
  margin: 5px 0;
  border-radius: 15px;
  border: 3px solid ${({ theme }) => theme.yellow};
  color: ${({ theme }) => theme.blue};
  text-align: center;
  text-decoration: none;
  small {
    font-family: 'Clear sans Bold';
    font-size: 16px;
    display: block;
    margin: 0;
    color: ${({ theme }) => theme.pink};
  }
`;

export const LinkItemSecundario = styled.a`
  font-family: 'Uxum';
  font-size: 18px;
  font-weight: bold;
  list-style: none;
  display: block;
  padding: 8px 0;
  color: ${({ theme }) => theme.blue};
  text-align: left;
  text-decoration: none;
`;

export const LabelPink = styled.span`
  font-size: 12px;
  text-transform: uppercase;
  padding: 3px 5px;
  margin: 0 2px;
  background: ${({ theme }) => theme.pink};
  color: ${({ theme }) => theme.white};
  border-radius: 2px;
`;

export const LabelBlue = styled.span`
  font-size: 12px;
  text-transform: uppercase;
  padding: 3px 5px;
  background: ${({ theme }) => theme.blue};
  color: ${({ theme }) => theme.white};
  border-radius: 2px;
`;
