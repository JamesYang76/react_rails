
import fruits from './fruits';
import * as actions from '../actions/index'

describe('fruits reducer', () => {
  it('should handle initial state', () => {
    expect(fruits(undefined, {})).toEqual([]);
  });

  it('should handle ADD_FRUIT', () => {
    expect(fruits([],actions.addFruit({
        name: 'Banana',
        description: "Yellow",
        id: 0
      }))
    ).toEqual([{
        name: 'Banana',
        description: "Yellow",
        id: 0,
        editable: false
      }
    ]);
  });

  it('should handle DELETE_FRUIT', () => {
    expect(fruits([ {
        name: 'Banana',
        description: "Yellow",
        id: 0
      }],
      actions.delFruit(0))
    ).toEqual([]);
  });

  it('should handle EDIT_FRUIT', () => {
    expect(fruits([ {
        name: 'Banana',
        description: "Yellow",
        id: 0,
        editable: false
      }],
      actions.editFruit(0))
    ).toEqual([{
      name: 'Banana',
      description: "Yellow",
      id: 0,
      editable: true
    }]);
  });

  it('should handle UPDATE_FRUITS', () => {
    expect(fruits([ {
        name: 'Banana',
        description: "Yellow",
        id: 0,
        editable: true
      }],
      actions.updateFruits([{
        name: 'Apple',
        description: "Green",
        id: 0
      }]))
    ).toEqual([{
      name: 'Apple',
      description: "Green",
      id: 0,
      editable: false
    }]);
  });


  it('should handle UPDATE_FRUIT', () => {
    expect(fruits([ {
        name: 'Banana',
        description: "Yellow",
        id: 0,
        editable: true
      }],
      actions.updateFruit({
        name: 'Banana',
        description: "Not Yellow",
        id: 0
      }))
    ).toEqual([{
      name: 'Banana',
      description: "Not Yellow",
      id: 0,
      editable: false
    }]);
  });

});