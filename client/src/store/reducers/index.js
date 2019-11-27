import { combineReducers } from 'redux';
import { credentialReducer } from './credentialReducer';
import { categoryReducer } from './categoryReducer';
import { partyReducer } from './partyReducer';

export const reducer = combineReducers({
    credentialReducer,
    categoryReducer,
    partyReducer,
  });

