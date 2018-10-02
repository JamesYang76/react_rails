import React from 'react'
import Enzyme, { mount } from 'enzyme'
import { expect } from 'chai';
import FruitList from './FruitList'

function setup() {
  const props = {
    handleEdit: jest.fn(),
    handleUpdate: jest.fn(),
    handleDelete: jest.fn(),
    fruits:[ {
      id: 0,
      name:"Banana",
      description: "Yellow",
      editable: false
    },
    {
      id: 1,
      name:"Apple",
      description: "Out of date",
      editable: false
    }]
  };
  const enzymeWrapper = mount(<FruitList {...props} />)
  return {
    props,
    enzymeWrapper
  }
}

describe('components', () => {
  describe('FruitList', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup()
      expect(enzymeWrapper.find('Fruit')).have.lengthOf(2);
    });
  });

});