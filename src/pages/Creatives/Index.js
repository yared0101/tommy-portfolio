import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ReactComponent as Play } from "../../assets/icons/svg/play.svg";
import getLinks from "../../controller/getLinks";
import listItems from "./ListItems";


function Index() {
  const {page} = useParams();
  const [list,setList] = useState([]);

  useEffect(() => {
    load(page);
  },[page])

  async function load(page) {
    let filter = {limit:1};

    var res = await getLinks(filter);
    // console.log(res.data)
    if(res.data.length > 0)
      setList(res.data.sort((a,b) => b.time - a.time));

  }


  return (
    <div className="flex flex-col items-center">
      <div className="pt-10 w-full flex items-end justify-center bgcreative ">
        <div className="sw ">
          <h1 className="uppercase translate-y-[8px]">Creative Library</h1>
        </div>
      </div>
      <div className="flex gap-6 px-3 p-4 sw text-[#aaa] overflow-x-auto">
        {
          list.map((link,ind) => (
            <Link key={ind} to={`/creatives/${link.name}`}
              className={'text-center '+((link.name === page) || (page==null?ind===0:false)?'text-white brdr-act ':'')}
            >{link.name}</Link>
          ))
        }
      </div>
      <div className=" p-8 w-[75%]">
        <div className="flex flex-wrap items-start justify-center gap-4">
          {
            listItems(list,page).map((row,ind) => (
              <div key={ind} className=" flex flex-wrap justify-center gap-4 flex-1 !min-w-[222px] max-w-[222px] ">
                {row}
              </div>
            ))
          }
        </div>
      </div>
      <div className="flex items-center pb-32">
        <div className="flex flex-col gap-4 items-center py-16">
          <h1 className="text-[50px] bolder capitalize">Got time for more?</h1>
          <p className="text-[#aaa]">Check out my Dropbox to have a look at my work</p>
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