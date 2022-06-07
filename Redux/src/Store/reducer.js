
export const reducer = (state , action) =>{
    console.log(state, action);
    switch(action.type){
        case "add":{
            state.count++;
            return {...state}
        }
        case "susbstract" :{
            state.count--;
            return {...state}
        }
    
    default: {
        
        return{...state}

    }

    }
    
}