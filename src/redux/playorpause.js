export const play = false
export function playReducer(state={},action){
    if(action.type==='changeplay'){
        return !state
    }
    return state
}
export function getPlay(state){
    return state.play
}
export function chnagePlay(){
    return {
        type:'changeplay'
    }
}