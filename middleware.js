const { createStore, applyMiddleware } = require("redux")
const { default: logger } = require("redux-logger")
// product variable
const GET_PRODUCT = "GET_PRODUCT"
const ADD_PRODUCT = "ADD_PRODUCT"


//product state
const initialProductState = {
    products : ["sugar", "salt"],
    numberOfProducts : 2
}


//product action 
const getProduct = () => {
   return {
    type : GET_PRODUCT
   }
}
const addProduct = (product) => {
    return {
     type : ADD_PRODUCT,
     payload : product
    }
 }

//product reducer 
 const productReducer = (state = initialProductState, action) => {
   switch (action.type) {
    case GET_PRODUCT:
        return {
            ...state,
        }
    case ADD_PRODUCT:
        return {
         products : [...state.products , action.payload ],
         numberOfProducts : state.numberOfProducts + 1
        }
   
    default:
       return state;
   }
 }


 // store 
 const store = createStore(productReducer , applyMiddleware(logger));
 store.subscribe(() => {
    console.log(store.getState());
 })

 store.dispatch(getProduct())
 store.dispatch(addProduct("tea"))
 store.dispatch(addProduct("drink"))
