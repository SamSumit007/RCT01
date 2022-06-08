import { ADD_TODO, 
    COMPLETE_TODO,
     COUNTER_DECREAMENT, 
     COUNTER_INCREAMENT, DELETED_TODO, 
     UPDATED_TODO } from "./actionType";

export const counterInc =()=> ({type: COUNTER_INCREAMENT})
export const counterDec =()=> ({type: COUNTER_DECREAMENT})

export const todoAdd =(payload) => ({ type: ADD_TODO, payload})
export const todoCom =(id) => ({ type: COMPLETE_TODO, payload: id})
export const todoUpdate =(payload) => ({ type: UPDATED_TODO, payload})
export const todoDeleted =(id) => ({ type: DELETED_TODO, payload: id})