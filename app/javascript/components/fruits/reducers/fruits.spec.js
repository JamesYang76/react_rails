
import fruits from './fruits';

describe('fruits reducer', () => {
  it('should handle initial state', () => {
    expect(fruits(undefined, {})).toEqual([]);
  });
});