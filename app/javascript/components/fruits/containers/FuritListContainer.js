
import { connect } from 'react-redux'
import { editFruit, updateFruit, updateFruits,delFruit } from '../actions'
import FruitList from '../components/FruitList'
import React from "react";


class FruitListContainer extends React.Component{
  componentDidMount() {
    this.fetchAndStoreFruits();
  }

  fetchAndStoreFruits = () => {
    const {handleUpdates } = this.props;
    fetch('/api/v1/fruits.json')
      .then((response) => {return response.json()})
      .then((data) => { handleUpdates(data) });
  };

  handleUpdateFruit = (fruit) => {
    const { handleUpdate } = this.props;
    fetch(`/api/v1/fruits/${fruit.id}`,
      {
        method: 'PUT',
        body: JSON.stringify({fruit: fruit}),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
      console.log("handleDelete =" + response.statusText);
      if (response.statusText === "OK") {
        handleUpdate(fruit);
      }
    })
  };

  handleDeleteFruit = (id) => {
    const { handleDelete } = this.props;
    fetch(`/api/v1/fruits/${id}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
      console.log("handleDelete =" + response);
      if (response.statusText === "No Content") {
        handleDelete(id)
      }
    })
  };

  render() {
    const { fruits,handleEdit,handleDelete } = this.props;
    return (
      <FruitList
        fruits={fruits}
        handleEdit={handleEdit}
        handleDelete={this.handleDeleteFruit}
        handleUpdate={this.handleUpdateFruit}
      />
    );
  }
}


const mapStateToProps = state => ({
  fruits: state.fruits
});

const mapDispatchToProps = dispatch => ({
  handleEdit: fruitId => dispatch(editFruit(fruitId)),
  handleUpdate: fruit => dispatch(updateFruit(fruit)),
  handleDelete: fruitId => dispatch(delFruit(fruitId)),
  handleUpdates: fruits=> dispatch(updateFruits(fruits))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FruitListContainer)