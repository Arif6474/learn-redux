const { createStore } = require("redux");

const ADD_USER = ADD_USER;
const INCREMENT = INCREMENT;

// state
const initialState = {
    users: ["Jobair"],
    count : 1
}
// action

const addUser = (value) => {
    return {
        type : ADD_USER,
        payload : value
    }
}
// reducer 
const userReducer =(state = initialState, action) => {
    switch (action.type) {
      case ADD_USER:
        return {
          users : [...state.users , action.payload],
          count: state.count + 1
        }
        default :
        state;
    }
}
// store 
const store = createStore(userReducer);
store.subscribe(()=>{
    console.log(store.getState());
})
store.dispatch(addUser("emon"));