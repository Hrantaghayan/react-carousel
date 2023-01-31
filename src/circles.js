import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIndex } from "./redux/sliderIndex";
import { addByAmount } from "./redux/sliderIndex";
export function Circles(){
    const index = useSelector(getIndex)
    const dispatch = useDispatch()
    return(
        <div className="circle-container">
        <div className="circle" style={{
            backgroundColor:index===0?'red':'#bebebe'
        }} onClick={()=>{
            dispatch(addByAmount(0))
        }}></div>
        <div className="circle"style={{
            backgroundColor:index===1?'red':'#bebebe'
        }}onClick={()=>{
            dispatch(addByAmount(1))
        }}></div>
        <div className="circle"style={{
            backgroundColor:index===2?'red':'#bebebe'
        }}onClick={()=>{
            dispatch(addByAmount(2))
        }}></div>
        </div>
    )
}