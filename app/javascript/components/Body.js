import AllFruites from "./AllFruites";
import NewFruit from "./NewFruit";
import React from "react";

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fruits: []
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.addNewFruit = this.addNewFruit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.deleteFruit = this.deleteFruit.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this);
    this.updateFruit = this.updateFruit.bind(this)
  }
  handleFormSubmit(name, description){
    let body = JSON.stringify({fruit: {name: name, description:   description} })
    fetch('/api/v1/fruits', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body,
    }).then((response) => {return response.json()})
      .then((fruit)=>{
        this.addNewFruit(fruit)
      })
  }

  handleDelete(id){
    fetch(`/api/v1/fruits/${id}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        console.log("handleDelete =" + response);
        this.deleteFruit(id)
    })
  }

  handleUpdate(fruit){
    fetch(`/api/v1/fruits/${fruit.id}`,
      {
        method: 'PUT',
        body: JSON.stringify({fruit: fruit}),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
      this.updateFruit(fruit)
    })
  }

  addNewFruit(fruit){
    this.setState({
      fruits: this.state.fruits.concat(fruit)
    })
  }

  deleteFruit(id){
    let newFruits = this.state.fruits.filter((fruit) => fruit.id !== id)
    this.setState({
      fruits: newFruits
    })
  }

  updateFruit(fruit){
    let newFruits = this.state.fruits.filter((f) => f.id !== fruit.id)
    newFruits.push(fruit)
    this.setState({
      fruits: newFruits
    })
  }

  componentDidMount(){

    fetch('/api/v1/fruits.json')
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ fruits: data }) });

    /*
    fetch('/api/v2/fruits')
      .then((response) => {return response.json()})
      .then((responseData) => {
          console.log(responseData);
          let fruits_arr =responseData.data.map(obj => ({
            id: obj.id,
            name: obj.attributes.name,
            description: obj.attributes.description
          }));

          this.setState({ fruits: fruits_arr })
        }
      )*/
  }
  render(){
    return(
      <div>
        <NewFruit handleFormSubmit={this.handleFormSubmit}/>
        <AllFruites
          fruits={this.state.fruits} handleDelete={this.handleDelete}
          handleUpdate = {this.handleUpdate}
        />
      </div>
    )
  }
}

export default Body;