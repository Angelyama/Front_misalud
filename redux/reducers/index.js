// redux/reducers/index.js
import { combineReducers } from 'redux';
import sampleReducer from './sampleReducer'; // Asegúrate de tener un reducer de muestra

const rootReducer = combineReducers({
  sample: sampleReducer,
  // Agrega otros reducers aquí
});

export default rootReducer;
