import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { baseUrl, getStaticImagesUrl } from "../constants";
import { LoadingDiv } from "../components/LoadingDiv";
export const Static = () => {
    const [images, setImages] = useState([]);
    const [height, setHeight] = useState(460);
    const imageRef = useRef();
    useEffect(() => {
        axios
            .get(baseUrl + getStaticImagesUrl)
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
            setHeight(((imageRef.current.clientWidth || 430) * 460) / 430);
        }
    }, [imageRef, images]);
    const style = { maxWidth: "430px", height: `${height}px`, width: "100%" };
    const imagesDivs = images.map((elem, index) => (
        <div key={`${index}`} className="m-1 small-mr-3 small-ml-3">
            <img
                ref={imageRef}
                style={style}
                alt={`static_${index}`}
                src={elem}
                loading="lazy"
            />
        </div>
    ));
    const loadingDivs = [
        <LoadingDiv key={1} style={style} />,
        <LoadingDiv key={2} style={style} />,
        <LoadingDiv key={3} style={style} />,
        <LoadingDiv key={4} style={style} />,
        <LoadingDiv key={5} style={style} />,
        <LoadingDiv key={6} style={style} />,
    ];
    return (
        <div
            className="static-images d-flex-wrap flex-center mt-5"
            style={{ minHeight: "100vh" }}
        >
            {imagesDivs.length > 0 ? imagesDivs : loadingDivs}
        </div>
    );
};
