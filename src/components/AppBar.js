import { useState, useRef, useEffect } from "react";
import logo from "../assets/logo.png";
import { BsVimeo, BsTwitter } from "react-icons/bs";
import { AiFillInstagram, AiOutlineClose } from "react-icons/ai";
import { TbMenu } from "react-icons/tb";
import { Link } from "react-router-dom";
export default function AppBar() {
    const [displayOptions, setDisplayOptions] = useState(false);
    const appLength = useRef();
    const [height, setHeight] = useState(0);
    useEffect(() => {
        // if (height != appLength.current.clientHeight) {
        setHeight(appLength.current.clientHeight - 2);
        // }
    }, [appLength]);
    return (
        <div className="app-bar-head" ref={appLength}>
            <div
                className="page-option-for-small"
                style={{
                    display: displayOptions ? "flex" : "none",
                    top: height,
                }}
            >
                <div className="inner-links">
                    <Link to="/" onClick={() => setDisplayOptions(false)}>
                        HOME
                    </Link>
                    <Link
                        to="/services"
                        onClick={() => setDisplayOptions(false)}
                    >
                        SERVICES
                    </Link>
                    <Link
                        to="/find-me"
                        onClick={() => setDisplayOptions(false)}
                    >
                        FIND ME
                    </Link>
                </div>
                <div className="inner-socials">
                    <a href="https://twitter.com">
                        <BsTwitter />
                    </a>
                    <a href="https://instagram.com">
                        <AiFillInstagram />
                    </a>
                    <a href="https://vimeo.com">
                        <BsVimeo />
                    </a>
                </div>
            </div>
            <div className="app-bar">
                <div className="app-bar-order">
                    <div className="app-bar-links-order big-only">
                        <Link to="/" className="underlined-link">
                            HOME
                        </Link>
                        <Link to="/services">SERVICES</Link>
                        <Link to="/find-me">FIND ME</Link>
                    </div>
                    <button
                        onClick={() => setDisplayOptions((val) => !val)}
                        className="small-only menu-button"
                    >
                        {displayOptions ? <AiOutlineClose /> : <TbMenu />}
                    </button>
                    <div>
                        <img alt="logo" src={logo} />
                    </div>
                    <div className="app-bar-socials-order">
                        <a href="https://twitter.com">
                            <BsTwitter />
                        </a>
                        <a href="https://instagram.com">
                            <AiFillInstagram />
                        </a>
                        <a href="https://vimeo.com">
                            <BsVimeo />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
