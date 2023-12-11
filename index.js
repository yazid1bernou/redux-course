const redux = require('redux'); 
const createStore = redux.createStore;

console.log("Hello in redux"); 

const BY_CAKE = "BY_CAKE"; 

function buyCake() {
     return (
        { 
            type: BY_CAKE, 
            info: "the first action redux" 
    }) }
 const initialState = {
     numbersOfCake: 10, 
     numberIccCream: 15
    }
const reducer =(state = initialState, action) => {
         switch (action.type) {
             case BY_CAKE:
                 return {
                     ...state,
                      numbersOfCake: state.numbersOfCake - 1
                     }; 
             default: 
                return state; }
            }; 
const store = createStore(reducer);
console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() => { console.log("Update State", store.getState()); });
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
unsubscribe();