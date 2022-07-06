import { useRef, useState, useEffect } from "react";

export const ServicesShower = ({ img, size, alt, title, miniTitle }) => {
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
                <div className="services-shower-main-title">{title}</div>
            </div>
        </div>
    );
};
