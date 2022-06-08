import { COUNTER_DECREAMENT, COUNTER_INCREAMENT } from "./actionType";


export const counterReducer =(state= {count: 0}, {type})=>{
    switch(type){
        case COUNTER_INCREAMENT: {
            state.count++;
            return {...state}
        }
        case COUNTER_DECREAMENT: {
            state.count--;
            return {...state}
        }
        default: {
            return state;
        }
    }
}