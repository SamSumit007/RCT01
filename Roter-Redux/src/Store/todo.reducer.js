import { ADD_TODO, COMPLETE_TODO, DELETED_TODO, UPDATED_TODO } from "./actionType";


export const todoReducer = (state={ todos: []} ,{type, payload}) =>{
    switch(type){
        case ADD_TODO: {
            return {...state,
            todos:[
                ...state.todos,{
                    ...payload,
                    id: state.todos.length,
                },
            ],
        }
        }
        case COMPLETE_TODO: {
            return {...state}
        }
        case DELETED_TODO: {
            return {...state}
        }
        case UPDATED_TODO: {
            return {...state}
        }
        default: {
            return state;
        }
    }
    
}