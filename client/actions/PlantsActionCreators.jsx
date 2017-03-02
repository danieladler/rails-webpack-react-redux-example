import { LOAD_PLANTS } from '../constants/PlantsConstants.jsx';
import axios from 'axios';

export function loadPlants() {
  const API_URL = "http://localhost:5000";
  const request = axios.get(`${API_URL}/plants/api`);
  return {
    type: LOAD_PLANTS,
    payload: request
  }
};
