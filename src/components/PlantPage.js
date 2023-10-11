import React, {useEffect,useState} from "react";

// import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  
  const [plants , setPlants] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: 0
  })


  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(res => res.json())
    .then(plants => setPlants(plants));
  }, [])

  fetch("http://localhost:6001/plants",{
    method: "POST",
    headers: {"Content-Type" : "application/json"},
    body: JSON.stringify(formData)
  })
  .then(res => res.json())
  .then(newPlant => setFormData(...formData,newPlant))

  
  return (
    <main>
      <NewPlantForm />
      <Search />
      <PlantList plants={plants}/>
    </main>
  );
}

export default PlantPage;
