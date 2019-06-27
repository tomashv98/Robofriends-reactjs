import React from 'react';
import Card from './Card';

const Cardlist = ({ robots }) => {
  const cardsArray = robots.map((user, index) => {
    return (
      <Card key={index} name={robots[index].name} email={robots[index].email} />
    );
  });
  return <div>{cardsArray}</div>;
};

export default Cardlist;
