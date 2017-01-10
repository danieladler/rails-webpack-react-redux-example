// dependencies
import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';

// components
import PlantsContainer from './containers/PlantsContainer.jsx';
import store from './store/PlantsStore.jsx';

ReactDOM.render(
  <Provider store={store}>
    <PlantsContainer />
  </Provider>,
  document.getElementById('root-plant-app')
);
