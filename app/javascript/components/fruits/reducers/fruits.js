const fruits = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FRUIT':
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          description: action.description,
          editable: action.editable
        }
      ]
    case 'DELETE_FRUIT':
      return state.filter((fruit) => (fruit.id !== action.id));
    case 'EDIT_FRUIT':
      return state.map(fruit =>
        (fruit.id === action.id)
          ? {...fruit, editable: action.editable}
          : fruit
      )
    case 'UPDATE_FRUIT':
      return state.map(fruit =>
        (fruit.id === action.id)
          ? {...fruit, name: action.name, description: action.description, editable: action.editable}
          : fruit
      )

    case 'UPDATE_FRUITS':
      return action.fruits.map( fruit => {
        return { ...fruit, editable: action.editable}
      });

    default:
      return state
  }
}

export default fruits