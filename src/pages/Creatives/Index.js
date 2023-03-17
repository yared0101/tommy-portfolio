import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ReactComponent as Play } from "../../assets/icons/svg/play.svg";
import { path } from "../../controller/config";
import getLinks from "../../controller/getLinks";


function Index() {
  const {page} = useParams();
  const [list,setList] = useState([]);

  useEffect(() => {
    load(page);
  },[page])

  async function load(page) {
    let filter = {limit:1};

    var res = await getLinks(filter);
    if(res.data.length > 0)
      setList(res.data);

  }

  function listItems() {
    let obj = list.find((obj,i)=>{return (obj.name===page) || (page==null?true:false)});
    let objList = [
      <div className="py-10 text-secondary/30">
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
        objList[count%row].push(
          <div className="card-sty1 " key={Math.random()*10}>
            <img alt={file.name} src={path.pages+"/"+file.link} className="w-full h-full object-cover" />
          </div>
        );
        count+=1;
      }
      
    }

    return objList;
  }

  return (
    <div className="flex flex-col items-center">
      <div className="pt-10 w-full flex items-end justify-center bgcreative ">
        <div className="sw ">
          <h1 className="uppercase translate-y-[8px]">Creative Library</h1>
        </div>
      </div>
      <div className="flex gap-6 px-3 p-4 sw text-[#aaa]">
        {
          list.map((link,ind) => (
            <Link key={ind} to={`/creatives/${link.name}`}
              className={(link.name === page) || (page==null?ind===0:false)?'text-white border-bottom border-white ':''}
            >{link.name}</Link>
          ))
        }
      </div>
      <div className=" p-8 sw">
        <div className="flex flex-wrap items-start justify-center gap-4">
          {
            listItems().map((row,ind) => (
              <div className="flex flex-wrap justify-center gap-4 flex-1 max-w-[462px]">
                {row}
              </div>
            ))
          }
        </div>
      </div>
      <div className="flex items-center pb-32">
        <div className="flex flex-col gap-4 items-center py-16">
          <h1 className="text-[70px]">Got time for more?</h1>
          <p>Check out my Dropbox to have a look at my work</p>
          <Link to="#" className="btn_sty1 py-3 flex gap-2 items-center">
            Browse Work 
            <Play fill="white" className="inline-block h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Index;