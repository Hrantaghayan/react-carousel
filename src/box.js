import React from "react";
import { ButtonLeft } from "./buttonleft";
import { ButtonRight } from "./buttonRight";
import { Circles } from "./circles";
import { PLay } from "./play";
import { Pause } from "./pause";
import { useDispatch, useSelector } from "react-redux";
import { getIndex } from "./redux/sliderIndex";
import { getImg } from "./redux/img";
import { addIndex } from "./redux/sliderIndex";
import { chnageId, getId } from "./redux/id";
import { getPlay } from "./redux/playorpause";
export function Box(){
const storeId = useSelector(getId)    
let id;
const play =  useSelector(getPlay)
const index = useSelector(getIndex)
console.log(index)
const imgs = useSelector(getImg)
const dispatch = useDispatch()
const interval = ()=>{
     id = setInterval(()=>{
         dispatch(addIndex(imgs.length))
         dispatch(chnageId(id))
    },1500)
}
    return (
        <>
        <div className="box" style={{
            backgroundImage:`url(${imgs[index]})`
        }}>
            <ButtonLeft/>
            <ButtonRight/>
        </div>
        <div className='footer'>
          <Circles/>
        </div>
        <div className="btn-container">
            {!play?<PLay interval = {interval}/>:<Pause id={storeId}/>}
          </div>
        </>
    )
}