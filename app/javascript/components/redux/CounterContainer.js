import React from "react";
import { createStore } from 'redux'
import Counter from "./Counter";




var counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
};


class CounterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      store: createStore(counter),
    }
    this.state.value = this.state.store.getState();
    this.state.store.subscribe(()=> {
      this.setState({
        value: this.state.store.getState()
      });
    });
  }



  render() {
   return (
    <Counter
        value={this.state.value}
        onIncrement={() =>  this.state.store.dispatch({type: 'INCREMENT'})}
        onDecrement={() =>  this.state.store.dispatch({type: 'DECREMENT'})}
    />
   );
  }
};


export default CounterContainer;