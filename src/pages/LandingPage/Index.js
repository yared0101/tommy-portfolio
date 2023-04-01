import React,{useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Play } from "../../assets/icons/svg/play.svg";
import membership from '../../assets/images/membership.png';
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
    <div className="w-full bg-gray-300 text-primary flex flex-col items-center">
      <div className=" flex gap-10 sw justify-center items-center my-20 flex-wrap">
        <div className="flex-1 min-w-[360px] md:max-w-[300px] self-stretch flex flex-col gap-6 items-start">
          <div className="flex-1 flex flex-col gap-2 justify-end">
            <h3 className="bolder text-[24px]">Who am I?</h3>
            <p className="text-[18px] font-['Helvetica_Light'] font-light">Tommy is self taught Ad creator, website designer and video editor.</p>
          </div>
          <div className="flex-1">
            <button className="btn_sty1 dark py-3 flex gap-3 items-center">
              Browse Work
              <Play fill="white" className="inline-block h-6" />
            </button>
          </div>
        </div>
        <div className="flex-1 relative overflow-hidden min-w-[380px] max-w-[550px]">
          <img alt='bg' src={membership} className="w-full h-full" />
          {/* <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center">
            <div className="bg-secondary rounded-2xl p-6 flex flex-col gap-4 px-20 text-color1 items-center">
              <div className="flex rounded-md border overflow-hidden border-color1 list-none">
                <li className="p-1 px-3 bg-color1 text-white">Monthly</li>
                <li className="p-1 px-3 bg-white text-color1">Yearly</li>
              </div>
              <div className="text-center">
                <p>Membership</p>
                <h1>$10.00</h1>
                <p className="uppercase font-semibold">Every Month</p>
              </div>
              <input type='button' value='Sign Up' className="btn_sty1 bg-yellow-400" />
            </div>
          </div> */}
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
      <div className="flex items-center justify-center gap-16">
        <div className=" h-96 w-[50%]">
          <div className="w-full max-w-[700px] h-full relative bg-white overflow-hidden ">
            {
              links.map((link,ind) => (
                <div key={ind} className={'absolute snap-x snap-mandatory flex flex-nowrap overflow-x-auto w-full h-full '+(ind===curInd ? 'slide':'slideoff !overflow-x-hidden')}>
                  {/* <div className="absolute top-0 left-0 bg-white text-black flex items-center justify-center m-2 w-10 h-10 border border-black rounded-full">{curInd}</div> */}
                {
                  link.data.map((data,i) => (
                    data.type === 'file' ?
                      <div key={i} className="snap-start snap-always min-w-[100%] w-full h-full">
                        <img src={path.pages+"/"+data.link} key={i} className="object-cover w-full h-full " alt={link.name} />
                      </div>
                      :
                      <h1 key={i} className='w-full h-full flex items-center justify-center z-10 text-primary/40'>Comming Soon!</h1>
                  ))
                }
                {
                  link.data.length < 1 ? (
                    <h1 className='absolute w-full h-full flex items-center justify-center z-10 text-primary/40'>Comming Soon!</h1>
                  ) : null
                }
                </div>
              ))
            }
          </div>
        </div>
        <div className="w-[30%] flex flex-col p-4 gap-5 font-semibold text-xl">
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
      <div className="flex flex-col gap-20 sw p-10 justify-center min-h-[70vh] h-[calc(100vh-75px)]">
        <div className="text-center">
          <h1 className="!text-[92px] bolder uppercase">I Bring Ideas To Life.</h1>
        </div>
        {/* <div className="relative h-[400px] sm:!h-[300px] md:!h-[200px] lg:!h-[120px]">
          <h1 className="!text-[80px] uppercase wave">I Bring Ideas To Life.</h1>
          <h1 className="!text-[80px] uppercase wave">I Bring Ideas To Life.</h1>
          <h1 className="!text-[80px] uppercase wave">I Bring Ideas To Life.</h1>
          <h1 className="!text-[80px] uppercase wave">I Bring Ideas To Life.</h1>
        </div> */}
        <div className="flex justify-between items-center flex-wrap gap-10 px-10">
          <p className="text-gray-500 text-[23px]">Currently with <span className="capitalize italic text-secondary"> little joe Woman</span></p>
          <a href="/#" className="btn_sty1 py-3 flex gap-3 items-center italic uppercase">Browse Work <Play className="inline-block h-6" /></a>
        </div>
      </div>
    </div>
  )
}

export default Index;