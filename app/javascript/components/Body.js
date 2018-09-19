import AllFruites from "./AllFruites";
import React from "react";

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fruits: []
    };
  }
  componentDidMount(){
    fetch('/api/v1/fruits.json')
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ fruits: data }) });
  }
  render(){
    return(
      <div>
        <AllFruites fruits={this.state.fruits} />
      </div>
    )
  }
}

export default Body;