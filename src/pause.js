import React from "react";
import { useDispatch } from "react-redux";
import { chnagePlay } from "./redux/playorpause";
export function Pause({id}){
    const dispatch = useDispatch()
    return (
        <button className="play-pause" onClick={()=>{
           clearInterval(id)
           dispatch(chnagePlay())
        }}>
            <i className="fa-solid fa-pause"></i>
        </button>
    )
}