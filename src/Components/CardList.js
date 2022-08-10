import React from "react";
import Card from "./Card";

function CardList({ robots }) {
  const cardComponent = robots.map((user, i) => {
    return (
      <Card
        key={i}
        id={robots[i].id}
        name={robots[i].name}
        email={robots[i].email}
      />
    );
  });
  return <div className="cardcomponent">{cardComponent}</div>;
}

export default CardList;

//    .filter((user) => user.name.toLowerCase().includes(query))
