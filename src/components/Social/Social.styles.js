import styled from 'styled-components';

export const ListSocial = styled.div`
  p {
    margin: 0;
    display: inline-block;
    &:first-child {
      a {
        background: ${({ dark }) =>
          dark
            ? 'url("/images/icones/linkedin-pink.svg") no-repeat'
            : 'url("/images/icones/linkedin.svg") no-repeat'};
      }
    }
    &:nth-child(3n) {
      a {
        background: ${({ dark }) =>
          dark
            ? 'url("/images/icones/instagram-pink.svg") no-repeat'
            : 'url("/images/icones/instagram.svg") no-repeat'};
      }
    }
    &:last-child {
      a {
        background: ${({ dark }) =>
          dark
            ? 'url("/images/icones/youtube-pink.svg") no-repeat'
            : 'url("/images/icones/youtube.svg") no-repeat'};
      }
    }
    a {
      display: block;
      margin: 0 5px;
      width: 36px;
      height: 36px;
      font-size: 0;
      background: ${({ dark }) =>
        dark
          ? 'url("/images/icones/github-pink.svg") no-repeat'
          : 'url("/images/icones/github.svg") no-repeat'};
    }
  }
`;
