import { LOAD_PLANTS } from '../constants/PlantsConstants.jsx';

const INITIAL_STATE = { all: [
    {name_common: "sample plant 1", water_interval: 1},
    {name_common: "sample plant 2", water_interval: 14}
  ]
}

const plants = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOAD_PLANTS":
      console.log('load_plants triggered');
    default:
      return state;
  }
};

export default plants;
