import { createReducer, createActions } from 'reduxsauce';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  search: ['searchTerm'],
  cancelSearch: null
});

export const TemperatureTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
  searchTerm: '',
  searching: false,
  results: []
};

/* ------------- Reducers ------------- */

export const cancelSearch = state => INITIAL_STATE;

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CANCEL_SEARCH]: cancelSearch
});
