import React from "react";

export const ServicesShower = ({ img, size, alt, title, miniTitle }) => {
    return (
        <div className="services-shower">
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
                <div className="services-shower-main-title">{title}</div>
            </div>
        </div>
    );
};
