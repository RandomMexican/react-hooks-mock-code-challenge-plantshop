import React, {useEffect,useState} from "react";

// import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  
  const [plants , setPlants] = useState([]);
  const [formData, setFormData] = useState({
    //template for form
    name: "",
    image: "",
    price: 0
  })

  //initial fetch to display all plants in db.json
  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(res => res.json())
    .then(plants => setPlants(plants));
  }, [])



  //second fetch to post data received by the form
  //into db.json
 function postForm(formData){
  fetch("http://localhost:6001/plants",{
    method: "POST",
    headers: {"Content-Type" : "application/json"},
    body: JSON.stringify(formData)
  })
  .then(res => res.json())
  .then(newPlant => setPlants([...plants,newPlant])
  //should add the new plant to the page without having to reload
  )
 }
  
  return (
    <main>
      <NewPlantForm form={formData} setForm={setFormData} postForm={postForm}/>
      <Search />
      <PlantList plants={plants}/>
    </main>
  );
}

export default PlantPage;
