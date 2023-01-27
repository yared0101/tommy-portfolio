import { useContext, useState } from "react";
import logo from "../assets/logo-70.png";
import logoLight from "../assets/logo-70-light.png";
import { BsVimeo, BsTwitter } from "react-icons/bs";
import { AiFillInstagram, AiOutlineClose } from "react-icons/ai";
import { TbMenu } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import ThemeContext from "../context/ThemeContext";
/**
 *
 * @param {{theme:"light"|"dark"}} param0 theme change for the logo and that's it
 * @returns
 */
export default function AppBar() {
    const location = useLocation();
    const { theme, setTheme } = useContext(ThemeContext);
    const [displayOptions, setDisplayOptions] = useState(false);
    const changeTheme = (theme) => {
        const newTheme = theme === "light" ? "dark" : "light";
        localStorage.setItem("theme", newTheme);
        setTheme(newTheme);
    };
    return (
        <div className="app-bar-head">
            <div
                className={`page-option-for-small ${
                    theme === "light" ? "theme-light" : "theme-dark"
                }`}
                style={{ display: displayOptions ? "flex" : "none" }}
            >
                <div
                    className={`app-bar-head ${
                        theme === "light" ? "theme-light" : "theme-dark"
                    }`}
                >
                    <div className="app-bar-order">
                        <button
                            onClick={() => setDisplayOptions((val) => !val)}
                            className="small-only menu-button"
                        >
                            {displayOptions ? (
                                <AiOutlineClose
                                    color={
                                        theme === "light" ? "black" : "white"
                                    }
                                />
                            ) : (
                                <TbMenu
                                    color={
                                        theme === "light" ? "black" : "white"
                                    }
                                />
                            )}
                        </button>
                        <div
                            onClick={() => changeTheme(theme)}
                            className="cursor-pointer"
                        >
                            <img
                                style={{ height: "65px" }}
                                alt="logo"
                                src={theme === "light" ? logo : logoLight}
                            />
                        </div>
                    </div>
                </div>

                <div
                    className={`page-option-for-small-body ${
                        theme === "light" ? "theme-light" : "theme-dark"
                    }`}
                >
                    <div className="inner-links font-bold">
                        <Link onClick={() => setDisplayOptions(false)} to="/">
                            HOME
                        </Link>
                        <Link
                            onClick={() => setDisplayOptions(false)}
                            to="/services"
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
                        <a href="https://twitter.com/Tomy_trex">
                            <BsTwitter />
                        </a>
                        <a href="https://www.instagram.com/bonafaciod">
                            <AiFillInstagram />
                        </a>
                        <a href="https://vimeo.com/bonafacio">
                            <BsVimeo />
                        </a>
                    </div>
                </div>
            </div>
            <div>
                <div className="app-bar-order">
                    <div className="app-bar-links-order font-bold big-only">
                        <Link
                            to="/"
                            className={
                                (location.pathname === "/" &&
                                    "underlined-link") ||
                                "underlined-link-white"
                            }
                        >
                            HOME
                        </Link>
                        <Link
                            to="/services"
                            className={
                                (location.pathname.match("/services") &&
                                    "underlined-link") ||
                                "underlined-link-white"
                            }
                        >
                            SERVICES
                        </Link>
                        <Link
                            to="/find-me"
                            className={
                                (location.pathname === "/find-me" &&
                                    "underlined-link") ||
                                "underlined-link-white"
                            }
                        >
                            FIND ME
                        </Link>
                    </div>
                    <button
                        onClick={() => setDisplayOptions((val) => !val)}
                        className="small-only menu-button"
                    >
                        {displayOptions ? (
                            <AiOutlineClose
                                color={theme === "light" ? "black" : "white"}
                            />
                        ) : (
                            <TbMenu
                                color={theme === "light" ? "black" : "white"}
                            />
                        )}
                    </button>
                    <div
                        onClick={() => changeTheme(theme)}
                        className="cursor-pointer"
                    >
                        <img
                            alt="logo"
                            src={theme === "light" ? logo : logoLight}
                            style={{ height: "65px" }}
                        />
                    </div>
                    <div className="app-bar-socials-order">
                        <a href="https://twitter.com/Tomy_trex">
                            <BsTwitter />
                        </a>
                        <a href="https://www.instagram.com/bonafaciod">
                            <AiFillInstagram />
                        </a>
                        <a href="https://vimeo.com/bonafacio">
                            <BsVimeo />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
