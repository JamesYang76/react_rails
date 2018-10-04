import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'
import { BrowserRouter as Router, Route} from "react-router-dom";
import thunk from 'redux-thunk';
const middlewares = [ thunk ];

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);

  middlewares.push(logger);
}

const store = createStore(rootReducer,applyMiddleware( ...middlewares ));
const basePath = "/fruits";
console.log(process.env.NODE_ENV);
const FruitMain = (props) => {
  return(
    <Provider store={store}>
      <Router>
        <Route path={`${basePath}/:filter?`} component={App} />
      </Router>
    </Provider>
  )
};

export default FruitMain;