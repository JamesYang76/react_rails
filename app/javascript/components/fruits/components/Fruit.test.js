import React from 'react'
import Enzyme, { mount } from 'enzyme'
import { expect } from 'chai';
import Fruit from './Fruit'

function setup() {

  const props = {
    handleEdit: jest.fn(),
    handleUpdate: jest.fn(),
    handleDelete: jest.fn(),
    fruit: {
      id: 0,
      name:"Banana",
      description: "Yellow",
      editable: false
    }
  };
  const enzymeWrapper = mount(<Fruit {...props} />)
  return {
    props,
    enzymeWrapper
  }
}

describe('components', () => {
  describe('Fruit', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup()
      expect(enzymeWrapper.find('div').hasClass('fruit')).to.equal(true)
      expect(enzymeWrapper.find('h3').text()).to.equal('Banana')
      expect(enzymeWrapper.find('button.delete')).to.have.lengthOf(1)
    });

    it('should call handleDelete', () => {
      const { enzymeWrapper ,props} = setup()
      const button = enzymeWrapper.find('button.delete')
      button.props().onClick()
      expect(props.handleDelete.mock.calls.length).to.equal(1)
    });
  });
});