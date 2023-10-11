import React from "react";

function NewPlantForm({form, setForm,postForm}) {

  function handleChange(event)
  {
    
  }
  //waits for the on submission event to take in data
  function handleSubmission(event){
    event.preventDefault();
    setForm({
      name: event.target.name,
      image: event.target.image,
      price: parseInt(event.target.price)
    })
    //give the function postForm the data to post
    postForm(form);
    //reset form back to blank for the next form

    setForm({
      name: "",
      image: "",
      price: 0
    })

  }


  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmission}>
        <input type="text" name="name" placeholder="Plant name" onChange={handleChange} />
        <input type="text" name="image" placeholder="Image URL" onChange={handleChange}/>
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={handleChange}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
