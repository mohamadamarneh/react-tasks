export const increment=(a)=>{
 return{   type:"increment", payload: a }
}

export const decrement=(a)=>{
    return{     type:"decrement", payload: a }
}

export const reset=()=>{
    return{     type:"reset",payload:2 }
}