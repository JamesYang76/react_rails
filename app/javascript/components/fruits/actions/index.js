import * as api from "../api";

/*
export const fetchFruits = (dispatch) => {
  return api.fetchFruits()
    .then(response => {return response.json()})
    .then((data) => {dispatch(updateFruits(data))}
  );
};
*/

export const fetchFruits = () => (dispatch,getState) => {
  console.log("fetchFruits:", getState());
  return api.fetchFruits()
    .then(
      (response) => {
        console.log("res:" , response);
        if (response.statusText === "OK") {
          return response.json();
        }
      }
    )
    .then((data) => {
      console.log("data", data);
      if(data !== undefined) {
        dispatch(updateFruits(data))
      }
    }
    );
};


export const updateFruits = fruits => ({
  type: 'UPDATE_FRUITS',
  fruits: fruits,
  editable: false
});



export const addFruit = fruit => ({
  type: 'ADD_FRUIT',
  id: fruit.id,
  name: fruit.name,
  description: fruit.description,
  editable: false
});

export const delFruit = fruitId => ({
  type: 'DELETE_FRUIT',
  id: fruitId
});

export const editFruit = fruitId => ({
  type: 'EDIT_FRUIT',
  id: fruitId,
  editable: true
});


export const updateFruit = fruit => ({
  type: 'UPDATE_FRUIT',
  id: fruit.id,
  name: fruit.name,
  description: fruit.description,
  editable: false
});

