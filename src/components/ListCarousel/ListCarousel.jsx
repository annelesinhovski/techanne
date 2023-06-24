import React from 'react';
import { StyledList, StyledListItem } from './ListCarousel.styles';

function ListCarousel({ skills = [] }) {
  return (
    <StyledList>
      {skills.map((item, i) => (
        <div key={item + i}>
          <Skill
            imgSrc={item.imgSrc}
            imgAlt={item.imgAlt}
            title={item.title}
            description={item.description}
          />
        </div>
      ))}
    </StyledList>
  );
}

function Skill({ imgSrc, imgAlt, title, description }) {
  return (
    <StyledListItem>
      <img src={imgSrc} alt={imgAlt} />
      <h4>{title}</h4>
      <p>{description}</p>
    </StyledListItem>
  );
}

export default ListCarousel;
