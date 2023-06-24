import styled from 'styled-components';

export const StyledFooter = styled.footer`
  padding: 30px;
  color: ${({ theme }) => theme.white};
  background: ${({ theme }) => theme.pink};
  font-weight: bold;
  text-align: center;
  line-height: 120%;
  position: relative;
  &:after {
    content: '';
    display: block;
    width: 110px;
    height: 170px;
    background: url('/images/icones/arco-vazado-azul.svg') center no-repeat;
    background-size: 100%;
    position: absolute;
    z-index: 9999;
    right: -70px;
    top: -90px;
    transform: rotate(-90deg);
  }
  h5 {
    font-size: 21px;
    margin: 10px 0 5px;
    font-family: 'Uxum';
  }
  p {
    font-size: 18px;
    margin: 10px 0;
  }
  a {
    display: block;
    font-weight: normal;
    color: ${({ theme }) => theme.white};
    text-decoration: none;
    margin: 0 0 20px;
  }
`;
