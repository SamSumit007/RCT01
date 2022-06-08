import { combineReducers } from "redux";
import { counterReducer } from "./counter.reducer";
import { todoReducer } from "./todo.reducer";

import { legacy_createStore, applyMiddleware, compose } from "redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const rootreducer = combineReducers({
    counter: counterReducer,
    todo: todoReducer,
});

export const store = legacy_createStore(rootreducer,
     composeEnhancers(applyMiddleware()));

// const initialState = {
//     counter:{
//         count: 0,
//     },
//     todo: {
//         todos: [],
// //     },
// };
