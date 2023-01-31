export const index = 0
export function indexReducer(state={},action){
  if(action.type === 'increaseIndex'){
     if(state+1>=action.payload.length){
         return 0
     }
   else{
     return state+1
   }
}
else if(action.type==='decreaseIndex'){
     if(state<=0){
        return action.payload.length-1
     }
    else{
     return state-1
    }
}
else if (action.type==='addByamount'){
    return action.payload.amount
}
return state
}
export function getIndex(state){
    return state.index
} 
export function addIndex(length){
  return {
     type:'increaseIndex',
     payload:{
          length:length
     }
  }
}
export function decreaseINdex(length){
     return {
        type:'decreaseIndex',
        payload:{
          length:length
        }
     }
   }
   export function addByAmount(num){
       return {
        type:'addByamount',
        payload:{
          amount:num
        }
       }
   }
