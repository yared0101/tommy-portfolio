import { useState } from "react";
import { Link } from "react-router-dom";

export const ServicesShower = ({
    img,
    size,
    alt,
    title,
    miniTitle,
    linkTo = "/",
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
                    <Link
                        to={linkTo}
                        className={hovering ? "half-opacity" : ""}
                        onMouseOver={() => setHovering(true)}
                        onMouseOut={() => setHovering(false)}
                    >
                        {hovering ? "LET ME BROWSE" : title}
                    </Link>
                </div>
            </div>
        </div>
    );
};
