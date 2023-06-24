import styled from "styled-components";

export const StyledList = styled.div`
  color: ${({ theme }) => theme.blue};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const StyledListItem = styled.article`
  color: ${({ theme }) => theme.blue};
  margin: 0 0 30px;
  padding: 0 30px 0 0;
  @media screen and (max-width: 768px) {
    margin: 0 auto 45px;
    max-width: 265px;
    padding: 0;
  }
  h4 {
    font-size: 24px;
    margin: 20px 0 10px;
    @media screen and (max-width: 768px) {
      font-size: 20px;
    }
  }
  img {
    height: 70px;
    @media screen and (max-width: 768px) {
      margin: 0 auto;
      display: block;
      height: 85px;
    }
  }
  p {
    font-size: 18px;
    line-height: 150%;
    margin: 0;
    @media screen and (max-width: 768px) {
      font-size: 16px;
    }
  }
`;
