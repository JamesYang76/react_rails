import React from "react"
import Fruit from "./Fruit"
const FruitList = ({ handleEdit,handleUpdate,handleDelete, fruits }) => {
  var fruitList = fruits.map((fruit) => {
    return(
      <div key={fruit.id}>
        <Fruit
          fruit={fruit}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      </div>
    )
  })

  return (
    <div>
      {fruitList}
    </div>
  )
}

export default FruitList;