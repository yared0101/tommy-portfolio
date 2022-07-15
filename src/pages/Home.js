import React, { useEffect } from "react";
import { useLocation } from "react-router";
import imageHolder from "../assets/Home-Page/image-holder.png";
import wireframes from "../assets/Home-Page/wireframes.png";
import staticDesigns from "../assets/Home-Page/static-designs.png";
import videoEdits from "../assets/Home-Page/video-edits.png";
import motionGraphics from "../assets/Home-Page/motion-graphics.png";
import { ServicesShower } from "../components/ServicesShower";
export const Home = () => {
    const location = useLocation();

    useEffect(() => {
        console.log(location.pathname);
        if (location.pathname === "/services") {
            document
                ?.getElementById("services")
                ?.scrollIntoView({ behavior: "smooth" });
        } else {
            window.scrollTo({ behavior: "smooth", top: 0 });
        }
    }, [location.pathname]);
    return (
        <div>
            <div className="hero">
                <img
                    src={imageHolder}
                    className="hero-img"
                    alt="Hero"
                    lazy="true"
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
                    />
                    <ServicesShower
                        img={wireframes}
                        size="large"
                        alt="Wireframes"
                        title="WIREFRAMES IN FIGMA"
                        miniTitle="WEB DESIGNS"
                    />
                </div>
                <div className="services-shower-parent last-home-div">
                    <ServicesShower
                        img={motionGraphics}
                        size="large"
                        alt="Motion Graphics"
                        title="MOTION GRAPHICS"
                        miniTitle="UGC"
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
