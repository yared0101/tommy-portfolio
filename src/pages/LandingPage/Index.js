import React,{ useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Play } from "../../assets/icons/svg/play.svg";
import dosome from '../../assets/images/dosome.png';
import { path } from "../../controller/config";
import getLinks from "../../controller/getLinks";
import {ReactComponent as Arrow} from '../../assets/icons/svg/arrow.svg';
import Footer from "../../components/Footer";
import Header from "../../components/Header";


function Index() {
  return (
    <div className="flex flex-col items-center flex-1">
      <div className="sticky top-0 z-30 w-full" >
        <Header />
      </div>

      <HeadLine />
      <ReInforcement />
      <CallToAction />
    </div>
  )
}

function CallToAction() {
  return (
    <div className="w-full flex flex-col text-gray-300 items-center">
      <div className=" flex flex-row-reverse gap-5 sw justify-between  items-center my-20 flex-wrap">
        <div className="flex-1 flex justify-center max-w-full">
          <div className="flex-1 sm:mr-10 relative overflow-hidden min-w-[380px] max-w-[550px]">
            <img alt='bg' src={dosome} className="w-full h-full" />
          </div>
        </div>
        <div className="flex-1 flex justify-center  max-w-full">
          <div className="flex-1 min-w-[360px] md:max-w-[300px] self-center flex flex-col gap-6 items-start">
            <div className="flex-1 flex flex-col gap-2 justify-end">
              <p className="text-[18px] font-['Helvetica_Light'] font-light">Tommy is self taught Ad creator, website designer and video editor.</p>
              <h3 className="bolder text-[24px] text-white">Available for hire</h3>
            </div>
          </div>
        </div>
      </div>
      <Footer />

    </div>
  )
}
function ReInforcement() {
  const [links,setLinks] = useState([]);
  const [curInd,setCurInd] = useState(0);

  useEffect(() => {
    load();
  },[]);

  async function load() {
    var res = await getLinks();
    console.log(res);
    if(res.return)
      setLinks(res.data);
  }

  function changePage(ev,ind) {
    ev.preventDefault();
    setCurInd(ind);
  }

  const Nav = (props) => {
    const {to,active} = props;
    return (
    <Link to={to} className={'flex flex-nowrap gap-2 items-center text-secondary '+(active ? '':'text-secondary/40')} onMouseOver={props.onMouseOver}>
      <h2 className="text-[40px] !font-normal font-['Helvetica_Medium']">
        {props.children}
      </h2>
      <span className="inline-block">
        {active?<Arrow />:null}
      </span>
    </Link>
  )}
  
  return (
    <div className="sw flex flex-col gap-4 py-10">
      <div className="text-center py-6 mb-10">
        <h1 className="uppercase font-normal text-[49px]">Creative <b>Ad</b> & <b>Designs</b> For Your Brand.</h1>
        <p className="text-gray-400 py-2 text-[22px]">Browse the type of projects you would like to see</p>
      </div>
      <div className="flex !flex-wrap items-center sm:justify-center gap-16">
        <div className=" h-96 w-full md:w-[70%] lg:w-[50%]">
          <div className="w-full max-w-[700px] h-full relative bg-white overflow-hidden ">
            {
              links.map((link,ind) => (
                <div key={ind} className={'absolute snap-x snap-mandatory flex flex-nowrap overflow-x-auto w-full h-full '+(ind===curInd ? 'slide':'slideoff !overflow-x-hidden')}>
                  {/* <div className="absolute top-0 left-0 bg-white text-black flex items-center justify-center m-2 w-10 h-10 border border-black rounded-full">{curInd}</div> */}
                {
                  link.data.slice(0,4).map((data,i) => { 
                    return (
                      data.type === 'file' ?
                      data.name.split(".").pop() === 'mp4' ?
                        <div key={i} className="snap-start snap-always min-w-[100%] w-full h-full relative">
                          <Link to={path.pages+"/"+data.link}>
                            <video controls={false} src={path.pages+"/"+data.link} className="object-cover w-full h-full" />
                          </Link>
                        </div>
                        :
                        <div key={i} className="snap-start snap-always min-w-[100%] w-full h-full">
                            <img src={path.pages+"/"+data.link} key={i} className="object-cover w-full h-full " alt={link.name} />
                        </div>
                      :
                      <h1 key={i} className='w-full h-full flex items-center justify-center z-10 text-primary/40'>Comming Soon!</h1>
                    )
                  })
                }
                <Link to={"creatives/"+link.name} className=' snap-start snap-always min-w-[100%] w-full h-full flex items-center justify-center z-10 hover:text-primary/20'>
                  <h1 >See More...</h1>
                </Link>
                </div>
              ))
            }
          </div>
        </div>
        <div className="flex flex-col p-4 gap-5 font-semibold text-xl">
          {
            links.map((link,ind) => (
              <Nav to="#" key={ind} onMouseOver={(ev) => changePage(ev,ind)} active={ind===curInd}>{link.name}</Nav>
            ))
          }
        </div>
      </div>
    </div>
  )
}

function HeadLine() {
  return (
    <div className="grad-diag w-full flex flex-col items-center">
      <div className="flex flex-col gap-20 sw px-2 sm:px-10 p-10 justify-center min-h-[calc(100vh-75px)]">
        <div className="lg:text-center">
          <h1 className="text-[16vw] sm:!text-[92px] bolder uppercase">I Bring Ideas To Life.</h1>
        </div>
        {/* <div className="relative h-[400px] sm:!h-[300px] md:!h-[200px] lg:!h-[120px]">
          <h1 className="!text-[80px] uppercase wave">I Bring Ideas To Life.</h1>
          <h1 className="!text-[80px] uppercase wave">I Bring Ideas To Life.</h1>
          <h1 className="!text-[80px] uppercase wave">I Bring Ideas To Life.</h1>
          <h1 className="!text-[80px] uppercase wave">I Bring Ideas To Life.</h1>
        </div> */}
        <div className="flex justify-between items-center flex-wrap gap-10 lg:px-10">
          <p className="text-gray-500 text-[23px]">Currently with <span className="capitalize italic text-secondary"> little joe Woman</span></p>
          <a href="/#" className="btn_sty1 py-3 hidden sm:flex gap-3 items-center italic uppercase">Browse Work <Play className="inline-block h-6" /></a>
        </div>
      </div>
    </div>
  )
}

export default Index;