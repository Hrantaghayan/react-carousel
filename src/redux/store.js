import { createStore } from "redux";
import { combineReducers } from "redux";
import { indexReducer,index } from "./sliderIndex";
import { img,imgReducer } from "./img";
import { id,idReducer } from "./id";
import { play,playReducer } from "./playorpause";
const state = {
index,
img,
id,
play
}
export const store = createStore(combineReducers({
index:indexReducer,
img:imgReducer,
id:idReducer,
play:playReducer
}),state)