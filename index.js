console.log("Hello in redux");

const BY_CAKE = "BY_CAKE";

{
   type :  BY_CAKE ,
  
}

const byCake =  () => {
    return(
       {
        type :  BY_CAKE ,
        info : "the first action redux"
       
       })

}

const initialState =  {
    numbersOfCake : 10 
}

const reducer = ( state = initialState , action ) => {
     switch(action.type) {
        case "BUY_CAKE" :
            return {
                ...state ,
                numbersOfCake : state.numbersOfCake - 1 
            }
     }
}
