import React, { createRef, useEffect, useState } from "react";
import { path } from "../controller/config";
import { ReactComponent as Play } from "../assets/icons/svg/play.svg";


function VidComp(props) {
  const {file,onLoadedData} = props;
  const [loading,setLoading] = useState(true);
  const vid = createRef();

  useEffect(() => {
    if(vid.current) {
      if(vid.current.getAttribute('xsrc') !== 'Loaded')
        vid.current.setAttribute('src',vid.current.getAttribute('xsrc'));
      // console.log("-")
    }
  },[vid])

  function onLoaded() {
    setTimeout(() => {
      setLoading(false);
    },500)

    onLoadedData(vid.current);
  }

  return (
    <div className={props.className || "card-sty1 relative vidcont "} style={props.style}  onMouseOver={() => {vid.current.play()}} onMouseLeave={() => {vid.current.currentTime=0; vid.current.pause()}}>
      <div className={"absolute w-full h-full flex justify-center items-center !z-20 vid "}  >
        <div className={" bg-black text-white rounded-full h-10 w-10 p-2 flex items-center justify-center relative"}>
          <Play fill="black" className={"inline-block h-5 left-[9px] absolute"} />
        </div>
      </div>
      {
        loading ? (
          <div className="skullLoad absolute w-full h-[400px]"></div>
        ) : null
      }
      <video ref={vid} controls={false} onLoadedData={onLoaded} xsrc={path.pages+"/"+file.link}
        className={"w-full !z-10 block "+(loading ? ' hidden ':'')} />
    </div>
  )
}

export default VidComp;