import React, { createRef, useEffect, useState } from "react";
import { path } from "../controller/config";

function Image(props) {
  const {file,onLoad} = props;
  const [loading,setloading] = useState(true);
  const _img = createRef();
  
  useEffect(() => {
    if(_img.current) {
      if(_img.current.getAttribute('xsrc') !== 'Loaded')
        _img.current.setAttribute('src',_img.current.getAttribute('xsrc'));
    }
  },[_img])

  function handleLoad() {
    setTimeout(() => {
      setloading(false);
    },500)

    onLoad(_img.current);
  }

  return (
    <div>
      {
        loading ? (
          <div className="skullLoad absolute w-full h-[200px]"></div>
        ) : null
      }
      <img ref={_img} alt={file.name} onLoad={handleLoad} xsrc={path.pages+"/"+file.link} className={"w-full h-full object-cover "+(loading?'hidden': '')} />
    </div>
  )
}

export default Image;