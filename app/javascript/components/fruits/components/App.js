
import React from 'react'
import FruitsWrapper from '../containers/FuritListContainer'
import AddFruitWrapper from '../containers/AddFruit'
import { Link } from 'react-router-dom';



const App = () => (

  <div>
    <AddFruitWrapper />
    <FruitsWrapper />

  </div>
)



export default App;