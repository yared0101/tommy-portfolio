import React from "react";
import {ReactComponent as Twitter} from '../../assets/icons/svg/twitter.svg';
import {ReactComponent as Insta} from '../../assets/icons/svg/insta.svg';
import {ReactComponent as LinkedIn} from '../../assets/icons/svg/linkedin.svg';
import { Link } from "react-router-dom";


function Index() {
  return (
    <div className="flex flex-col justify-center items-center text-center h-[calc(100vh-80px)]">
      <div className='flex-1 flex flex-col gap-4 justify-center items-center'>
        <h1 className="uppercase text-5xl bolder">Contact</h1>
        <p>Tomy@tomyd.cc</p>
        <p>(251)919-781-944</p>
        <div className=" flex justify-between w-[50%]">
          <Link to="https://twitter.com"><Twitter /></Link>
          <Link to="https://insta.com"><Insta /></Link>
          <Link to="https://linkedin.com"><LinkedIn /></Link>
        </div>
      </div>
      <small className="h-[20%]">
        Really good designers @ 2022. All Rights Reserved.
      </small>
    </div>
  );
}

export default Index;