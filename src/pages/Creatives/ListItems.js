import React, { useEffect, useState } from "react";
import { getConfig, path } from "../../controller/config";
import VidComp from "../../components/Vid";
import { useParams } from "react-router-dom";
import Image from "../../components/Image";


const defConf = {
  mode: 'row',
  width: 300,
  rows: 3,
}
function ListItems({list}) {
  const {page} = useParams();
  const [config,setConfig] = useState(defConf);
  const [loadCount,setLoadCount] = useState(0);


  let obj = list.find((obj) => {return (obj.name === page) || (page === undefined ? true : false)});

  useEffect(() => {
    load(obj);
    return () => {
      setConfig(defConf);
    }
  },[obj])

  useEffect(() => {
    setLoadCount(0);
  },[page])

  async function load(obj) {
    if(obj) {
      let configFile = obj.data.find((obj) => obj.name === 'config.json');
      if(configFile) {
        let data = await getConfig(`${path.pages}/${configFile.link}`)
        setConfig(data);
        // console.log(data);
        return true;
      }
    }
  }

  function handleLoad(vid) {
    let xsrc = vid.getAttribute('xsrc');
    if(xsrc !== 'Loaded') {
      setLoadCount(loadCount => loadCount+1);
    }
    vid.setAttribute('xsrc','Loaded')
  }

  return (
    <RowsDisp obj={obj} config={config} loadCount={loadCount} handleLoad={handleLoad} />
  )
}


function RowsDisp({obj,config,loadCount,handleLoad}) {

  let rows = config.rows || 3;
  let objList = [
    <div className="py-10 text-secondary/30 whitespace-normal sm:whitespace-nowrap">
      <h1 className="">File upload pending...</h1>
      <p>Please visit <u><a href='http://'>http://google.dropbox.com/tomi</a></u> to see all the works</p>
    </div>
  ];
  let w = config.width || defConf.width;


  if(obj) {
    if(obj.data.length > 0)
      objList = [];
      
    let count = rows;
    for(let file of obj.data) {
      let ext = file.name.split(".").pop();
      if(ext === 'json') continue;

      if(objList.length < rows)
        objList.push([]);
      ext !== 'mp4' ?
        objList[count%rows].push(
          <div className="card-sty1 " key={file.link+""+count}>
            <Image file={file} onLoad={handleLoad} />
          </div>
        )
      :
        objList[count%rows].push((
          <VidComp key={count} onLoadedData={handleLoad} file={file} />
        ))
      count+=1;
    }
  }

  // const w = config.width ? 'max-w-['+config.width+'px]' : '';
  return (
    <div className={"w-full flex flex-wrap justify-center gap-4  " + (
      config.nowrap ? '!overflow-x-auto !flex-nowrap !justify-start xlg:!justify-center snap-x snap-mandatory ' : ''
    )}
    >
      {
        objList.map((row,ind) => (
          <div key={ind} className={"flex flex-col gap-4 snap-center "} style={{maxWidth: w,minWidth: w}}>
            {row}
          </div>
        ))
      }
    </div>
  );
}


export {ListItems as default};