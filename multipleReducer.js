const { createStore, combineReducers } = require("redux")
// product variable
const GET_PRODUCT = "GET_PRODUCT"
const ADD_PRODUCT = "ADD_PRODUCT"
// services variable
const GET_SERVICES = "GET_SERVICES"
const ADD_SERVICES = "ADD_SERVICES"

//product state
const initialProductState = {
    products : ["sugar", "salt"],
    numberOfProducts : 2
}
//services state
const initialServiceState = {
    services : ["seo"],
    numberOfServices : 1
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
//services action 
const getServices = () => {
   return {
    type : GET_SERVICES
   }
}
const addServices = (services) => {
   return {
    type : ADD_SERVICES,
    payload : services
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
//services reducer 
 const serviceReducer = (state = initialServiceState, action) => {
   switch (action.type) {
    case GET_SERVICES:
        return {
            ...state,
        }
    case ADD_SERVICES:
        return {
         products : [...state.services , action.payload ],
         numberOfServices : state.numberOfServices + 1
        }
   
    default:
       return state;
   }
 }
 const rootReducer = combineReducers({
    productsR : productReducer,
    servicesR : serviceReducer
 })
 // store 
 const store = createStore(rootReducer);
 store.subscribe(() => {
    console.log(store.getState());
 })

 store.dispatch(getProduct())
 store.dispatch(addProduct("tea"))
 store.dispatch(addProduct("drink"))
 store.dispatch(getServices())
 store.dispatch(addServices("web design"))