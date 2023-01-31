import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreaseINdex } from "./redux/sliderIndex";
import { getImg } from "./redux/img";
export function ButtonLeft(){
    const dispatch = useDispatch()
    const img = useSelector(getImg)
 return(
    <button className="btn-left" onClick={()=>{
       dispatch(decreaseINdex(img.length))
    }}>
        <i className="fa-solid fa-arrow-left"></i>
    </button>
 )
}