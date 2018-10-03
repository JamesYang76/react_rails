
import { connect } from 'react-redux'
import {editFruit, updateFruit, delFruit, updateFruits} from '../actions'
import FruitList from '../components/FruitList'
import React from "react";
import { withRouter, Link } from "react-router-dom";
import * as actions from "../actions";
import * as api from "../api";

const basePath = "/fruits";
class FruitListContainer extends React.Component{
  componentDidMount() {
    console.log(this.props);
    this.fetchAndStoreFruits();
  }

  fetchAndStoreFruits = () => {
    let { handleUpdates } = this.props;
    handleUpdates();
/*
    let { fetchFruits } = this.props;
    fetchFruits();*/
    /*
    const {handleUpdates } = this.props;
    fetch('/api/v1/fruits.json')
      .then((response) => {return response.json()})
      .then((data) => { handleUpdates(data) });
      */
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
      <div>
        <FruitList
          fruits={fruits}
          handleEdit={handleEdit}
          handleDelete={this.handleDeleteFruit}
          handleUpdate={this.handleUpdateFruit}
        />

      </div>
    );
  }
}


const mapStateToProps = (state,ownProps) => ({
  fruits: state.fruits,
  filter: ownProps.match.params.filter
});

const mapDispatchToProps = dispatch => ({
  handleEdit: fruitId => dispatch(editFruit(fruitId)),
  handleUpdate: fruit => dispatch(updateFruit(fruit)),
  handleDelete: fruitId => dispatch(delFruit(fruitId)),
  //handleUpdates: () => actions.fetchFruits(dispatch),
  handleUpdates: () => dispatch(actions.fetchFruits())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
 // actions

)(FruitListContainer));


