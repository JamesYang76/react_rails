import React from 'react'


const Fruit = ({ handleEdit, handleUpdate, handleDelete, fruit }) => {

  let input_name;
  let input_description;

  let name = fruit.editable ?
    <input type='text' ref={input => input_name = input} defaultValue={fruit.name}/>
    :<h3>{fruit.name}</h3>
  let description = fruit.editable ?
    <input type='text' ref={input => input_description = input} defaultValue={fruit.description}/>
    :<p>{fruit.description}</p>

  return(
    <div className="fruit">
      {name}
      {description}
      <button onClick={() => {
        if (fruit.editable === true) {
          let name = input_name.value;
          let description = input_description.value;
          let id = fruit.id;
          let updatedFruit = {id: id, name: name, description: description};
          handleUpdate(updatedFruit);
        } else {
          console.log("call handleEdit")
          handleEdit(fruit.id);
        }
      }}>{fruit.editable? 'Submit' : 'Edit'}</button>
      <button className="delete" onClick={() => handleDelete(fruit.id)}>Delete</button>
    </div>
  )
}


export default Fruit;