import React, { forwardRef } from 'react';
import { Button, ButtonWrapper } from './Button.styles';

const ButtonBase = forwardRef((props, ref) => {
  return (
    <ButtonWrapper>
      <Button {...props} ref={ref} />
      <span>
        <small>
          <strong>Condições especiais</strong> para inscritos na lista! <br />
        </small>
      </span>
    </ButtonWrapper>
  );
});

export { ButtonBase as Button };
