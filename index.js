const redux = require("redux"); 
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const reduxLogger =  require("redux-logger");


const applyMiddleware = redux.applyMiddleware ;
const logger =   reduxLogger.createLogger() ;

console.log("Hello in redux"); 

const BUY_CAKE = "BY_CAKE"; 
const BUY_ICECREAM = "BUY_ICECREAM";

function buyCake() {
     return (
        { 
            type : BUY_CAKE, 
          
    }) }

function buyIcecream () {
    return (
        { 
            type : BUY_ICECREAM, 
          
    })}


/*  const initialState = {
     numbersOfCake: 10, 
     numberIccCream: 20
    } */

const initialCakeState =  {
    numbersOfCake: 10
}
const initialIcecreamState =  {
    numberIccCream : 20 
}


const cakeReducer =(state = initialCakeState, action) => {
         switch (action.type) {
             case BUY_CAKE:
                 return {
                     ...state,
                      numbersOfCake: state.numbersOfCake - 1
                     }; 
            
             default: 
                return state; }
            }; 

const icecreamReducer =(state = initialIcecreamState, action) => {
                switch (action.type) {
                    case BUY_ICECREAM:
                       return {
                           ...state ,
                           numberIccCream : state.numberIccCream - 1 
                       }
                    default: 
                       return state; }
                   }; 

const rootReducer = combineReducers({
    cake : cakeReducer ,
    icecream : icecreamReducer 
})                   
const store = createStore(rootReducer , applyMiddleware(logger));
console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() => {
    // console.log("Update State", store.getState()); 
    });
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())
unsubscribe();


