import React from "react";
import { useDispatch } from "react-redux";
import { chnagePlay } from "./redux/playorpause";
export function PLay({interval}){
    const dispatch = useDispatch()
    return (
        <button className="play-pause" onClick={()=>{
            dispatch(chnagePlay())
            interval()
        }}>
            <i className="fa-solid fa-play"></i>
        </button>
    )
}