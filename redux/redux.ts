import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { initialState } from './initialState';

import user from './reducers/user';


/**
 * Reducers
 */

const reducers = combineReducers({
    user
});

export type RootState = ReturnType<typeof reducers>;

/**
 * Store
 */

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export { store, initialState };