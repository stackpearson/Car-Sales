import { combineReducers } from 'redux';

import { optionsReducer } from './optionsReducer';
import { base_modelReducer } from './base_modelReducer';

export const rootReducer = combineReducers({
    optionsReducer,
    base_modelReducer   
});