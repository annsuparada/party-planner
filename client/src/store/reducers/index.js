import { combineReducers } from 'redux';
import { credentialReducer } from './credentialReducer';
import { categoryReducer } from './categoryReducer';
import { partyReducer } from './partyReducer';
import { todoReducer } from './todoReducer'

export const reducer = combineReducers({
    credentialReducer,
    categoryReducer,
    partyReducer,
    todoReducer,
  });

