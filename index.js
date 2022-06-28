// defining constant
const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"

// state 
const initialCounterState = {
    count : 0
};

// action - object - type  , payload

const incrementCounter = () => {
    return{
        type : INCREMENT,
    };
};
const decrementCounter = () => {
    return{
        type : DECREMENT,
    };
};

// 1. state 
// 2. dispatch
// 3. reducer
// 4. store

// create reducer for counter
const reducerCounter = (state = initialCounterState, action)=>{
    switch (action.type) {
        case INCREMENT:
            
           return{
               ...state,
               count: state.count + 1
           }
        case DECREMENT:
            
           return{
            ...state,
               count: state.count - 1
           }
    
        default:
            state;
    };
}