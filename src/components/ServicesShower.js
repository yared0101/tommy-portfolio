import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const ServicesShower = ({
    img,
    size,
    alt,
    title,
    miniTitle,
    linkTo = "/",
}) => {
    const imgWidth = useRef();
    const [width, setWidth] = useState(0);
    useEffect(() => {
        setWidth(imgWidth.current.clientWidth);
    }, [imgWidth]);
    return (
        <div className="services-shower">
            <img
                ref={imgWidth}
                alt={alt}
                src={img}
                className={
                    size === "large"
                        ? "services-image services-image-large"
                        : "services-image services-image-small"
                }
            />
            <div className="services-shower-titles" style={{ width }}>
                <div className="services-shower-mini-title">{miniTitle}</div>
                <div className="services-shower-main-title">
                    <Link to={linkTo}>{title}</Link>
                </div>
            </div>
        </div>
    );
};
