import React, { useState } from 'react';
import { Titulo, Resposta } from './Accordion.styles';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Titulo onClick={handleToggle}>
        <h5>{title}</h5>
      </Titulo>
      {isOpen && <Resposta>{content}</Resposta>}
    </div>
  );
};

const AccordionContainer = ({ accordions }) => {
  const [openAccordionIndex, setOpenAccordionIndex] = useState(null);

  const handleAccordionClick = (index) => {
    if (index === openAccordionIndex) {
      setOpenAccordionIndex(null);
    } else {
      setOpenAccordionIndex(index);
    }
  };

  return (
    <div>
      {accordions.map((accordion, index) => (
        <Accordion
          key={index}
          title={accordion.title}
          content={accordion.content}
          isOpen={index === openAccordionIndex}
          onAccordionClick={() => handleAccordionClick(index)}
        />
      ))}
    </div>
  );
};

export default AccordionContainer;
