import { connect } from "react-redux";
import React from "react";
import {addFruit } from '../actions'



class AddFruitContainer extends React.Component{
  constructor(props) {
    super(props);
  }

  handleFormSubmit = (name, description) => {
    const { handleAddFruit } = this.props;
    let body = JSON.stringify({fruit: {name: name, description: description} })
    fetch('/api/v1/fruits', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body,
    }).then((response) => {return response.json()})
      .then((fruit)=>{
        handleAddFruit(fruit);
      })
  }

  render() {
    let formFields = {}
    return (
      <form onSubmit={
        (e) => {
          this.handleFormSubmit(formFields.name.value, formFields.description.value);
          e.target.reset();
          e.preventDefault();
        }
      }>
        <input ref={input => formFields.name = input} placeholder='Enter the name of the item'/>
        <input ref={input => formFields.description = input} placeholder='Enter a description' />
        <button>Submit</button>
      </form>
    )
  }
}


const mapStateToProps = state => ({
  fruits: state.fruits
});


const mapDispatchToProps = dispatch => ({
  handleAddFruit: fruit => dispatch(addFruit(fruit))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddFruitContainer)