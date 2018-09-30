
import fruits from '../components/fruits/reducers/fruits';

describe('fruits reducer', () => {
  it('should handle initial state', () => {
    expect(fruits(undefined, {})).toEqual([]);
  });

  it('should handle ADD_FRUIT', () => {
    expect(fruits([],{
        type: 'ADD_FRUIT',
        name: 'Banana',
        description: "Yellow",
        id: 0
      })
    ).toEqual([{
        name: 'Banana',
        description: "Yellow",
        id: 0
      }
    ]);
  });

  it('should handle DELETE_FRUIT', () => {
    expect(fruits([ {
        name: 'Banana',
        description: "Yellow",
        id: 0
      }],
      {
        type: 'DELETE_FRUIT',
        id: 0
      })
    ).toEqual([]);
  });

  it('should handle EDIT_FRUIT', () => {
    expect(fruits([ {
        name: 'Banana',
        description: "Yellow",
        id: 0
      }],
      {
        type: 'EDIT_FRUIT',
        name: 'Banana',
        description: "Not Yellow",
        id: 0
      })
    ).toEqual([{
      name: 'Banana',
      description: "Not Yellow",
      id: 0
    }]);
  });

});