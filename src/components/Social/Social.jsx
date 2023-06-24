import React from 'react';
import { ListSocial } from './Social.styles';

function Social({ dark }) {
  return (
    <ListSocial dark={dark}>
      <p>
        <a
          href="https://www.linkedin.com/in/anne-lesinhovski/"
          target="_blank"
          rel="noreferrer"
        >
          Ir para a minha página no Linkedin
        </a>
      </p>
      <p>
        <a
          href="https://github.com/annelesinhovski/"
          target="_blank"
          rel="noreferrer"
        >
          Ir para a minha página no Github
        </a>
      </p>
      <p>
        <a
          href="https://www.instagram.com/tech.anne/"
          target="_blank"
          rel="noreferrer"
        >
          Ir para a minha página no Instagram @tech.anne
        </a>
      </p>
      <p>
        <a
          href="https://www.youtube.com/c/techanne"
          target="_blank"
          rel="noreferrer"
        >
          Ir para o meu canal no Youtube
        </a>
      </p>
    </ListSocial>
  );
}

export default Social;
