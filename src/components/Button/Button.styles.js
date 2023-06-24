import styled from 'styled-components';

export const Button = styled.button`
  width: 270px;
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

  &:hover {
    background: ${({ theme }) => theme.blue};
    color: ${({ theme }) => theme.yellow};
    border: 2px solid ${({ theme }) => theme.yellow};
  }

  @media screen and (min-width: 768px) {
    width: 320px;
    font-size: 24px;
  }
`;

export const ButtonWrapper = styled.div`
  span {
    color: ${({ theme }) => theme.blue};
    font-size: 18px;
    padding: 8px;
    display: block;
    text-align: center;
    small {
      display: block;
    }
  }
`;
