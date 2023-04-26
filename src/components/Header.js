import React, { useState } from "react";
import { Link } from "react-router-dom";
import {ReactComponent as Logo} from '../assets/icons/svg/logo.svg';
import {ReactComponent as Twitter} from '../assets/icons/svg/twitter.svg';
import {ReactComponent as Insta} from '../assets/icons/svg/insta.svg';
import {ReactComponent as LinkedIn} from '../assets/icons/svg/linkedin.svg';


function Header() {
  const [menu,setMenu] = useState(false);

  return (
    <div className="flex flex-col items-center grad-tb py-[10px]">
      <div className="flex sw py-4 gap-10 justify-between">
        <div className="flex gap-3 ">
          <Logo width={25} />
          Logo Text
        </div>
        <div className="flex-1 hidden md:flex justify-center  gap-14 ">
          <Link to="/">Home</Link>
          <Link to="/creatives">Creatives</Link>
          <Link to="/findme">Find me</Link>
        </div>
        <div className="hidden md:flex gap-7 list-none">
          <Link to="https://twitter.com"><Twitter /></Link>
          <Link to="https://insta.com"><Insta /></Link>
          <Link to="https://linkedin.com"><LinkedIn /></Link>
        </div>
        <div className="md:hidden flex flex-col items-center justify-center relative cursor-pointer"
          onClick={() => setMenu(!menu)}
        >
          <div className={"hamburger "+(menu ? 'active':'')}></div>
        </div>
      </div>
      <div className={"md:hidden px-16 py-10 w-full "+(menu ? 'flex':'hidden')}>
        <div className="flex-1 flex flex-col items-start w-full  gap-5 filter ">
          <Link to="/">Home</Link>
          <Link to="/creatives">Creatives</Link>
          <Link to="/findme">Find me</Link>
        </div>
        <div className="flex gap-7 list-none items-end">
          <Link to="https://twitter.com"><Twitter /></Link>
          <Link to="https://insta.com"><Insta /></Link>
          <Link to="https://linkedin.com"><LinkedIn /></Link>
        </div>
      </div>
    </div>
  )
}

export default Header;