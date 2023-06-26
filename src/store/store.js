import { configureStore, combineReducers } from '@reduxjs/toolkit';
import powerReducer from './reducers/powerReducer';
import instrumentReducer from './reducers/instrumentReducer';

const rootReducer = combineReducers({
  power: powerReducer,
  instrument: instrumentReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;