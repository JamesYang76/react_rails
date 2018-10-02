
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

  render() {
    const { fruits,handleEdit,handleDelete,handleUpdate } = this.props;
    return (
      <FruitList
        fruits={fruits}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
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