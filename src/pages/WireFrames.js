import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { baseUrl, getWireFrameImagesUrl } from "../constants";
import { LoadingDiv } from "../components/LoadingDiv";
export const WireFrame = () => {
    const [images, setImages] = useState([]);
    const [height, setHeight] = useState(828);
    const imageRef = useRef();
    useEffect(() => {
        window.scrollTo({ behavior: "smooth", top: 0 });
        axios
            .get(baseUrl + getWireFrameImagesUrl)
            .then((data) => {
                const urls = data?.data?.urls;
                if (!urls) {
                    return;
                }
                setImages(urls);
            })
            .catch((e) => console.log(e));
    }, []);
    useEffect(() => {
        if (images.length) {
            console.log(imageRef.current.clientWidth);
            setHeight(((imageRef.current.clientWidth || 677) * 828) / 677);
        }
    }, [imageRef, images]);
    const style = {
        maxWidth: "677px",
        height: `${height}px`,
        width: "100%",
        minWidth: "300px",
    };
    const imagesDivs = images.map((elem, index) => (
        <div
            key={`${index}`}
            className="m-1 small-mr-3 small-ml-3 box-hover"
            style={style}
        >
            <img
                ref={imageRef}
                style={style}
                alt={`wireframe_${index}`}
                src={elem}
                className="wireframe-img"
                // loading="lazy"
            />
        </div>
    ));
    const loadingDivs = [
        <LoadingDiv key={1} style={style} />,
        <LoadingDiv key={2} style={style} />,
        <LoadingDiv key={3} style={style} />,
        <LoadingDiv key={4} style={style} />,
    ];
    return (
        <div
            className="wireframe-images d-flex-wrap flex-center mt-5"
            style={{ minHeight: "100vh" }}
        >
            {imagesDivs.length > 0 ? imagesDivs : loadingDivs}
        </div>
    );
};
