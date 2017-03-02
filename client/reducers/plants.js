import { LOAD_PLANTS } from '../constants/PlantsConstants.jsx';

const INITIAL_STATE = { all: [] }

const plants = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_PLANTS:
      return { ...state, all: action.payload.data }
    default:
      return state;
  }
};

export default plants;
