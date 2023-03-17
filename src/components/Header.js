import React from "react";
import { Link } from "react-router-dom";
import {ReactComponent as Logo} from '../assets/icons/svg/logo.svg';
import {ReactComponent as Twitter} from '../assets/icons/svg/twitter.svg';
import {ReactComponent as Insta} from '../assets/icons/svg/insta.svg';
import {ReactComponent as LinkedIn} from '../assets/icons/svg/linkedin.svg';


function Header() {
  return (
    <div className="flex flex-col items-center grad-tb">
      <div className="flex sw py-4 justify-between">
        <div className="flex gap-3">
          <Logo width={25} />
          Logo Text
        </div>
        <div className="flex-1 hidden sm:flex justify-center gap-10">
          <Link to="/">Home</Link>
          <Link to="/creatives">Creatives</Link>
          <Link to="/findme">Find me</Link>
        </div>
        <div className="hidden sm:flex gap-4 list-none">
          <Link to="https://twitter.com"><Twitter /></Link>
          <Link to="https://insta.com"><Insta /></Link>
          <Link to="https://linkedin.com"><LinkedIn /></Link>
        </div>
      </div>
    </div>
  )
}

export default Header;