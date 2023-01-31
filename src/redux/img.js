import Pirlo from '../photos/Pirlo.jpg'
import Kaka from '../photos/Kaka.jpg'
import Luka from '../photos/Luka.jpg'
export const img = [Pirlo,Kaka,Luka]
export function imgReducer(state={}){
return state
}
export function getImg(state){
    return state.img
}