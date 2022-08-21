import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  console.log(robots.length);
  return (
    <div>
      {robots.map(robot =>
        <Card
          key={robot.id}
          robot={robot}
        />
      )}
    </div>
  )
}

export default CardList;