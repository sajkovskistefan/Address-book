import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { addressReducer } from './Ducks/addressReducer';

let reducers = combineReducers({
    addressReducer: addressReducer
});

let middlewares = applyMiddleware(
    thunk
);

export const store = createStore(reducers,middlewares);

export type State = ReturnType<typeof reducers>;