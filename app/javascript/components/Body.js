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
  }
  handleFormSubmit(name, description){
    console.log(name, description)
  }

  componentDidMount(){
    fetch('/api/v1/fruits.json')
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ fruits: data }) });
  }
  render(){
    return(
      <div>
        <NewFruit handleFormSubmit={this.handleFormSubmit}/>
        <AllFruites fruits={this.state.fruits} />
      </div>
    )
  }
}

export default Body;