import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {
  return (
    <ul className="cards">{/* render PlantCards components in here */
    plants.map(plant => {
      return <PlantCard plant={plant}/>
    })
    
    }</ul>
  );
}

export default PlantList;
