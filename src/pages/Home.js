import React from "react";
import imageHolder from "../assets/Home-Page/image-holder.png";
import wireframes from "../assets/Home-Page/wireframes.png";
import staticDesigns from "../assets/Home-Page/static-designs.png";
import videoEdits from "../assets/Home-Page/video-edits.png";
import motionGraphics from "../assets/Home-Page/motion-graphics.png";
import { ServicesShower } from "../components/ServicesShower";
export const Home = () => {
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
                        and video ediitor based out of Addis Ababa.
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
