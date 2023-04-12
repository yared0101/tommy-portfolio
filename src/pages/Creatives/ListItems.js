import React, { createRef } from "react";
import { path } from "../../controller/config";
import { ReactComponent as Play } from "../../assets/icons/svg/play.svg";


function VidComp(props) {
  const {vid,file} = props;
  return (
    <div className="card-sty1 relative vidcont"  onMouseOver={() => {vid.current.play()}} onMouseLeave={() => {vid.current.currentTime=0; vid.current.pause()}}>
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

function listItems(list,page) {
  let obj = list.find((obj,i)=>{return (obj.name===page) || (page==null?true:false)});
  let objList = [
    <div className="py-10 text-secondary/30 whitespace-normal sm:whitespace-nowrap">
      <h1 className="">File upload pending...</h1>
      <p>Please visit <u><a href='http://'>http://google.dropbox.com/tomi</a></u> to see all the works</p>
    </div>
  ];
  
  if(obj) {
    if(obj.data.length > 0)
      objList = [];
    
    let row = 4;
    // for(let i=0;i<row;i++) // push empty array row times
    //   objList.push([]);

    let count = row;
    for(let file of obj.data) {
      if(objList.length < row)
        objList.push([]);
      file.name.split(".").pop() !== 'mp4' ?
        objList[count%row].push(
          <div className="card-sty1 " key={Math.random()*10}>
            <img alt={file.name} src={path.pages+"/"+file.link} className="w-full h-full object-cover" />
          </div>
        )
      :
        objList[count%row].push(function() {
          const vid = createRef();

          return <VidComp key={Math.random()*10} vid={vid} file={file} />
        }())
      count+=1;
    }
    
  }

  return objList;
}

export default listItems;