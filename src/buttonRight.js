import React from "react";
import { useSelector, useDispatch} from "react-redux";
import { getImg } from "./redux/img";
import { addIndex } from "./redux/sliderIndex";
export function ButtonRight(){
    const dispatch = useDispatch()
    const img = useSelector(getImg)
 return(
    <button className="btn-left" onClick={()=>{
        dispatch(addIndex(img.length))
    }}>
    <i className="fa-solid fa-arrow-right"></i>
    </button>
 )
}