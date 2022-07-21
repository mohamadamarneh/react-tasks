export const counterReducer=(state=0,action)=>{
console.log(action);
    switch(action.type)
    {

        case "increment":return state + action.payload;

        case "decrement":return state - action.payload;

        case "reset":return state = 0 ;

        default : return state;

    }
}