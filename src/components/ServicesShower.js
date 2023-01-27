import { useState } from "react";
import { Link } from "react-router-dom";
import { GoLinkExternal } from "react-icons/go";
/**
 *
 * @param {{
 *  img: string, //img src to give as display before the link
 *  size:string, //large or small size for the home display
 *  alt: string, //alternative text if image doesn't loading
 *  title: string, //title of the link
 *  miniTitle: string, //mini title for near image view
 *  linkTo: string, //https or relative link(specify which External if on typeOfLink if external)
 *  typeOfLink: "External" | "Relative", // type of link relative by default
 *
 *
 * }} param0
 * @returns
 */
export const ServicesShower = ({
    img,
    size,
    alt,
    title,
    miniTitle,
    linkTo = "/",
    typeOfLink = "Link",
}) => {
    const [hovering, setHovering] = useState(false);
    return (
        <div className="services-shower" style={{ width: "fit-content" }}>
            <img
                alt={alt}
                src={img}
                className={
                    size === "large"
                        ? "services-image services-image-large"
                        : "services-image services-image-small"
                }
            />
            <div className="services-shower-titles">
                <div className="services-shower-mini-title">{miniTitle}</div>
                <div className="services-shower-main-title">
                    {typeOfLink === "Link" ? (
                        <Link
                            to={linkTo}
                            className={hovering ? "half-opacity" : ""}
                            onMouseOver={() => setHovering(true)}
                            onMouseOut={() => setHovering(false)}
                        >
                            {hovering ? "LET ME BROWSE" : title}
                        </Link>
                    ) : (
                        <a
                            href={linkTo}
                            type
                            className={hovering ? "half-opacity" : ""}
                            onMouseOver={() => setHovering(true)}
                            onMouseOut={() => setHovering(false)}
                            // target="_blank"
                        >
                            {hovering ? (
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "10px",
                                    }}
                                >
                                    LET ME BROWSE
                                    <GoLinkExternal />{" "}
                                </div>
                            ) : (
                                title
                            )}
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};
