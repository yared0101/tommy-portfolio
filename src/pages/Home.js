import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router";
import imageHolder from "../assets/Home-Page/image-holder.png";
import wireframes from "../assets/Home-Page/wireframes.png";
import staticDesigns from "../assets/Home-Page/static-designs.png";
import videoEdits from "../assets/Home-Page/video-edits.png";
import motionGraphics from "../assets/Home-Page/motion-graphics.png";
import { ServicesShower } from "../components/ServicesShower";
import { Loading } from "../components/Loading";
export const Home = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(true);
    const setLoadingFalse = () => {
        setLoading(false);
    };
    const heroref = useRef();

    useEffect(() => {
        const heroImage = document.getElementById("mainImage");

        heroImage.onload = () => {
            console.log("Image Loaded");
            const interval = setInterval(() => {
                console.log(heroImage.naturalHeight);
                if (
                    heroImage.naturalWidth > 0 &&
                    heroImage.naturalHeight > 224
                ) {
                    clearInterval(interval);
                    console.log("Image rendered");
                    setLoadingFalse();
                }
            }, 20);
        };

        if (location.pathname === "/services") {
            document
                ?.getElementById("services")
                ?.scrollIntoView({ behavior: "smooth" });
        } else {
            window.scrollTo({ behavior: "smooth", top: 0 });
        }
        // return setLoadingFalse;
    }, [location.pathname]);
    return (
        <div style={loading ? { overflow: "hidden" } : {}}>
            {loading ? <Loading /> : <></>}
            <div className="hero">
                <img
                    src={imageHolder}
                    className="hero-img"
                    alt="Hero"
                    lazy="true"
                    id="mainImage"
                    ref={heroref}
                ></img>
                <div className="bio-text">
                    <p>
                        Tomy, is a self taught visual artist, website designer
                        and video editor based out of Addis Ababa.
                    </p>
                </div>
            </div>
            <div className="text-divider" id="services">
                <div className="services-text">
                    <span className="services-text-main">SERVICES</span>
                    <br />
                    <span className="services-text-branch">
                        browse your type of project
                    </span>
                </div>
                <div className="services-shower-parent">
                    <ServicesShower
                        img={staticDesigns}
                        size="small"
                        alt="Static Designs"
                        title="STATIC DESIGNS"
                        miniTitle="ADS"
                        linkTo="/services/static"
                    />
                    <ServicesShower
                        img={wireframes}
                        size="large"
                        alt="Wireframes"
                        title="WIREFRAMES IN FIGMA"
                        miniTitle="WEB DESIGNS"
                        linkTo="/services/wireframes"
                    />
                </div>
                <div className="services-shower-parent last-home-div">
                    <ServicesShower
                        img={motionGraphics}
                        size="large"
                        alt="Motion Graphics"
                        title="MOTION GRAPHICS"
                        miniTitle="UGC"
                        // linkTo="/services/motion-graphics"
                    />
                    <ServicesShower
                        img={videoEdits}
                        size="small"
                        alt="Video Edits"
                        title="VIDEO EDITS"
                        miniTitle="EDITS"
                    />
                </div>
            </div>
        </div>
    );
};
