import React from "react";

import LiveBackground from "../components/liveBackground";
import { StaticImage } from "gatsby-plugin-image";

const HeroLinks = () => (
    <div className="relative flex items-center justify-center w-full mx-auto">
        <LiveBackground />
        <div className="relative w-full -z-20">
            <StaticImage
                className="h-40 lg:h-52 xl:h-56 w-full md:w-full"
                quality={100}
                src="../assets/heroLink.webp"
                loading="eager"
                alt="tło strony"
                placeholder="dominantColor"
            />
            <svg
                className="absolute -bottom-3 left-0 z-10"
                width="2004"
                height="154"
                viewBox="0 0 2004 154"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    className="fill-body-bg-color"
                    d="M0 37.9955C0 37.9955 458.5 122.495 1002 37.9955C1545.5 -46.5045 2004 37.9955 2004 37.9955V153.996H0V37.9955Z"
                />
            </svg>
            <div className="absolute w-full h-full top-0 left-0 bg-gray-900/80" />
        </div>
    </div>
);

export default HeroLinks;
