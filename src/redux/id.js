import { ActionTypes } from "@mui/base"

export  const id = undefined
export function idReducer(state={},action){
    if(action.type==='changeid'){
        return action.payload.id
    }   
    else{
    return state
}
}
export function getId(state){
    return state.id
}
export function chnageId(id){
    return {
        type:'changeid',
        payload:{
            id:id
        }
    }
}
