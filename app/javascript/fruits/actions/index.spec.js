import * as actions from './index'

describe('fruit actions', () => {
  it('addFruit should create ADD_FRUIT action', () => {
    expect(actions.addFruit({id:0, name: "Banana", description:"Yellow"})).toEqual({
      type: 'ADD_FRUIT',
      id: 0,
      name: "Banana",
      description:"Yellow",
      editable: false
    })
  });


  it('delFruit should create DELETE_FRUIT action', () => {
    expect(actions.delFruit(0)).toEqual({type: 'DELETE_FRUIT',id: 0});
  });

  it('editFruit should create EDIT_FRUIT action', () => {
    expect(actions.editFruit(0)).toEqual({
      type: 'EDIT_FRUIT',
      id: 0,
      editable: true
    })
  });

  it('editFruit should create UPDATE_FRUIT action', () => {
    expect(actions.updateFruit({id:0, name: "Banana", description:"Yellow"})).toEqual({
      type: 'UPDATE_FRUIT',
      id: 0,
      name: "Banana",
      description:"Yellow",
      editable: false
    })
  });

});