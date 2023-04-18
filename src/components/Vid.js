import React from "react";
import { path } from "../controller/config";
import { ReactComponent as Play } from "../assets/icons/svg/play.svg";


function VidComp(props) {
  const {vid,file} = props;
  return (
    <div className={props.className || "card-sty1 relative vidcont "}  onMouseOver={() => {vid.current.play()}} onMouseLeave={() => {vid.current.currentTime=0; vid.current.pause()}}>
      <div className={"absolute w-full h-full flex justify-center items-center !z-20 vid "}  >
        <div className={" bg-black text-white rounded-full h-10 w-10 p-2 flex items-center justify-center relative"}>
          <Play fill="black" className={"inline-block h-5 left-[9px] absolute"} />
        </div>
      </div>
      <video ref={vid} controls={false} src={path.pages+"/"+file.link}
      className="w-full !z-10 block" />
    </div>
  )
}

export default VidComp;