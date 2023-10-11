import React, { useState } from "react";

function PlantCard({plant}) {
  
  const [inStock,setInStock] = useState(true)

  return (
    <li className="card">
      <img src={plant.image} alt={"plant name"} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {inStock ? 
      (
        //display this if instock = true
        <button onClick={() => {setInStock(!inStock)}} className="primary">In Stock</button>
      ) : 
      (
        //display this if instock = false
        <button onClick={() => {setInStock(!inStock)}}>Out of Stock</button>
      )}

    </li>
  );
}

export default PlantCard;
