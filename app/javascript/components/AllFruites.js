
import React from "react"
import Fruit from "./Fruit"
const AllFruites = (props) => {
  var fruits = props.fruits.map((fruit) => {
    return(
      <div key={fruit.id}>
        <Fruit fruit={fruit} handleDelete={props.handleDelete}/>
      </div>
    )
  })

  return (
    <div>
      {fruits}
    </div>
  )
}

export default AllFruites;