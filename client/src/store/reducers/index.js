import { combineReducers } from 'redux';
import { credentialReducer } from './credentialReducer';
import { categoryReducer } from './categoryReducer';
import { partyReducer } from './partyReducer';
import { todoReducer } from './todoReducer'
import { shoppingReducer } from './shoppingReducer'

export const reducer = combineReducers({
    credentialReducer,
    categoryReducer,
    partyReducer,
    todoReducer,
    shoppingReducer,
  });

