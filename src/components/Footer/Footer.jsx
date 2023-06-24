import React from 'react';
import Social from '../Social/Social';
import { StyledFooter } from './Footer.styles';

function Footer() {
  return (
    <StyledFooter>
      <h5>Entre em contato!</h5>
      <p>
        <a href="mailto:contato@techanne.com.br">contato@techanne.com.br</a>
      </p>
    </StyledFooter>
  );
}

export default Footer;
