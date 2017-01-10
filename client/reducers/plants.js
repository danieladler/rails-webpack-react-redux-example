import { LOAD_PLANTS } from '../constants/PlantsConstants.jsx';

const INITIAL_STATE = { all: [] }

const plants = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOAD_PLANTS":
      console.log('load_plants triggered');
      // return [
      //   ...state, home: action.payload.data
      // ];
    default:
      return state;
  }
};

export default plants;
