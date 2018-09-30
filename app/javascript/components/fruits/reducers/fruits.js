const fruits = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FRUIT':
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          description: action.description
        }
      ]
    case 'DELETE_FRUIT':
      return state.filter((fruit) => (fruit.id !== action.id));
    case 'EDIT_FRUIT':
      return state.map(fruit =>
        (fruit.id === action.id)
          ? {...fruit, name: action.name, description: action.description}
          : fruit
      )

    default:
      return state
  }
}

export default fruits